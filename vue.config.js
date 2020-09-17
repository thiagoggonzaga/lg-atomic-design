const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/autoatendimento' : '/', // caso precise alterar a url publica
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    devtool: 'source-map',
  },
};
