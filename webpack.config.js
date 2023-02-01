/**
* @file webpack.config.js webpack编译配置
* @author pianruijie(pianruijie@baidu.com)
*/
const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: 'production',
    entry: {
        'needCompile': './src/needCompile/index.ts',
    },
    target: 'node',
    module: {
        rules: [{
            test: /\.ts|.js?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
            'process.env.BUILD_VERSION': JSON.stringify(process.env.VERSION || 'DEV')
        }),
        new webpack.NamedModulesPlugin()
    ],
    node: {
        __dirname: false,
        __filename: false
    }
};