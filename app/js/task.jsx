/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="task">
        <button type="checkbox" onClick={this.props.onDestroy} ref="completeButton">Complete</button> <span ref="text">{this.props.index + 1}: {this.props.name}</span >
      </div>
    );
  }
});
