require('babel-core/register');

exports.config = {
    framework: 'jasmine',
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
    jasmineNodeOpts: {
        isVerbose: false,
        showTiming: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 30000
    }
};
