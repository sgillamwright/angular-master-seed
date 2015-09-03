import angular from 'angular';

import DeveloperBarComponent from './developer-bar.component';
import './developer-bar.scss';

export default angular.module('app.common.components.DeveloperBar', [])
  .directive('developerBar', DeveloperBarComponent);
