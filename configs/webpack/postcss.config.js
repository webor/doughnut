/** 
 * This File is used to include browser specific styling to our react project
*/
module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
          browsers: 'last 2 versions',
        },
        'cssnano': {},
      }
};