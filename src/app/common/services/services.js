import angular from 'angular';

import AngularServicesModule from './angular-services/angular-services';
import AppServicesModule from './app-services/app-services';
import DevToolsModule from './dev-tools/dev-tools';

export default angular.module('app.common.services', [
  AngularServicesModule.name,
  AppServicesModule.name,
  DevToolsModule.name
]);
