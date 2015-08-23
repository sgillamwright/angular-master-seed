import angular from 'angular';

import AppViewComponent from './app-view.component';
import Styles from './app-view.scss';

// feature components
import ComponentsModule from './components/components';

export default angular.module('AppView', [
    ComponentsModule.name
  ])
.directive('appView', AppViewComponent);
