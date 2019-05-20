const MiniCssExtractPlugin = require('mini-css-extract-plugin'), //This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
    path = require('path'),
    NodeConfig = require('../../nodeConfig'),
    _devMode = 'production' !== NodeConfig.environment;

module.exports = {
    test: /\.less$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'style-loader',  //This adds CSS to the DOM by injecting a <script /> tag in the header
            options: {
                sourceMap: true,
            }
        },
        {
            loader: 'css-loader',      //To convert our .less files into .css
            options: { importLoaders: 1 }
        },
        {
            loader: 'postcss-loader',
            options: {
                config: {
                    path: path.resolve(__dirname, "../postcss.config")
                }
            }
        },
        'less-loader',
    ]
};
