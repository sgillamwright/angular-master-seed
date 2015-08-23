import angular from 'angular';

import HeroFormComponent from './hero-form.component';
import './hero-form.scss';

export default angular.module('HeroForm', [])
.directive('heroForm', HeroFormComponent);
