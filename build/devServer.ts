import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import {NestFactory} from "@nestjs/core";
import {NestExpressApplication} from "@nestjs/platform-express";
import {AppModule} from "../src/server/app.module";

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const compiler = webpack(webpackConfig);

async function bootstrap () {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // https://github.com/webpack/webpack-dev-middleware
  app.use(webpackDevMiddleware(compiler, {
    logLevel: 'warn', publicPath: webpackConfig.output.publicPath
  }));

  // https://github.com/webpack-contrib/webpack-hot-middleware#installation--usage
  app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));

  await app.listen('3000');
}

bootstrap();
