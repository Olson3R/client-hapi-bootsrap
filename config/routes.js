var usersController = require('../app/controllers/users-controller')

module.exports.routes = []

module.exports.routes.push({
  method: 'GET',
  path: '/',
  handler: function(req, res) {
    res.redirect('http://' + req.host + req.url + '/users')
  }
})

// Users
module.exports.routes.push({
  method: 'GET',
  path: '/users',
  config: usersController.index
})

module.exports.routes.push({
  method: 'GET',
  path: '/users/new',
  config: usersController.new
})

module.exports.routes.push({
  method: 'POST',
  path: '/users/new',
  config: usersController.create
})
