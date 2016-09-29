var React = require('react')

var Loading = React.createClass({

  getInitialState: function () {
    this.initialText = this.props.text;
    return {
      text: this.initialText
    }
  },
  componentDidMount: function() {
    var stopper = this.initialText + '.........'
    this.setTimer = setInterval(function () {
      if (this.state.text === stopper) {
        this.setState(
          {
            text: this.initialText
          }
        )
      } else {
        this.setState(
          {
            text: this.state.text + '.'
          }
        )
      }
    }.bind(this), 90)
  },
  componentWillUnmount: function() {
    clearInterval(this.setTimer)
  },
  render: function() {
    return (
      <p>{this.state.text}</p>
    )
  }
})

module.exports = Loading
