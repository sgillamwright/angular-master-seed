import angular from 'angular';

import AppViewComponent from './app-view.component';
import Styles from './app-view.scss';

// feature components
import Components from './components/components';
import Services from './services/services';

export default angular.module('app-view', [
    Components.name,
    Services.name
  ])
.directive('appView', AppViewComponent);
