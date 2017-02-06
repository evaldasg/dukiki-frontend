const path = require('path')

module.exports = (env) => {
  return {
    context: __dirname,
    entry: './js/DukikiApp.js',
    output: {
      path: path.join(__dirname, '/public/js'),
      filename: 'bundle.js',
      publicPath: '/public/',
      // pathinfo: !env.prod
    },
    devtool: env.prod ? 'source-map' : 'eval',
    resolve: {
      extensions: ['.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.json$/,
          loaders: ['json-loader']
        },
        {
          include: path.resolve(__dirname, 'js'),
          test: /\.js$/,
          loaders: ['babel-loader']
        }
      ]
    }
  }
}
