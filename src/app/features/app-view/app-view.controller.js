export default class AppViewController {
  constructor(AngularServices, AppServices) {
    this.$log = AngularServices.getLogInstance('AppViewController', true);
    this.$log.debug('constructor');
  }
}

AppViewController.$inject = ['AngularServices', 'AppServices'];
