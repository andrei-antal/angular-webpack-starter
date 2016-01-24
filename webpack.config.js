var path = require('path');

module.exports = {
  context : path.join(__dirname, 'app'),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /(\.scss)|(\.css)$/,
        loader: 'style!css!autoprefixer?browsers=last 2 version!sass'
      }
    ]
  },
  devServer: {
    contentBase: 'app',
    noInfo: false,
    inline: true
  }
};
