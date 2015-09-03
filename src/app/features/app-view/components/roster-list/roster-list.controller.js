/**
 * RosterListController is the controller for the Roster List component of app-view.
 */
 export default class RosterListController {

  /**
   * @param {AngularServices} AngularServices - Angular Common Services Helper
   * @param {AppServices} AppServices - App Common Services Helper
   * @param {RosterService} RosterService - Roster Service
   */
  constructor(AngularServices, AppServices, RosterService) {
    this.$log = AngularServices.getLogInstance('RosterListController', true);
    this.$log.debug('constructor');

    this.RosterService = RosterService;
    this.onlyShowHerosWithSuperPowers = false;
  }
}

RosterListController.$inject = ['AngularServices', 'AppServices', 'RosterService'];
