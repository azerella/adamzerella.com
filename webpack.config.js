module.exports = {
    entry: "./index.js",
    output: {
        filename: "out.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
        contentBase: './',
        hot: true
    }
};