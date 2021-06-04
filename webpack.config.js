const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMiniExtract = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: {
        app: ['@babel/polyfill', './src/index.ts'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[chunkhash][name].js',
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
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    CssMiniExtract.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    CssMiniExtract.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
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
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}
