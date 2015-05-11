var angularController = require('../app/controllers/angular-controller')
var usersController = require('../app/controllers/users-controller')

module.exports.routes = []

module.exports.routes.push({
  method: 'GET',
  path: '/',
  handler: function(req, res) {
    res.redirect('/users_node')
  }
})

// Angular
module.exports.routes.push({
  method: ['GET', 'POST'],
  path: '/angular',
  config: angularController.index
})

// Users
module.exports.routes.push({
  method: 'GET',
  path: '/users_node',
  config: usersController.index
})

module.exports.routes.push({
  method: 'GET',
  path: '/users_node/new',
  config: usersController.new
})

module.exports.routes.push({
  method: 'POST',
  path: '/users_node/new',
  config: usersController.create
})

// Static files
module.exports.routes.push({
  method: 'GET',
  path: '/{params*}',
  handler: {
    directory: {
      path: 'public',
      listing: false
    }
  }
})
