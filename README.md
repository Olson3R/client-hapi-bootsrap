# client-hapi-bootsrap
Minimal web client project. It implements the index, new and create actions for a user model in both node and angular. Used for presentation purposes along with [rest-hapi-bootstrap](https://github.com/Olson3R/rest-hapi-bootstrap) and [vagrant-bootstrap](https://github.com/Olson3R/vagrant-bootstrap).

The primary technologies used are [NodeJS](https://nodejs.org/), [HapiJS](http://hapijs.com/), [request](https://github.com/request/request), [nunjucks](https://mozilla.github.io/nunjucks/), [AngularJS](https://angularjs.org/), [ui-router](https://github.com/angular-ui/ui-router), [Restangular](https://github.com/mgonto/restangular), [Gulp](http://gulpjs.com/), and [Bootstrap](http://getbootstrap.com/)

# Instructions
>If you provisioned using [vagrant-bootstrap](https://github.com/Olson3R/vagrant-bootstrap), then you can skip to **Start The Server**

1. Install dependencies `npm install`
2. Make sure the [angular rest api base url](https://github.com/Olson3R/client-hapi-bootstrap/blob/master/assets/ng/rest-api/rest-api.js#L4) is configured properly
3. Publish static assets `gulp setup`

# Start The Server
1. Start the server `node index.js` or `nodemon index.js --watch ./ --ignore public --ignore assets -e js,json` (if you have nodemon installed)
 - The server will start on port 4000 by default
2. If you are developing, you may also publish changes to static assets with `gulp watch`
