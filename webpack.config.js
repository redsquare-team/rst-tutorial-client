const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    devServer: {
        port: 8080,
        historyApiFallback: true,
    },
    output: {
        path: path.resolve(__dirname, './srv'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    entry: [
        './src/index.jsx'
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            }
        ]
    },
    plugins: [htmlPlugin]
};