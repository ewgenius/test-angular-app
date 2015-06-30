import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import LoginController from './login/login.controller';
import SignupController from './signup/signup.controller';
import AuthService from '../app/components/auth/auth.service';
import NavbarDirective from '../app/components/navbar/navbar.directive';

angular.module('testEshopApp', [
    'restangular',
    'ui.router',
    'ui.bootstrap',
    'LocalStorageModule'
  ])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('LoginController', LoginController)
  .controller('SignupController', SignupController)
  .controller('MainController', MainController)
  .service('AuthService', AuthService)
  .directive('navbar', () => new NavbarDirective());
