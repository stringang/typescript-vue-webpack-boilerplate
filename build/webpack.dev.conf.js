const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.conf');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/dist/client',
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].js',
    hotUpdateChunkFilename: '../hot/hot-update.js',
    hotUpdateMainFilename: '../hot/hot-update.json'
    // publicPath: '/',
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/client', 'index.html'),
      filename: 'index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    // 启动输出清理
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        notes: ['Some additional notes to be displayed upon successful compilation'],
        clearConsole: true
      },
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/client'),
    quiet: true,
    compress: true,
    port: 3000,
    host: 'localhost',
    https: false,
    hot: true,
    watchContentBase: true,
    open: true,
    overlay: true,
    openPage: '../dist/client/index.html'
  }
});
