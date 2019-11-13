import Koa from 'koa';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = new Koa();
const compiler = webpack(webpackConfig);

// https://github.com/webpack/webpack-dev-middleware
app.use(webpackDevMiddleware(compiler, {
  logLevel: 'warn', publicPath: webpackConfig.output.publicPath
}));

// https://github.com/webpack-contrib/webpack-hot-middleware#installation--usage
app.use(webpackHotMiddleware(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.listen(3000);
