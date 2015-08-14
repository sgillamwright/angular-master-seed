var config = require('../gulp.config');
var gulp = require('gulp');
var webpack = require('webpack-stream');
var browserSync = require('browser-sync');
var template = require('gulp-template');
var runSequence = require('run-sequence');

//prep project for a build
gulp.task('build:fresh', function(done) {
  runSequence('clean', 'timestamp', done);
});

//bundle up app code into release bundle with webpack
gulp.task('build:release', function() {
  var webpackConfig = require(config.files.build.webpack.release);
  return gulp.src(config.src.appEntry)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(config.dist.target));
});

//bundle up app code into developer bundle with webpack
gulp.task('build:dev', function() {
  var webpackConfig = require(config.files.build.webpack.dev);
  return gulp.src(config.src.appEntry)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(config.dist.target));
});

//copy index.html template and inject developer js/css bundles
gulp.task('copy:dev', function() {
  return gulp.src(config.src.index)
    .pipe(template({
      appJS: 'bundle.js',
      appCSS: 'app.css'
    }))
    .pipe(gulp.dest(config.dist.target));
});

//copy index.html template and inject production js/css bundles
gulp.task('copy:release', function() {
  return gulp.src(config.src.index)
    .pipe(template({
      appJS: 'bundle.min.js',
      appCSS: 'app.min.css'
    }))
    .pipe(gulp.dest(config.dist.target));
});

//copy assets to dist
gulp.task('copy:assets', function() {
  return gulp.src(config.files.app.assets)
    .pipe(gulp.dest(config.dist.assets));
});

//deploy browser-sync for live reload
gulp.task('browserSync', function() {
  browserSync({
    port: process.env.PORT || config.port,
    open: true,
    server: {
      baseDir: config.dist.target
    }
  });
});

//setup watchers and tasks for local dev
gulp.task('watch', function() {
  gulp.watch([config.files.app.js, '!./src/app/**/*.spec.js'], ['timestamp', 'build:dev', browserSync.reload]);
  gulp.watch(config.files.app.html, ['timestamp', 'build:dev', browserSync.reload]);
  gulp.watch(config.files.app.scss, ['timestamp', 'build:dev', browserSync.reload]);
});


