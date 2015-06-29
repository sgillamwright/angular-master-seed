export default class PerformanceBarController {
	constructor($log){
		this.$log = $log.getInstance('PerformanceBarController', true);
        this.$log.debug("constructor");
	}
}

PerformanceBarController.$inject = ['$log'];