import angular from 'angular';
import LoaderIndicatorComponent from './loader-indicator.component';
import LoaderIndicatorConfig from './loader-indicator.config';

export default angular.module('LoaderIndicator', [])
  .config(LoaderIndicatorConfig)
  .directive('loaderIndicator', LoaderIndicatorComponent);
