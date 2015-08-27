import angular from 'angular';
import SuggestionInputComponent from './suggestion-input.component';
import './suggestion-input.scss';

export default angular.module('SuggestionInput', [])
.directive('suggestionInput', SuggestionInputComponent);
