var React = require('react');
var LogItems = require('../data/log_items');

var TestLogItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getLogItem: function() {
    for (var index in LogItems) {
      console.log('logItem', this.props.routeParams)
      if (LogItems[index]["logId"] === this.props.routeParams.logId) {
        return LogItems[index]
      }
    };
    return {"key": 0, "logId": null, "time": null, "server": "NA", "result": "NA"}
  },
  render: function(){
    var thisLogItem = this.getLogItem()
    console.log('thisLogItem', thisLogItem)
    return (
      <TestLogItemView server={thisLogItem["server"]} logId={thisLogItem["logId"]} result={thisLogItem["result"]} />
    )
  }
})

var TestLogItemView = function(props) {
  console.log('Props:', this)
  return (
    <div className="ping-pong-test-item">
      URL: {props.server}<br />
      LogId: {props.logId}<br />
      Result: {props.result}
    </div>
  )
}

module.exports = TestLogItem