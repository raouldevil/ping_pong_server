var React = require('react')

var TestLogItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  // getLogItem: function() {
  //   for (var index in LogItems) {
  //     console.log('logItem', this.props.routeParams)
  //     if (LogItems[index]["logId"] === this.props.routeParams.logId) {
  //       return LogItems[index]
  //     }
  //   };
  //   return {"key": 0, "logId": null, "time": null, "server": "NA", "result": "NA"}
  // },
  render: function(){
    return (
      <TestLogItemView server={this.props.params.server} logId={this.props.routeParams.logId} result={this.props.params.result} />
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
