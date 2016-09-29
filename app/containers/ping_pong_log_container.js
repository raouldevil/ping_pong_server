var React = require('react');
var PingPongLog= require('../components/ping_pong_log');
var Loading = require('../components/loading');
var Urls = require('../data/urls');
var pingPongMachine = require('../models/pingPongMachine')

var PingPongLogContainer = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      logItems: []
    };
  },
  componentDidMount: function() {
    console.log("Urls", Urls)
    pingPongMachine.pingServers(Urls).then(function(items){
      this.setState({
        loading: false,
        logItems: items
      })
    }.bind(this))

  },
  render: function(){
    return this.state.loading == true ? <Loading text={'Waiting'} />: <PingPongLog logItems={this.state.logItems} />
  }
})

module.exports = PingPongLogContainer;
