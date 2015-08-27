import angular from 'angular';

import SuggestionInput from './suggestion-input/suggestion-input';
import LoaderIndicator from './loader-indicator/loader-indicator';
import PerformanceBar from './performance-bar/performance-bar';

export default angular.module('app.common.components', [
  SuggestionInput.name,
  LoaderIndicator.name,
  PerformanceBar.name
]);
