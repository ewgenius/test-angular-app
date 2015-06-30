class LoginController {
  constructor($scope, $location, AuthService) {
    'ngInject';

    $scope.submit = () => {
      $scope.loginResult = AuthService.login($scope.user.email, $scope.user.password);
      if ($scope.loginResult == true)
        $location.path('/main');
    }
  }
}

export default LoginController;
