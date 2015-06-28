import angular from 'angular';

/**
 * Utility to manage access to an api
 */
export class APIService {

    /**
     * @param {$log} $log - Angular logging Service.
     * @param {$location} $location - Angular Location Service.
     */
    constructor($log, Restangular) {
        /**
         * @type {$log}
         */
        this.$log = $log.getInstance('API', true);
        this.$log.debug('constructor');

        this.heros = Restangular.all('heros');
    }

    /**
     * Bootstrap Process
     */
    getHeros() {
        return this.heros.getList();
    }

}

APIService.$inject = ['$log', 'Restangular'];

export default angular.module('app.common.services.API', [])
.service('API', APIService);