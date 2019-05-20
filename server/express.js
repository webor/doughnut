/**
 * we have registered babel hence 
 * ECMA2017 can be used over here no need for commonjs  
 */
import express from "express";
import webpack from "webpack";
import compression from "compression";
import nodeConfig from '../configs/nodeConfig';
import webpackConfig from "../webpack.config.js";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
const PORT = process.env.PORT || 8000;



/**Creates a compiler npm run dev use*/
const compiler = webpack(webpackConfig);

const server = express();
server.use(compression());

/**Enables Hot reloading like achieved in webpack-dev-server */
if (nodeConfig.environment === 'development') {
    server.use(webpackDevMiddleware(compiler, webpackConfig.devServer));
    server.use(webpackHotMiddleware(compiler));
}

server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

/**serves from dist folder*/
server.use(express.static("dist/unbabel"));
server.set('views', 'dist/unbabel');
server.set('view engine', 'ejs');

server.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});


server.get('*', function (req, res) {
    res.render('index.ejs');
});


server.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
});