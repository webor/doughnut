const MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    webpack = require("webpack"),
    path = require("path"),
    NodeConfig = require('../nodeConfig'),
    SpriteLoaderPlugin = require('svg-sprite-loader/plugin'),
    _devMode = 'production' !== NodeConfig.environment;

module.exports = [


    /**Enables Dynamic Module loading */
    new webpack.HotModuleReplacementPlugin(),

    /**MiniCssExtractPlugin to handle CSS files*/
    new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css',
    }),

    /**plugin for loading svg-sprites */
    new SpriteLoaderPlugin({
        plainSprite: true
    }),

    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(NodeConfig.environment),
            SERVICE_DOMAIN: JSON.stringify(process.env.SERVICE_DOMAIN),
            SERVICE_PROTOCOL: JSON.stringify(process.env.SERVICE_PROTOCOl),
            BASE_HOST: JSON.stringify(process.env.BASE_HOST),
            COOKIE_DOMAIN: JSON.stringify(process.env.COOKIE_DOMAIN),
            DASHBOARD_HOST: JSON.stringify(process.env.DASHBOARD_HOST),
            STATIC_BASE_URL: JSON.stringify(process.env.STATIC_BASE_URL)
        }
    })


]