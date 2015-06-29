import angular from 'angular';
import PerformanceBarComponent from './performance-bar.component';

export default angular.module('PerformanceBar', [])
.directive('performanceBar', PerformanceBarComponent);