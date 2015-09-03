import angular from 'angular';

//utility library
import lodash from 'lodash';

/**
 * Utility to combine all the common services of the app into a single DI point to manage complex DI chains in features & components.
 */
export class AppServices {

  /**
   * @param {$log} $log - Angular Loggig Service.
   * @param {DevTools} DevTools - DevTools Service.
   * @param {API} API - API Service.
   */
  constructor($log, DevTools, API) {
    this.$log = $log.getInstance('AppServices', true);
    this.$log.debug('constructor');

    //include lodash as a main app service
    this.lodash = lodash;
    this.DevTools = DevTools;
    this.API = API;

    //used by developer bar
    this.developerBarConfig = {
      esdocPath: "docs/esdoc/identifiers.html",
      sassdocPath: "docs/sassdoc/index.html",
      coveragePath: "coverage/phantomjs/index.html"
    }
  }

}

AppServices.$inject = ['$log', 'DevTools', 'API'];

//export angular module for integration into app
export default angular.module('app.common.services.AppServices', [])
  .service('AppServices', AppServices);
