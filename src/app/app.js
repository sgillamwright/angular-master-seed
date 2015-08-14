
//our framework
import angular from 'angular';

//vendor code
import Vendor from './vendor/vendor';

//app components
import Common from './common/common';
import Features from './features/features';

//app bootstrap
import AppComponent from './app.component';
import AppConfig from './app.config';

//app css
import Styles from './app.scss';

angular.module('app', [
  Vendor.name,
  Common.name,
  Features.name,
])
  .config(AppConfig)
  .directive('app', AppComponent);
