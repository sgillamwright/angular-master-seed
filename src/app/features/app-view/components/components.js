import angular from 'angular';

import RosterList from './roster-list/roster-list';
import HeroForm from './hero-form/hero-form';

export default angular.module('app-views.components', [
  RosterList.name,
  HeroForm.name
]);
