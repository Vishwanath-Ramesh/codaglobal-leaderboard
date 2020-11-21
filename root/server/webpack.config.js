const path = require('path')

const env = String(process.env.NODE_ENV).toLowerCase()

module.exports = {
  mode: env || 'production',
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'), // Output build directory name
    publicPath: '/', // The bundled files will be available in the browser under this path.
  },
  externals: {
    // Prevent bundling of certain imported packages and instead retrieve these external dependencies at runtime
    express: 'express',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
