const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'src/**/*.d.ts',
        to: '[name].ts',
      },
    ]),
  ],
};

module.exports = config;