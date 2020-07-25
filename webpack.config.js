const path = require('path');

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const JSONMinify = require('node-json-minify');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	mode: isProd ? 'production' : 'development',
	entry: {
		app: path.resolve(__dirname, 'src/bootstrap.tsx'),
	},
	devtool: isProd ? 'none' : 'source-map',
	devServer: {
		compress: true,
		port: 4004,
		hot: true,
		clientLogLevel: 'info',
	},
	optimization: {
		minimize: isProd,
		splitChunks: {
			chunks: 'all',
			name: false,
		},
		minimizer: [new OptimizeCSSAssetsPlugin(), new TerserJSPlugin({
			sourceMap: isProd,
		})],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [
				{
					from: path.join(__dirname, './src/assets/manifest.json'),
					to: path.join(__dirname, './build/manifest.json'),
					...isProd && {
						transform(content) {
							return JSONMinify(content.toString());
						}
					},
				}
			]
		}),
		new webpack.DefinePlugin({
			VERSION: JSON.stringify(require('./package.json').version)
		}),
		new HtmlWebpackPlugin(
			Object.assign(
				{},
				{
					inject: true,
					template: path.resolve(__dirname, 'src/index.html'),
					favicon: path.resolve(__dirname, 'src/assets/favicon.ico'),
				},
				isProd
					? {
						minify: {
							removeComments: true,
							collapseWhitespace: true,
							removeRedundantAttributes: true,
							useShortDoctype: true,
							removeEmptyAttributes: true,
							removeStyleLinkTypeAttributes: true,
							keepClosingSlash: true,
							minifyJS: true,
							minifyCSS: true,
							minifyURLs: true,
						},
					}
					: undefined
			)
		),
		new MiniCssExtractPlugin({
			filename: isProd
				? '[name].[contenthash:8].min.css'
				: '[name].css',
			chunkFilename: isProd
				? '[id].[contenthash:8].min.css'
				: '[name].chunk.css',
		}),
		...(isProd
			? [new workboxPlugin.GenerateSW({ clientsClaim: true, skipWaiting: true, })]
			: []
		)
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					...isProd ? [MiniCssExtractPlugin.loader] : [],
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [autoprefixer()],
						},
					},
					'sass-loader',
				],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: isProd ? '[name].[hash:8].min.js' : '[name].js',
		chunkFilename: isProd ? '[name].[contenthash:8].chunk.min.js' : '[name].chunk.js',
		path: path.resolve(__dirname, 'build'),
	},
};
