const { merge } = require('webpack-merge');
const baseConfigGenerator = require('./webpack.config.base.js');
const prodConfig = require('./webpack.config.prod');
const devConfig = require('./webpack.config.dev');

function webpackEnviromentSelector() {
    let config;
    let env = process.env.NODE_ENV;
    if (env == 'production') config = prodConfig;
    if (env == 'development') config = devConfig;
    const baseConfig = baseConfigGenerator(env);
    return merge(baseConfig, config);
}

module.exports = webpackEnviromentSelector;
