import angular from 'angular';

import LoaderIndicator from './loader-indicator/loader-indicator';
import DeveloperBar from './developer-bar/developer-bar';

export default angular.module('app.common.components', [
  LoaderIndicator.name,
  DeveloperBar.name
]);
