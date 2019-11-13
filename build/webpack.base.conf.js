const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue'],
    alias: {
      vue$: isDev ? 'vue/dist/vue.esm.js' : 'vue/dist/vue.runtime.esm.js',
      '@': resolve('src/client'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              appendTsxSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
      },
    ],
  }
};
