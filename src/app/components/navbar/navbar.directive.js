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
  constructor () {
    'ngInject';
  }
}

export default NavbarDirective;
