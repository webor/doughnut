/**
 * transpile everything after it using babel rules in .babelrc
 * https://timonweb.com/posts/how-to-enable-es6-imports-in-nodejs/
 *
*/
require("@babel/register")({
    presets: ["@babel/preset-env"]
});
require("@babel/polyfill");
require("./express.js");