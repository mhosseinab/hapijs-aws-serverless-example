const MODULE = require('./modules');

module.exports = function routes (options) {
  return [
      { 
        method: 'GET', path: '/ping', 
        config: { 
          handler: MODULE.Ping,
        } 
      },
  ];
};