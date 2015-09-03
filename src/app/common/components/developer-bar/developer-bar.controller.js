/**
 * DeveloperBarController is the controller for the Developer Bar component.
 */
 export default class DeveloperBarController {
  constructor($log, AppServices) {
    this.$log = $log.getInstance('DeveloperBarController', true);
    this.$log.debug("constructor");

    this.AppServices = AppServices;
  }
}

DeveloperBarController.$inject = ['$log', 'AppServices'];
