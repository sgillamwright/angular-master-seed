var config = require('../gulp.config');
var gulp = require('gulp');
var protractor = require('gulp-angular-protractor');
var karma = require('gulp-karma');
var runSequence = require('run-sequence');

//setup and run protractor + selenium server
gulp.task('e2e', function() {
  return gulp.src(config.files.tests.e2e)
    .pipe(protractor({
      'configFile': config.files.tests.configs.protractor,
      'args': ['--baseUrl', 'http://localhost:8000'],
      'autoStartStopServer': true,
      'debug': false
    })).on('error', function(err) {
    console.log(err);
    throw err;
  });
});

//build app and run the protractor tests against a release bundle
gulp.task('e2e-release', function(done) {
  runSequence('clean', 'fresh-build', 'bundle-release', 'copy-html-release', 'copy-assets', 'mockdb', 'browser-sync', 'e2e', 'stop', done);
});


//perform a single run of unit tests
gulp.task('test', function() {
  return gulp.src([config.files.tests.bindPolyfill, config.files.tests.bundle])
    .pipe(karma({
      configFile: config.files.tests.configs.karma,
      action: 'run'
    })).on('error', function(err) {
    console.log(err);
    throw err;
  });
});

//run karma tests on file change during active development
gulp.task('tdd', function() {
  return gulp.src([config.files.tests.bindPolyfill, config.files.tests.bundle])
    .pipe(karma({
      configFile: config.files.tests.configs.karma,
      action: 'watch'
    })).on('error', function(err) {
    console.log(err);
    throw err;
  });
});
