const path = require('path')

module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'), //Output build directory name
    publicPath: '/', //The bundled files will be available in the browser under this path.
  },
  devtool: 'source-map', //How source codes are mapped/shown in the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
