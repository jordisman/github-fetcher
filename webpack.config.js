
const path = require('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}