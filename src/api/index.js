'use strict';

const Hapi = require('@hapi/hapi');
const serverless = require('serverless-http');
const API_VERSION = 'v1';
const server = Hapi.server({
  port: 5000,
  host: '0.0.0.0'
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {

    return 'HapiJS here';
  }
});

const init_server = async () => {
  await server.register([
    {
      plugin: require('./plugins/commons'),
      routes: {
        prefix: `/${API_VERSION}/commons`
      }
    }, 
  ]);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init_server();

const handler = serverless(server);

module.exports.handler = async (event, context) => {
  return await handler(event, context);
};