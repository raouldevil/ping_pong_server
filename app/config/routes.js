var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var IndexRoute = ReactRouter.IndexRoute
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/main');
var PingPongLog = require('../components/ping_pong_log');

var routes = (
    <Router history={hashHistory}>
      <Route path='/' component={Main} >
        <IndexRoute component={PingPongLog} />
      </Route>

    </Router>
)

module.exports = routes
