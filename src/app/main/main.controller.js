class MainController {
  constructor($scope, $rootScope, AuthService) {
    'ngInject';

    $scope.authorized = AuthService.isAuthorized();

    $rootScope.$on('auth.logout', () => {
      $scope.authorized = false;
    });

    $scope.filter = {
    };

    $scope.colors = [
      'red',
      'white',
      'black',
      'blue',
      'yellow',
      'green'
    ];

    $scope.items = [{
      id: 0,
      name: 'test',
      color: 'red',
      issueDate: '',
      price: '',
      rating: 5,
      inStock: false,
      image: 'https://robohash.org/random.png?size=100x100&bgset=bg1&set=any'
    }];
  }
}

export default MainController;
