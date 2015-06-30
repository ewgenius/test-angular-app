class SignupController {
  constructor($scope, $location, AuthService) {
    'ngInject';

    $scope.user = {};

    $scope.submit = () => {
      if (!$scope.passwordInvalid && $scope.signup.email.$valid)
        AuthService.signup($scope.user.email, $scope.user.password);
        $location.path('/main');
    };

    $scope.validatePassword = () => {
      $scope.passwordInvalid = $scope.user.password !== $scope.user.password1 || $scope.user.password === '';
    };
  }
}

export default SignupController;
