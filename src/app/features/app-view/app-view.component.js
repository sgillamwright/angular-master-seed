import template from './app-view.html';
import controller from './app-view.controller';

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
