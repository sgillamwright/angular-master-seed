import angular from 'angular';

import CommonComponentsModule from './components/components';
import CommonFiltersModule from './filters/filters';
import CommonServicesModule from './services/services';

export default angular.module('app.common', [
    CommonComponentsModule.name,
    CommonFiltersModule.name,
    CommonServicesModule.name,
]);