const path = require('path')

module.exports = {
  mode: 'development',
  // This is the entry point or start of our react applicaton
  entry: ['babel-polyfill', './src/client/index.js'],
  // The plain compiled JavaScript will be output into this file
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // This section desribes the transformations we will perform
  module: {
    rules: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.(js|jsx)$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /client/,
        loader: 'babel-loader',
        options: {
          // Enables caching in 'babel-loader' directory ./node_modules/.cache/babel-loader/
          // for faster rebuilds
          cacheDirectory: true
        }
      }
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  // For different options: https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'cheap-module-eval-source-map'
}
