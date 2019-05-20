module.exports = {
    test: /\.(ttf|eot|woff|gif|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: [{
        loader: 'file-loader'
    }]
}