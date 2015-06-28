import angular from 'angular';
import <%= upperCaseName %>Component from './<%= name %>.component';

export default angular.module('<%= upperCaseName %>', [])
.directive('<%= camelCaseName %>', <%= upperCaseName %>Component);