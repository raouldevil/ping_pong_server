var React = require('react');
var PropTypes = React.PropTypes
var ReactRouter = require('react-router');
var Link = ReactRouter.Link


var PingPongLog = function(props) {
  return (
    <div className="ping-pong-list">
      <table>
        <tbody>
          {
            props.logItems.map(function(log){
              return <PingPongItem key={log["key"]} logId={log["logId"]} time={log["time"].toString()} server={log["server"]} result={log["result"]} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

var PingPongItem = function(props) {
  return (
    <tr class="ping-pong-log-item">
      <td> {props.time} </td>
      <td> {props.server} </td>
      <td> {props.result} </td>
      <td>
        <Link to={'/log_item/' + props.logId} >
          Test Server
        </Link>
      </td>
    </tr>
  )
}

PingPongItem.propTypes = {
  time: PropTypes.string.isRequired,
  server: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  logId: PropTypes.string.isRequired
},

module.exports = PingPongLog