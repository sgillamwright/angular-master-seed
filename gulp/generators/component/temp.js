import angular from 'angular';
import <%= upperCaseName %>Component from './<%= name %>.component';
import './<%= name %>.scss';

export default angular.module('<%= upperCaseName %>', [])
.directive('<%= camelCaseName %>', <%= upperCaseName %>Component);
