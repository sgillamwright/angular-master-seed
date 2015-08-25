import angular from 'angular';

/**
 * Utility to manage access to an api
 */
export class APIService {

  /**
   * @param {$log} $log - Angular logging Service.
   * @param {Restangular} Restangular - Restangular Service.
   */
  constructor($log, Restangular) {
    this.$log = $log.getInstance('API', true);
    this.$log.debug('constructor');

    this.Restangular = Restangular;
    this.heros = this.Restangular.all('heros');
  }

  getHeros() {
    return this.heros.getList();
  }

  postHero(hero) {
    return this.heros.post(hero);
  }

}

APIService.$inject = ['$log', 'Restangular'];

export default angular.module('app.common.services.API', [])
  .service('API', APIService);
