import template from './suggestion-input.html';
import controller from './suggestion-input.controller';

/**
 * Component / Directive Definition Object
 * Used for rigging angular directives
 */
export default () => {
  return {
    template,
    controller,
    replace: false,
    restrict: 'E',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      suggestInputName: '@',  // <input> name attribute for form references
      suggestLabel: '@',      // value for label of <input>
      suggestModel: '=',      // model to bind to <input>
      suggestMessages: '=',   // form obj for ngMessages
      suggestData: '=',       // list of objects for suggestions
      suggestProperty: '@'    // property name to compare against to to find matches
    }
  };
};
