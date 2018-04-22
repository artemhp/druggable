angular.module('app.login').
  component('login', {
    templateUrl: 'app.auth/app.login/login.html',
    controller: LoginComponent,
    $canActivate: ($timeout) => {
      return true;
    }
  })

function LoginComponent($location, authService) {
  var ctrl = this;
  ctrl.login = function (el) {
    authService.login(ctrl.name).then(
      el => $location.path("/home")
    );
  }
}