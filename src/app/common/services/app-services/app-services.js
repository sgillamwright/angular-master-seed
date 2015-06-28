import angular from 'angular';

/**
 * Utility to combine all the common services of the app into a single DI point to manage complex DI chains in features & components.
 */
export class AppServices {

    /**
     * @param {$log} $log - Angular Loggig Service.
     * @param {DevTools} DevTools - DevTools Service.
     * @param {API} API - API Service.
     */
    constructor($log, DevTools, API){
        this.$log = $log.getInstance('AppServices', true);
        this.$log.debug('constructor');

        this.DevTools = DevTools;
        this.API = API;
    }

}

AppServices.$inject = ['$log', 'DevTools', 'API'];

//export angular module for integration into app
export default angular.module('app.common.services.appservices', [])
.service('AppServices', AppServices);
