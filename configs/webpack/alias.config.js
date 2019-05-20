const path = require('path');
const envMode = process.env.NODE_ENV || "development";
module.exports = {
        config: path.resolve(__dirname, `../../src/config/${envMode}`),
        configs: path.resolve(__dirname, '../../configs'),
        public: path.resolve(__dirname, '../../public'),
        helper: path.resolve(__dirname, '../../src/helper'),
        library: path.resolve(__dirname, '../../src/lib'),
        app: path.resolve(__dirname, '../../src/app'),
        constants: path.resolve(__dirname, '../../src/constants'),
        hoc: path.resolve(__dirname, '../../src/hoc'),
        css: path.resolve(__dirname, '../../src/css'),
        reducers: path.resolve(__dirname, '../../src/reducers'),
        containers: path.resolve(__dirname, '../../src/containers'),
        services: path.resolve(__dirname, '../../src/services'),
        store: path.resolve(__dirname, '../../src/store'),
        components: path.resolve(__dirname, '../../src/components'),
        actions: path.resolve(__dirname, '../../src/actions'),
        views: path.resolve(__dirname, '../../src/views'),
        viewObjects: path.resolve(__dirname, '../../src/viewObjects')
}
