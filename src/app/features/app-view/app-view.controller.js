export default class AppViewController {
    constructor(AngularServices, AppServices) {
        this.$log = AngularServices.getLogInstance('AppViewController', true);
        this.$log.debug('constructor');

        this.API = AppServices.API;
        this.heros = [];
    }

    loadData() {
        this.API.getHeros().then(heros => {
            this.$log.debug('loadData', heros);
            this.heros = heros;
        });
    }

}

AppViewController.$inject = ['AngularServices', 'AppServices'];