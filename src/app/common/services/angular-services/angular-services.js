import angular from 'angular';

/**
 * Utility to combine the most common angular services into a single DI point to manager complex DI chains in features & components.
 */
export class AngularServices {

    /**
     * @param {$log} $log - LogUnobtrusiveExtension Service.
     */
    constructor($document, $filter, $http, $interval, $log, $location, $q, $rootScope, $timeout, $window){
        this.$log = $log.getInstance('AngularServices', true);
        this.$log.debug('constructor');

        this.$document = $document;
        this.$filter = $filter;
        this.$http = $http;
        this.$interval = $interval;
        this.$logger = $log;
        this.$location = $location;
        this.$q = $q;
        this.$rootScope = $rootScope;
        this.$timeout = $timeout;
        this.$window = $window;
    }

    /**
     * Returns a namespaced $log instance
     * @param {string} Name - Namespace to apply to all logs generated by $log instance.
     * @param {boolean} isEnabled - Determines if $log instance should output info.
     */
    getLogInstance(namespace, isEnabled) {
        return this.$logger.getInstance(namespace, isEnabled);
    }

}

AngularServices.$inject = ['$document', '$filter', '$http', '$interval', '$log', '$location', '$q', '$rootScope', '$timeout', '$window'];

//export angular module for integration into app
export default angular.module('app.common.services.AngularServices', [])
.service('AngularServices', AngularServices);
