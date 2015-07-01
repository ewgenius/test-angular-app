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
      $scope.currentUser = AuthService.currentUser;
      return false;
    };
  }
}

export default NavbarDirective;
