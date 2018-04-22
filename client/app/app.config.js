angular
  .module('app')
  .config(configure)
  .run(run)
  .value('$routerRootComponent', 'app');

function configure($locationProvider) {
  $locationProvider.html5Mode(false);
}

function run(authService) {
  authService.initState();
}