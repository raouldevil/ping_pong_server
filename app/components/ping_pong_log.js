var React = require('react');

var logItems = [
  {"key": 1, "time": new Date('2016-05-19'), "server": "www.mts-api.mytimeslot.co.za", "result": "Success"},
  {"key": 2, "time": new Date('2016-05-19'), "server": "www.mts-api.mytimeslot.co.za", "result": "Success"},
  {"key": 3, "time": new Date('2016-05-20'), "server": "www.mts-api.mytimeslot.co.za", "result": "Fail"},
  {"key": 4, "time": new Date('2016-05-20'), "server": "www.mts-api.mytimeslot.co.za", "result": "Fail"}
]

var PingPongLog = React.createClass({
  render: function(){
    return (
      <div className="ping-pong-list">
        <table>
          <tbody>
            {
              logItems.map(function(log){
                return <PingPongItem key={log["key"]} log={log} />
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
});

var PingPongItem = React.createClass({
  render: function(){
    console.log("Log:", this.props.log)
    return (
      <tr class="ping-pong-log-item">
        <td> {this.props.log["time"].toString()} </td>
        <td> {this.props.log["server"]} </td>
        <td> {this.props.log["result"]} </td>
      </tr>
    )
  }
});

module.exports = PingPongLog