var url = require('url')
var bluebird = require('bluebird')
var request = bluebird.promisify(require('request'))

var config = require('../config/rest-api')

var RestAPI = function() {}

RestAPI.get = function(path, queryStringData) {
  var requestOptions = {
    url: url.resolve(config.baseUrl, path),
    qs: queryStringData,
    method: 'GET'
  }

  return request(requestOptions).spread(RestAPI.processResponse)
}

RestAPI.post = function(path, body, queryStringData) {
  var requestOptions = {
    url: url.resolve(config.baseUrl, path),
    qs: queryStringData,
    body: body,
    json: true,
    method: 'POST'
  }

  return request(requestOptions).spread(RestAPI.processResponse)
}

RestAPI.processResponse = function(res, body) {
  if (res.statusCode != 200) {
    throw new Error("Non-200 response received: " + res.statusCode)
  }

  return (typeof body === 'string') ? JSON.parse(body) : body
}

module.exports = RestAPI
