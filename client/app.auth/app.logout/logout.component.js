angular.module('app.logout').
  component('logout', {
    templateUrl: 'app.auth/app.logout/logout.html',
    controller: LogoutComponent,
    $canActivate: (status) => status.id
  })

function LogoutComponent($location, authService) {
  var ctrl = this;
  authService.logout();
  ctrl.$routerOnActivate = function (next) {
    console.log('$routerOnActivate', this, arguments);
  };
}