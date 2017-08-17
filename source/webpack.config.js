// Webpack config file
module.exports = {
    entry: {
        index: './assets/js/components/Index.jsx',
        default: './views/Default.jsx'
    },
    output: {
        path: __dirname + '/assets/js',
        filename: '[name]-bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          }
        }
      ]
    }
};