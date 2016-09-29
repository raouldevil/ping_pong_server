var React = require('react')
require('../index.css')

var Main = React.createClass({
    render: function() {
      return (
        <div className="ping-pong-log">
          <PingPongTitle />
          {this.props.children}
        </div>
      )
    }
})

var PingPongTitle = function() {
  date = (new Date()).toDateString()
  return (
    <div class="title">
      <h3>Server Uptime Results: {date}</h3>
    </div>
  )
}

module.exports = Main
