var React = require('react');
var PingPongLog= require('../components/ping_pong_log');
var LogItems = require('../data/log_items');

var PingPongLogContainer = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      logItems: []
    };
  },
  componentDidMount: function() {
    this.setState({
      loading: false,
      logItems: LogItems
    })
  },
  render: function(){
    return this.state.loading == true ? <p>"Loading..."</p> : <PingPongLog logItems={this.state.logItems} />
  }
})

module.exports = PingPongLogContainer;