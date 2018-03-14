const path = require('path')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: '../public/app.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      mock: path.resolve(__dirname, './src/mock'),
    }
  },

  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'react', 'stage-2']
      }
    },
    {
      test: /\.styl$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader!stylus-loader'
    }
  ]}
};

