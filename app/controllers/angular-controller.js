var handlers = {}

handlers.index = {
  handler: function(req, res) {
    res.view('angular/index')
  }
}

module.exports = handlers
