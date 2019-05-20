module.exports = {
    occurrenceOrder: true,
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /node_modules/,
                chunks: "all",
                name: "vendor",
                priority: 1
            }
        }
    }
}