const path = require('path')

module.exports = {
  // mode
  mode: 'development', // production
  // entry
  entry: path.resolve(__dirname, './src/app.js'),
  // output
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
}