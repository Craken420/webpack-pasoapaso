const path = require('path');
const htmlWebpakcPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        app: ['@babel/polyfill', './src/index.js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[chunkhash][name].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpakcPlugin({
            title: 'Webapack paso por paso',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
}
