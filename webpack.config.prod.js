const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMiniExtract = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // minimizar el CSS generado
const TerserPlugin = require('terser-webpack-plugin'); // minimizar el JS generado

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
        new CssMinimizerPlugin(),
        new TerserPlugin()
    ]
}