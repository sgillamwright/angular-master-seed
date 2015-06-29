import angular from 'angular';

import LoaderIndicator from './loader-indicator/loader-indicator';
import PerformanceBar from './performance-bar/performance-bar';

export default angular.module('app.common.components', [
    LoaderIndicator.name,
    PerformanceBar.name
]);