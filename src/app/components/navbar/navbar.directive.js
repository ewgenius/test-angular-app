class NavbarDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class NavbarController {
  constructor ($scope, $location, AuthService) {
    'ngInject';

    $scope.currentUser = AuthService.currentUser;

    $scope.logout = () => {
      AuthService.logout();
      $location.path('/login');
      return false;
    };
  }
}

export default NavbarDirective;
