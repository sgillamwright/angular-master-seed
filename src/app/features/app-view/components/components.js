import angular from 'angular';

import RosterList from './roster-list/roster-list';
import HeroForm from './hero-form/hero-form';

export default angular.module('app.features.app-view.components', [
  RosterList.name,
  HeroForm.name
]);
