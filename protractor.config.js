require('babel-core/register');

exports.config = {
  framework: 'jasmine2',
  directConnect: true,
  firefoxPath: null,
  chromeDriver: null,
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  seleniumArgs: ['-browserTimeout=60'],
  getPageTimeout: 30000,
  allScriptsTimeout: 30000,
  baseUrl: 'http://localhost:8000',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  },
  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: true
    }));
  },
  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    showTiming: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 30000,
    print: function() {}
  }
};
