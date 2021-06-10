const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map', // Depurar elcódigo compilado
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: false
        })
    ]
}
