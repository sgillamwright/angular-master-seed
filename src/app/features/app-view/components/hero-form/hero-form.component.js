import template from './hero-form.html';
import controller from './hero-form.controller';

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
    scope: {}
  };
};
