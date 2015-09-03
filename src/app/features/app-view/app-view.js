import angular from 'angular';

import AppViewComponent from './app-view.component';
import './app-view.scss';

// feature components
import Components from './components/components';
import Services from './services/services';

export default angular.module('app.features.app-view', [
    Components.name,
    Services.name
  ])
.directive('appView', AppViewComponent);
