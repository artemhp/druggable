angular
  .module('app')
  .factory('dataService', dataService);

function dataService($http) {
  return {
    getUser,
    changeUser,
    createUser
  };

  function createUser(name) {
    return $http.post(
      'http://localhost:3000/users', { name: name }
    ).then(response => response.data).catch(console.log);
  }

  function getUser(id) {
    return $http.get(`http://localhost:3000/users/${id}`)
      .then(response => response.data)
      .catch(console.log);
  }

  function changeUser(id, data) {
    return $http.put(
      `http://localhost:3000/users/${id}`, data
    ).then(response => response.data).catch(console.log);
  }

}