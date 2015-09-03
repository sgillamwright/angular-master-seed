import angular from 'angular';

import DeveloperBarComponent from './developer-bar.component';

export default angular.module('DeveloperBar', [])
  .directive('developerBar', DeveloperBarComponent);
