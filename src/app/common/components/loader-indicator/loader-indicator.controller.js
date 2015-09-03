/**
 * LoaderIndicatorController is the controller for the Loader Indicator component.
 */
export default class LoaderIndicatorController {

  /**
   * @param {$log} $log - Angular Logging Service.
   * @param {$rootScope} $rootScope - Angular $rootScope Service.
   */
  constructor($log, $rootScope) {
    this.$log = $log.getInstance('LoaderIndicatorController', true);
    this.$log.debug("constructor");

    this.$rootScope = $rootScope;
  }
}

LoaderIndicatorController.$inject = ['$log', '$rootScope'];
