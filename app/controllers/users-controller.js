var RestAPI = require('../../lib/rest-api')

var handlers = {}

handlers.index = {
  handler: function(req, res) {
    RestAPI.get('users')
      .then(function(users) {
        res.view('users/index', {users: users})
      })
      .catch(function(err) {
        res("An error has ocurred: " + err)
        throw err
      })
  }
}

handlers.new = {
  handler: function(req, res) {
    res.view('users/new')
  }
}

handlers.create = {
  handler: function(req, res) {
    RestAPI.post('users', req.payload)
      .then(function(user) {
        res.redirect('/users')
      })
      .catch(function(err) {
        res("An error has ocurred: " + err)
        throw err
      })
  }
}

// TODO - show
// TODO - edit
// TODO - update
// TODO - delete

module.exports = handlers
