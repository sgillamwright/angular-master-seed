import angular from 'angular';

import SuggestionInput from './suggestion-input/suggestion-input';
import LoaderIndicator from './loader-indicator/loader-indicator';
import DeveloperBar from './developer-bar/developer-bar';

export default angular.module('app.common.components', [
  SuggestionInput.name,
  LoaderIndicator.name,
  DeveloperBar.name
]);
