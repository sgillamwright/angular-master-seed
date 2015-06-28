var config = require('./gulp/gulp.config.js');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var requireDir  = require( 'require-dir' );

// Require all tasks.
requireDir( './gulp/tasks', { recurse: true } );

//generate release dry run build - run release bundles locally for testing
gulp.task('release-dryrun', function(done) {
    runSequence('fresh-build', 'bundle-release', 'copy-html-release', 'copy-assets', 'docs', 'mockdb', 'browser-sync', 'karma', 'protractor', 'stop', done);
});

//generate release build - command to run on servers
gulp.task('release', function(done) {
    runSequence('fresh-build', 'bundle-release', 'copy-html-release', 'copy-assets', done);
});


//generate development environemnt - live reload and file watching
gulp.task('default', function(done){
	runSequence('fresh-build', 'bundle-dev', 'copy-html-dev', 'copy-assets', 'mockdb', 'browser-sync', 'watch', done);
});