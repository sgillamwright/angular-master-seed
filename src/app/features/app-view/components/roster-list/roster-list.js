import angular from 'angular';
import RosterListComponent from './roster-list.component';
import './roster-list.scss';

export default angular.module('app-view.roster-list', [])
.directive('rosterList', RosterListComponent);
