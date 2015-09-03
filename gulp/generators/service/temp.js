import angular from 'angular';

/**
 * Describe the intention of the service here
 */
export class <%= upperCaseName %> {
    constructor(<%= constructorParams %>){
        this.$log = <%= logger %>('<%= upperCaseName %>', true);
        this.$log.debug('constructor');
    }
}

<%= upperCaseName %>.$inject = [<%= dependencyInjections %>];

export default angular.module('<%= angularModuleName %>', [])
.service('<%= upperCaseName %>', <%= upperCaseName %>);
