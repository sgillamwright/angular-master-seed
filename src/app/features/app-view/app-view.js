import angular from 'angular';

import AppViewComponent from './app-view.component';
import './app-view.scss';

export default angular.module('app.features.app-view', [])
.directive('appView', AppViewComponent);
