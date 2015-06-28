import angular from 'angular';

import AppViewModule from './app-view/app-view';
import FeatureExampleModule from './feature-example/feature-example';

export default angular.module('app.features', [
    AppViewModule.name,
    FeatureExampleModule.name
]);