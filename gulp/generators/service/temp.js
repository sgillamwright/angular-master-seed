import angular from 'angular';

/**
 * Describe the intention of the service here
 */
export class <%= upperCaseName %> {

    constructor(){
        //bootstrap the service as needed - remove if not required
        this.init();
    }

    /**
     * Bootstrap Process - remove if not required
     */
    init() {

    }

}

<%= upperCaseName %>.$inject = [];

export default angular.module('app.common.services.<%= lowerCaseName %>', [])
.service('<%= upperCaseName %>', <%= upperCaseName %>);