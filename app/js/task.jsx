/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="task">
        <button type="checkbox" onClick={this.props.onDestroy} >Delete</button> <span>{this.props.index + 1}: {this.props.name}</span >
      </div>
    );
  }
});
