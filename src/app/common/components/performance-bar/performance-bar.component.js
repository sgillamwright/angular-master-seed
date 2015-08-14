import template from './performance-bar.html';
import controller from './performance-bar.controller';
import './performance-bar.scss';

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
