import angular from 'angular';
import RosterListComponent from './roster-list.component';
import './roster-list.scss';

export default angular.module('RosterList', [])
.directive('rosterList', RosterListComponent);
