const path = require('path');
module.exports = {
    contentBase: path.resolve(__dirname, '../../dist/unbabel'),
    publicPath: '/unbabel/',
    overlay: { errors: true },
    hot: true,
    watchContentBase: true,
    compress: true,
    historyApiFallback: true
}