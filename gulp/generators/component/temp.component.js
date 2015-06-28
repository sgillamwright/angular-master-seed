import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './<%= name %>.scss';

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