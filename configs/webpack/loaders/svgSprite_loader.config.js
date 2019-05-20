
module.exports = {
    test: /\.svg$/,
    use: [
        {
            loader: 'svg-sprite-loader',
            options: {
                extract: true,
                spriteFilename: 'icons.svg',
                runtimeCompat: true,
            }
        },
        'svgo-loader'
    ]

}