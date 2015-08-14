var config = require('../gulp.config');
var gulp = require('gulp');
var del = require('del');
var sassdoc = require('sassdoc');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');

//generate sassdocs
gulp.task('sassdoc', function() {
  var options = {
    dest: config.docs.sassdoc,
    verbose: true,
  };

  return gulp.src(config.files.app.scss).pipe(sassdoc(options));
});

//generate esdoc from command line
gulp.task('esdoc', shell.task([
  'esdoc -c esdoc.config.json'
]));

//ensure we get fresh docs everytime
gulp.task('clean-docs', function(done) {
  del(config.dist.docs, done)
});

//generate all app docs
gulp.task('docs', function(done) {
  runSequence('clean-docs', 'sassdoc', 'esdoc', done);
});
