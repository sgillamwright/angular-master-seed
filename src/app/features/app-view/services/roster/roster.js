import angular from 'angular';

/**
 * Describe the intention of the service here
 */
export class RosterService {

    constructor(AngularServices, AppServices){
        this.$log = AngularServices.getLogInstance('RosterService', true);
        this.$log.debug('constructor');

        this.API = AppServices.API;

        this.heros = [];
    }

    loadData() {
      this.API.getHeros().then(heros => {
        this.$log.debug('loadData', heros);
        this.heros = heros;
      });
      return this.heros;
    }

    addHero(hero) {
      //set icon
      hero.icon = "assets/Avengers-emblem.png";

      // submit code goes here
      return this.API.postHero(hero);
    }

}

RosterService.$inject = ['AngularServices', 'AppServices'];

export default angular.module('app.app-view.services.rosterservice', [])
.service('RosterService', RosterService);
