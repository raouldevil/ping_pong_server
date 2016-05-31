var React = require('react');
var PropTypes = React.PropTypes

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
                return <PingPongItem key={log["key"]} time={log["time"].toString()} server={log["server"]} result={log["result"]} />
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
})

var PingPongItem = function(props) {
  return (
    <tr class="ping-pong-log-item">
      <td> {props.time} </td>
      <td> {props.server} </td>
      <td> {props.result} </td>
    </tr>
  )
}

PingPongItem.propTypes = {
  time: PropTypes.string.isRequired,
  server: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired
},

module.exports = PingPongLog