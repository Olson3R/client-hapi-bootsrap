angular.module('myApp', [
  'ui.router',
  'myApp.restApi',
  'myApp.users'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        abstract: true
      })
  })
;
