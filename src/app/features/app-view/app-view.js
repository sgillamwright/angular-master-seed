import angular from 'angular';

import AppViewComponent from './app-view.component';
import Styles from './app-view.scss';

export default angular.module('AppView', [])
.directive('appView', AppViewComponent);
