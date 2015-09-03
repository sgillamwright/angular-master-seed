/**
 * AppController is the controller for the main application component.
 */
 export default class AppController {
  constructor(AngularServices, AppServices) {
    this.$log = AngularServices.getLogInstance('AppController', true);
    this.$log.debug('constructor');

    //DI References
    this.AngularServices = AngularServices;
    this.AppServices = AppServices;
    this.DevTools = AppServices.DevTools;
  }
}

AppController.$inject = ['AngularServices', 'AppServices'];
