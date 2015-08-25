import angular from 'angular';

/**
 * Describe the intention of the service here
 */
export class <%= upperCaseName %> {

    constructor($log){
        this.$log = $log.getInstance('<%= upperCaseName %>', true);
        this.$log.debug('constructor');
        //bootstrap the service as needed - remove if not required
        this.init();
    }

    /**
     * Bootstrap Process - remove if not required
     */
    init() {
      this.$log.debug('init');
    }

}

<%= upperCaseName %>.$inject = ['$log'];

export default angular.module('app.common.services.<%= lowerCaseName %>', [])
.service('<%= upperCaseName %>', <%= upperCaseName %>);
