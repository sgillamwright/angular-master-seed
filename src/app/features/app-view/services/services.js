import angular from 'angular';

import RosterService from './roster/roster';

export default angular.module('app.features.app-view.services', [
  RosterService.name
]);
