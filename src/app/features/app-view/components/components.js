import angular from 'angular';

import RosterList from './roster-list/roster-list';
import HeroForm from './hero-form/hero-form';

export default angular.module('AppView.components', [
  RosterList.name,
  HeroForm.name
]);
