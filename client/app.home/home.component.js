angular.module('app.home', []).component('home', {
  templateUrl: 'app.home/home.html',
  controller: HomeComponent,
  $canActivate: (status) => status.id
});

function HomeComponent(status, dataService, homeService) {
  var ctrl = this;

  ctrl.changeImage = () => homeService.changeImage()
    .then(el => ctrl.info.img = el.img);

  this.$routerOnActivate = function (next) {
    dataService.getUser(status.id)
      .then(el => ctrl.info = el);
  };
}