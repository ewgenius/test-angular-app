class MainController {
  constructor($scope) {
    'ngInject';

    $scope.colors = {
      red: '#000000',
      white: '#000000',
      black: '#000000',
      blue: '#000000',
      yellow: '#000000',
      green: '#000000'
    };

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
