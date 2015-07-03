import angular from 'angular';

import SuperpowersFilterModule from './superpowers/superpowers';

export default angular.module('app.common.filters', [
    SuperpowersFilterModule.name
]);
