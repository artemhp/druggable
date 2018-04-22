angular
  .module('app.auth')
  .factory('authService', authService);

function authService($http, $window, status, dataService) {
  return {
    login,
    logout,
    initState
  };

  function login(name) {
    return $http.post(
      'http://localhost:3000/authenticate', { "name": name }
    ).then(authComplete).catch(authFailed);

    function authComplete(response) {
      return updateStatus(response.data);
    }

    function authFailed(error) {
      return dataService.createUser(name).then(
        response => updateStatus(response)
      );
    }
  }

  function updateStatus(auth) {
    status.name = auth.name;
    status.id = auth._id;
    $window.localStorage.setItem('id', auth._id)
  }
  function logout() {
    status.name = null;
    status.id = null;
    $window.localStorage.removeItem('id');
  }

  function initState() {
    status.id = $window.localStorage.getItem('id');
  }

}