var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: 'source-map',
	output: {
		filename: '../dist/bundle.min.js'
	},
    module: {
        preLoaders: [
          {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders: [
            { test: /\.js$/, exclude: [/node_modules/], loaders: ['babel'] },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader?outputStyle=compressed")
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin("../dist/app.min.css"),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {warnings: false}
        })
    ],
    eslint: {
        failOnWarning: true
    }
};