import angular from 'angular';

/**
 * Utility to manage various in app tools for development.
 */
export class DevTools {

  /**
   * @param {$location} $location - Angular Location Service.
   */
  constructor($log, $location) {
    /**
     * @type {$log}
     */
    this.$log = $log.getInstance('DevTools', true);
    this.$log.debug('constructor');
    /**
     * @type {$location}
     */
    this.$location = $location;
    this.performanceBarIsVisible = false;

    //bootstrap the service as needed
    this.init();
  }

  /**
   * Bootstrap Process
   */
  init() {
    //show performance stats when able
    this.performanceBarIsVisible = this.togglePerformanceStats(this.$location.host(), true);
  }

  /**
   * Check a domain to see if it is a valid development server.
   * @param {string} domain - Domain name of server app is running on.
   * @return {boolean}
   */
  isDevelopmentEnvironment(domain = "") {
    let r = false;
    //check if domain is whitelisted as a development environment
    if (domain === 'localhost' || domain === '127.0.0.1') {
      r = true;
    }
    return r;
  }

  /**
   * Control visibility of performance stats bar.
   * @param {string} domain - Domain name of server app is running on.
   * @param {boolean} wantsToBeVisible - Visibility state to attempt to apply to performance stats.
   */
  togglePerformanceStats(domain = "", wantsToBeVisible = false) {
    let r = false;
    if (wantsToBeVisible) {
      //only make performance stats visible when on a devlopment envionrment
      r = this.isDevelopmentEnvironment(domain);
    }
    return r;
  }


}

DevTools.$inject = ['$log', '$location'];

export default angular.module('app.common.services.devtools', [])
  .service('DevTools', DevTools);
