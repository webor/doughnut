const path = require("path");

module.exports = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: path.resolve(__dirname, '../../../.eslintrc.json')
    },
  }
};