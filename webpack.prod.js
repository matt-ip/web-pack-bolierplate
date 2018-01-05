const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
   plugins: [
     new UglifyJSPlugin({
       sourceMap: true
     }),
     new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production')
     })
     new webpack.BannerPlugin({ banner: "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]" })
   ]
 });
