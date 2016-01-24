var path = require('path');
var webpack = require('webpack');

var config = {
  context : path.join(__dirname, 'app'),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js'
  },
  plugins: [],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
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

if (process.env.NODE_ENV == 'production') {
  config.output.path = path.join(__dirname, 'dist');
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      drop_console: true
    },
    output: {
      comments: false
    }
  }));
}

module.exports = config;
