const path = require('path');

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	mode: isProd ? 'production' : 'development',
	entry: {
		app: path.resolve(__dirname, 'src/bootstrap.tsx'),
	},
	devtool: isProd ? 'none' : 'source-map',
	devServer: {
		compress: false,
		port: 9000,
		hot: false,
		contentBase: path.resolve(__dirname, 'build'),
		clientLogLevel: 'silent',
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
				? '[name].[contenthash:5].min.css'
				: '[name].[contenthash:5].css',
			chunkFilename: '[id].[contenthash:5].css',
		}),
		// new WorkboxPlugin.GenerateSW({
		// 	clientsClaim: true,
		// 	skipWaiting: true,
		// }),
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
					MiniCssExtractPlugin.loader,
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
		filename: isProd ? '[name].[hash:5].min.js' : '[name].js',
		chunkFilename: isProd ? '[name].[contenthash:8].chunk.min.js' : '[name].chunk.js',
		path: path.resolve(__dirname, 'build'),
	},
};
