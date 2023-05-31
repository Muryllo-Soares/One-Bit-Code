const path = require('path')

module.exports = {
  devServer:{
    static:{
      directory: path.resolve(__dirname, 'dist')
    }
  },

    entry:{
        index:'./src/index.js'
    },
    mode: 'production',

    module: {
        rules: [
          {
            test: /\.m?js$/,
            use: ['babel-loader']
            
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
        ]
      },

    output:{
        filename: '[name].min.js'
    }
}