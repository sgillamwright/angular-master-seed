var config = require('../gulp.config');
var gulp = require('gulp');
var jsonServer = require('json-server');
var del = require('del');
var exec = require('child_process').exec;
var exit = require('gulp-exit');
var eslint = require('gulp-eslint');

//clear terminal and timestamp output for easier scanning
gulp.task('timestamp', function (cb) {
  exec("clear && echo '\n\n\n------------' && date && echo '------------'", function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

//useful to force grunt to kill its processes on tasks which you need to end
gulp.task('stop', function() {
    exit();
});

//clean the project folder of previous builds
gulp.task('clean', function (done) {
  del(config.dist.target, done)
});

//create a json server
gulp.task('mockdb', function() {
    var server = jsonServer.create(); // Returns an Express server
    var router = jsonServer.router(config.files.db); // Returns an Express router
    server.use(jsonServer.defaults); // logger, static and cors middlewares
    server.use('/api', router); // Mount router on '/api'
    server.listen(3000);  // api runs on this port
});

//eslint pre-commit task
gulp.task('eslint', function () {
    return gulp.src(config.files.app.js)
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failOnError last.
        .pipe(eslint.failOnError());
});