import angular from 'angular';

//global deps
//disable eslint as some vendor imports are just including JS in the project
//Many angular modules require this as they do not contain any require/amd/commonjs

/*eslint-disable no-unused-vars */

// Normalize base CSS styles for all browsers
import 'normalize.css/normalize.css';

// Angular Material Design Styles
import 'angular-material/angular-material.css';

// Angular Material Design Module
import angularMaterial from 'angular-material';

// UI Router Module
import angularUIRouter from 'angular-ui-router';

// Angular Messages Module
import angularMessages from 'angular-messages';

// Watcher / Digest Reporting Module
import ngStats from 'ng-stats';

// Awesome $log extender
import LogUnobtrusiveExtension from 'LogUnobtrusiveExtension/dist/log-ex-unobtrusive';

//restangular for REST API interactions
import Restangular from 'restangular/dist/restangular';

/*eslint-disable no-unused-vars */

// difference in vars vs strings below depends on
// how the vendor package is setup.  Global vs Module
export default angular.module('app.vendor', [
    angularMaterial,
    angularUIRouter,
    angularMessages,
    'angularStats',
    'log.ex.uo',
    'restangular'
]);
