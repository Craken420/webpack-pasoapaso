const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMiniExtract = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map', // Depurar elcódigo compilado
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: {
        app: ['@babel/polyfill', './src/index.ts'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'assets/js/[hash][name].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    CssMiniExtract.loader,
                   { loader: 'css-loader', options: { sourceMap: true } },
                   { loader: 'postcss-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    CssMiniExtract.loader,
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'less-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8000,
                        name: '[name]-[hash].[ext]',
                        outputPath: 'assets/images/',
                        publicPath: 'assets/images/'
                    }
                }]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webapack paso por paso',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CssMiniExtract({
            filename: 'assets/css/[hash]-[name].css',
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false)
        })
    ]
}
