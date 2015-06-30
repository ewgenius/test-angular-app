function runBlock($rootScope, $location, AuthService) {
  'ngInject';

  $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
    //if (!AuthService.isAuthorized())
    //  $location.path('/login');
  });
}

export default runBlock;
