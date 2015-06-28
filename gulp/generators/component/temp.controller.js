export default class <%= upperCaseName %>Controller {
	constructor($log){
		this.$log = $log.getInstance('<%= upperCaseName %>Controller', true);
        this.$log.debug("constructor");
	}
}

<%= upperCaseName %>Controller.$inject = ['$log'];