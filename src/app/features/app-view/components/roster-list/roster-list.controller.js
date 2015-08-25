export default class RosterListController {
  constructor(AngularServices, AppServices, RosterService) {
    this.$log = AngularServices.getLogInstance('RosterListController', true);
    this.$log.debug('constructor');

    this.RosterService = RosterService;
    this.onlyShowHerosWithSuperPowers = false;
  }
}

RosterListController.$inject = ['AngularServices', 'AppServices', 'RosterService'];
