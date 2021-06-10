const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMiniExtract = require('mini-css-extract-plugin');

function webpackConfigGenerator (env) {
    const sourcemaps = process.env.NODE_ENV == 'development'
    const webpackInitConfig = {
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
                        { loader: 'css-loader', options: { sourceMap: sourcemaps } },
                        { loader: 'postcss-loader', options: { sourceMap: sourcemaps } }
                    ]
                },
                {
                    test: /\.less$/,
                    exclude: /node_modules/,
                    use: [
                        CssMiniExtract.loader,
                        { loader: 'css-loader', options: { sourceMap: sourcemaps } },
                        { loader: 'postcss-loader', options: { sourceMap: sourcemaps } },
                        { loader: 'less-loader', options: { sourceMap: sourcemaps } }
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
                ENV: JSON.stringify(process.env)
            })
        ],
    };
    return webpackInitConfig;
}

module.exports = webpackConfigGenerator;