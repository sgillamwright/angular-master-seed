import angular from 'angular';
import <%= upperCaseName %>Component from './<%= name %>.component';

export default angular.module('<%= angularModuleName %>', [])
.directive('<%= camelCaseName %>', <%= upperCaseName %>Component);
