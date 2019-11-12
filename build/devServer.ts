import webpack from 'webpack';
import webpackConfig from '../webpack.config';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const config = webpackConfig ;
const compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) console.log(err);

});
