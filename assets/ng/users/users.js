angular.module('myApp.users', [
  'ui.router',
  'myApp.restApi'
])
  .config(function ($stateProvider, UserModelProvider) {
    $stateProvider
      .state('usersIndex', {
        url: '/users',
        templateUrl: 'ng/users/index.tmpl.html',
        controller: 'UsersCtrl as usersCtrl',
        resolve: {
          users: function(UserModel) {
            return UserModel.getList()
          }
        }
      })
      .state('usersNew', {
        url: '/users/new',
        templateUrl: 'ng/users/new.tmpl.html',
        controller: 'UsersNewCtrl as usersNewCtrl'
      })
    ;
  })
  .controller('UsersCtrl', function (users) {
    var usersCtrl = this;

    usersCtrl.users = users;
  })
  .controller('UsersNewCtrl', function ($state, UserModel) {
    var usersNewCtrl = this;

    usersNewCtrl.user = {
      name: null
    }

    usersNewCtrl.submit = function() {
      UserModel.post(usersNewCtrl.user).then(function(user) {
        $state.go('usersIndex')
      })
    }
  })
  .directive('userRow', function() {
    return {
      scope: {
        user: '='
      },
      restrict: 'A',
      templateUrl: 'ng/users/_user-row.tmpl.html'
    }
  })
  .directive('userForm', function() {
    return {
      scope: {
        user: '=',
        submit: '&'
      },
      restrict: 'A',
      templateUrl: 'ng/users/_form.tmpl.html'
    }
  })
