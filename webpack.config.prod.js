const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // minimizar el CSS generado
const TerserPlugin = require('terser-webpack-plugin'); // minimizar el JS generado
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    plugins: [
        new CssMinimizerPlugin(),
        new TerserPlugin(),
        new webpack.DefinePlugin({
            PRODUCTION: true
        })
    ]
}
