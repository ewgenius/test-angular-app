class SignupController {
  constructor($scope) {
    'ngInject';

    $scope.user = {};

    $scope.submit = () => {
      return false;
    };

    $scope.validatePassword = () => {
      $scope.passwordInvalid = $scope.user.password !== $scope.user.password1 || $scope.user.password === '';
    };
  }
}

export default SignupController;
