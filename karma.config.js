module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // If browser does not capture in given timeout [ms], kill it
    // CLI --capture-timeout 5000
    captureTimeout: 60000,
    browserNoActivityTimeout: 100000,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        { pattern: './node_modules/phantomjs-polyfill/bind-polyfill.js', watched: false },
        { pattern: 'spec.bundle.js', watched: false }
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'spec.bundle.js': ['webpack', 'sourcemap']
    },
    webpack: {
        devtool: 'inline-source-map',
        module: {
            loaders: [
                { test: /\.js$/, exclude: [/node_modules/], loader: 'babel' },
                { test: /\.html$/, loader: 'raw' },
                { test: /\.scss$/, loader: 'style!css!sass' },
                { test: /\.css$/, loader: 'style!css' }
            ],
            postLoaders: [ {
                test: /^((?!spec).)*\.js$/,
                exclude: /node_modules/,
                loader: 'istanbul-instrumenter'
            } ]
        }
    },
    webpackMiddleware: {
        stats: {
          colors: true
        },
        quiet: false
    },
    webpackServer: {
      noInfo: false //please don't spam the console when running in karma!
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        { type: 'html', dir: 'dist/tests/coverage/html', subdir: 'PhantomJS' },
        { type: 'cobertura', dir: 'dist/tests/coverage/cobertura', subdir: 'PhantomJS' }
      ]
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    // autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    // singleRun: false
  });
};