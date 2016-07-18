
const webpack = require('webpack');

module.exports = {
  entry:[
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  './app/main.js'],
  output:{
    path:__dirname+'/build/',
    publicPath: 'http://127.0.0.1:3000/build/',
    filename:'bundle.js',
  },
 module: {
  loaders: [
    { test: /\.css$/, loader: 'style!css' },
    { test: /\.jsx?$/, loader: 'jsx?harmony'},
   
    {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'react-hot!jsx-loader?harmony'
  }
  ]
},
  resolve: {
  extensions: ['', '.js', '.jsx','.css']
	},
	plugins: [
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"'
}),
new webpack.HotModuleReplacementPlugin()
  ]
   
}