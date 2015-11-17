import webpack from 'webpack';

export default {
  entry: './index.js',
  output: {
    path: './dist/',
    filename: 'instantsearch-react-widget.js',
    library: 'instantsearchReactWidget',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/, exclude: /node_modules/, loader: 'babel'
    }]
  },
  externals: [{
    react: 'React'
  }, {
    'react-dom': 'ReactDOM'
  }, {
    'instantsearch.js': 'instantsearch'
  }],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
