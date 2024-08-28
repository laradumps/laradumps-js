const path = require('path');
const webpack  = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'dist'),
    devtool: 'inline-source-map',
    entry: './index.js',
    mode: 'development',
    module: {
        rules: [{
            test: /\.js?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    }
};