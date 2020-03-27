const path = require('path');

const config = {
  mode: process.env.NODE_ENV,
  entry: './source/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.NODE_ENV === 'production' ? 'index.min.js' : 'index.js',
    library: '[name]',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: [],
};

module.exports = config;