const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build'
    },
    entry: {
        index: './client/index.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }, {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/, 
                use: [ 'file-loader' ] 
            }, { 
                test: /\.(png|svg|jpg|gif)$/, 
                loader: "file-loader" 
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};