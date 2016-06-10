var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var IndexRoute = ReactRouter.IndexRoute
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/main');
var PingPongLogContainer = require('../containers/ping_pong_log_container');
var TestLogItem = require('../components/test_log_item');

var routes = (
    <Router history={hashHistory}>
      <Route path='/' component={Main} >
        <IndexRoute component={PingPongLogContainer} />
        <Route path='/log_item/:logId' component={TestLogItem} />
      </Route>

    </Router>
)

module.exports = routes
