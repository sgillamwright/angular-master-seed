export default class LoaderIndicatorController {
  constructor($log, $rootScope) {
    this.$log = $log.getInstance('LoaderIndicatorController', true);
    this.$log.debug("constructor");
    this.$rootScope = $rootScope;
  }
}

LoaderIndicatorController.$inject = ['$log', '$rootScope'];
