/**
 * <%= upperCaseName %>Controller is the controller for the <%= upperCaseName %> component.
 */
 export default class <%= upperCaseName %>Controller {
  constructor(<%= ctrlConstructorParams %>){
    this.$log = $log.getInstance('<%= upperCaseName %>Controller', true);
    this.$log.debug("constructor");
  }
}

<%= upperCaseName %>Controller.$inject = [<%= dependencyInjections %>];
