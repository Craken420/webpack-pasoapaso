const path = require('path');
const htmlWebpakcPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['js']
    },
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[chunkhash].[name].js',
        clean: true
    },
    plugins: [
        new htmlWebpakcPlugin({
            title: 'Webapack paso por paso',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
}
