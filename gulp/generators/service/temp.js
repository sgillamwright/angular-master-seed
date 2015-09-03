import angular from 'angular';

/**
 * Describe the intention of the service here
 */
export class <%= upperCaseName %> {
    constructor($log){
        this.$log = $log.getInstance('<%= upperCaseName %>', true);
        this.$log.debug('constructor');
    }
}

<%= upperCaseName %>.$inject = ['$log'];

export default angular.module('<%= angularModuleName %>', [])
.service('<%= upperCaseName %>', <%= upperCaseName %>);
