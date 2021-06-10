const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map', // Depurar elcódigo compilado,
    devServer: {
        port: 9001,
        contentBase: path.join(__dirname, 'assets'),
        headers: { "Access-Control-Allow-Origin": "*" }
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: false
        })
    ]
}
