import template from './loader-indicator.html';
import controller from './loader-indicator.controller';
import './loader-indicator.scss';

/**
 * Component / Directive Definition Object
 * Used for rigging angular directives
 */
export default () => {
	return {
		template,
		controller,
        replace: true,
		restrict: 'E',
		controllerAs: 'vm',
		bindToController: true,
        scope: {},
	};
};