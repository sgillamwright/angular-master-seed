import template from './developer-bar.html';
import controller from './developer-bar.controller';
import './developer-bar.scss';

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
