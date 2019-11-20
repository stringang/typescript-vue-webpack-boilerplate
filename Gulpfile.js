const gulp = require('gulp');
const rimraf = require('rimraf');
const ts = require('gulp-typescript');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config');

const tsProject = ts.createProject('./tsconfig.json');

gulp.task('clean', async function(cb) {
  await rimraf('dist/**/*', cb);
});

gulp.task('client:compile', function() {
  return gulp.src('./src/client/*.ts').pipe(webpackStream(webpackConfig, webpack)).pipe(gulp.dest('dist/client'));
});

gulp.task('server:compile', function() {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest(tsProject.options.outDir));
});

gulp.task('default', gulp.series('clean', 'server:compile', 'client:compile'));

gulp.task('client', gulp.series('clean', 'client:compile'));
