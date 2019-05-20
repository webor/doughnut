const path = require("path"),
    nodeConfig = require("./configs/nodeConfig"),
    aliasConfig = require(path.resolve(__dirname, './configs/webpack/alias.config')),
    pluginsConfig = require(path.resolve(__dirname, './configs/webpack/plugins')),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CompressionPlugin = require("compression-webpack-plugin"),
    basePaths = {
        loaders: './configs/webpack/loaders/',
        base: './configs/webpack/'
    },
    outputPath = path.join(process.cwd(), "dist/unbabel");

let entryPoints = [
    "./src/main.jsx",
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=false&quiet=true"
],
    _devtool = "source-map";
if (nodeConfig.environment !== 'development') {
    entryPoints = [
        "./src/main.jsx"
    ]
    _devtool = "";
}
let _mode = nodeConfig.environment !== 'development' ? 'production' : 'development';

module.exports = {
    context: __dirname,
    devtool: _devtool,
    entry: [...entryPoints],
    mode: _mode,
    output: {
        path: outputPath,
        filename: "[name].js",
        publicPath: "/unbabel/"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: aliasConfig
    },
    module: {
        rules: [
            require(path.resolve(__dirname, basePaths.loaders + 'babel_loader.config')),
            require(path.resolve(__dirname, basePaths.loaders + 'css_loader.config')),
            // require(path.resolve(__dirname, basePaths.loaders + 'eslint_loader.config')),
            require(path.resolve(__dirname, basePaths.loaders + 'less_loader.config')), //less-loader.
            require(path.resolve(__dirname, basePaths.loaders + 'svgSprite_loader.config')),
            require(path.resolve(__dirname, basePaths.loaders + 'font_loader.config'))

        ]
    },
    plugins: [
        ...pluginsConfig,
        new HtmlWebpackPlugin({
            filename: './index.ejs',
            template: 'public/index.ejs',
            chunks: ['main', 'vendor']
        }),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i
        })
    ],
    devServer: require(path.resolve(__dirname, basePaths.base + 'devServer.config')),
    optimization: require(path.resolve(__dirname, basePaths.base + 'chunks.config')),
}