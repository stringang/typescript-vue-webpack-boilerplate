import Koa from 'koa';
import serve from 'koa-static';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import koaWebpackDevMiddleware from 'koa-webpack-dev-middleware';
import koaWebpackHotMiddleware from 'koa-webpack-hot-middleware';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = new Koa();
const compiler = webpack(webpackConfig);

// https://github.com/webpack/webpack-dev-middleware
app.use(koaWebpackDevMiddleware(compiler, {
  logLevel: 'warn', publicPath: webpackConfig.output.publicPath
}));

// https://github.com/webpack-contrib/webpack-hot-middleware#installation--usage
app.use(koaWebpackHotMiddleware(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.use(serve(resolve('/dist/client')));

app.listen(3000);


function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
