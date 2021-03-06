var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


 module.exports = {
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         publicPath: '/',
         filename: 'bundle.js'
     },
     module: {
         rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
         ]
     },
     plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
     ],
     stats: {
         colors: true
     }
 };
