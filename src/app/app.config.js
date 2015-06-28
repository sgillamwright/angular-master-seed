export default function AppConfig($locationProvider, $urlRouterProvider, $stateProvider, logExProvider, $compileProvider, RestangularProvider) {

    //utility
    let isDevEnvironment = false;
    if(window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('127.0.0.1') >= 1) {
        isDevEnvironment = true;
    }

    //disable angular debug info if app is not running locally
    //this increases performance
    if (isDevEnvironment) {
        $compileProvider.debugInfoEnabled(true);
    } else {
        $compileProvider.debugInfoEnabled(false);
    }

    //enabled browser back button
    $locationProvider.html5Mode(true);

    //debug and logging config
    logExProvider.enableLogging(true, false);
    logExProvider.useDefaultLogPrefix(false);
    logExProvider.overrideLogPrefix(function(className) {
        let $injector = angular.injector(['ng']);
        let $filter = $injector.get('$filter');
        let separator = "::";
        let format = "h:mm:ss";
        let now = $filter('date')(new Date(), format);
        return "" + now + (!angular.isString(className) ? "" : " " + className) + separator;
    });

    //restangular config
    if (isDevEnvironment) {
        //use local json-server
        RestangularProvider.setBaseUrl('http://localhost:3000/api/');
    } else {
        //map to your production api url
        RestangularProvider.setBaseUrl('/api/');
    }

    //configure base app route
    $urlRouterProvider.otherwise('/');

    //hook up component route
    $stateProvider
        .state('AppView', {
            url: '/',
            template: '<app-view></app-view>'
        });

};

AppConfig.$inject = ['$locationProvider', '$urlRouterProvider','$stateProvider', 'logExProvider', '$compileProvider', 'RestangularProvider'];