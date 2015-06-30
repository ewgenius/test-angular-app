/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import LoginController from './login/login.controller';
import SignupController from './signup/signup.controller';
import NavbarDirective from '../app/components/navbar/navbar.directive';

angular.module('testEshopApp', ['restangular', 'ui.router', 'ui.bootstrap'])
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  .controller('MainController', MainController)
  .directive('navbar', () => new NavbarDirective());
