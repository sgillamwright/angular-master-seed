import template from './app.html';
import controller from './app.controller';

/**
 * Component / Directive Definition Object
 * Used for rigging angular directives
 */
export default () => {
    return {
        template,
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
	};
};