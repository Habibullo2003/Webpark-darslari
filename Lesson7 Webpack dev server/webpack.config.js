const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // mode
  mode: 'development', // production
  // entry
  entry: {
    app: path.resolve(__dirname, './src/app.js'),
    about: path.resolve(__dirname, './src/about.js')
  },
  // output
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      // title
      title: 'Webpack 5',
      // filename
      filename: 'index.html',
      // template
      template: './src/temp.html',
      // chunks
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      // title
      title: 'About',
      // filename
      filename: 'about.html',
      // template
      template: './src/tempAbout.html',
      // chunks
      chunks: ['about'],
    }),
  ],
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
  // devServer
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  }, 
} 