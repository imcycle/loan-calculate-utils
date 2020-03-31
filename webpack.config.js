const path = require('path');
const isMin = !!~process.env.NODE_ENV.indexOf('min');
const type = process.env.NODE_ENV.replace(/:.*/g, '');
const libraryTarget = type === 'iife' ? 'window' : type;

const config = {
  mode: isMin ? 'production' : 'development',
  entry: './source/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `index.${type}${isMin ? '.min' : ''}.js`,
    library: 'loanCalculateUtils',  // 整个库对外暴露的变量名
    libraryTarget,  // 变量名添加到哪个上 browser
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: [],
};

module.exports = config;