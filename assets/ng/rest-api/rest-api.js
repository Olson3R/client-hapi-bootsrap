angular.module('myApp.restApi', [
  'restangular'
])
  .constant('REST_API_URL', 'http://192.168.30.10:4001')
  .config(function (RestangularProvider, REST_API_URL) {
    RestangularProvider.setBaseUrl(REST_API_URL)
  })
  .service('UserModel', function(Restangular) {
    return Restangular.service('users')
  })
