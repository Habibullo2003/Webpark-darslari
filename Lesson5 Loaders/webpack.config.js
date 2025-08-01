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
  // loaders
   module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
}