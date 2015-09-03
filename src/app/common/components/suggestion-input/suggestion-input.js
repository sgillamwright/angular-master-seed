import angular from 'angular';
import SuggestionInputComponent from './suggestion-input.component';
import './suggestion-input.scss';

export default angular.module('app.common.components.SuggestionInput', [])
.directive('suggestionInput', SuggestionInputComponent);
