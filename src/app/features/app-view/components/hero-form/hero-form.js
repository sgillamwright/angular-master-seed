import angular from 'angular';

import HeroFormComponent from './hero-form.component';
import './hero-form.scss';

export default angular.module('app-view.hero-form', [])
.directive('heroForm', HeroFormComponent);
