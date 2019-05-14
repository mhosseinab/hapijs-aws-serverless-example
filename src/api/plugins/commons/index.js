
const routes = require('./routes');

exports.plugin = {
  pkg: require('./package.json'),
  register: function (server, options) {
    server.route(routes(options));
  }
};