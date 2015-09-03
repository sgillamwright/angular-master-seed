import angular from 'angular';

import HeroFormComponent from './hero-form.component';
import './hero-form.scss';

export default angular.module('app.features.app-view.components.hero-form', [])
.directive('heroForm', HeroFormComponent);
