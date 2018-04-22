angular
  .module('app.home')
  .factory('homeService', homeService);

function homeService(status, dataService) {
  return {
    changeImage
  };

  function changeImage(name) {
    const rand = (Math.floor(Math.random() * 31) + 50);
    const img = `https://picsum.photos/100/100?image=${rand}`;
    return dataService.changeUser(status.id, { img });
  }

}