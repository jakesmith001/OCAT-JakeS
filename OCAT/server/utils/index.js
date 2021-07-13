const config = require(`./Config`);
const ErrorHandler = require(`./ErrorHandler`);
const IndexRoute = require(`./IndexRoute`);
const RouteLoader = require(`./RouteLoader`);
const client = require(`./client`);

module.exports = {
  ErrorHandler,
  IndexRoute,
  RouteLoader,
  config,
  client
};
