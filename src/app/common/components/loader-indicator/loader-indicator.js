import angular from 'angular';
import LoaderIndicatorComponent from './loader-indicator.component';
import LoaderIndicatorConfig from './loader-indicator.config';
import './loader-indicator.scss';

export default angular.module('app.common.components.LoaderIndicator', [])
  .config(LoaderIndicatorConfig)
  .directive('loaderIndicator', LoaderIndicatorComponent);
