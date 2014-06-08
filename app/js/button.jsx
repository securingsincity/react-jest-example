/** @jsx React.DOM */
var React = require('react');


module.exports = React.createClass({
   getInitialState: function() {
    return {count: 0};
  },
  oClick: function(e) {
    var count = this.state.count+ 1;
    this.setState({count: count});
  },
  render: function () {
    return (
      <div>
        <button onClick={this.oClick}>{this.props.name}</button> Count : {this.state.count}
      </div>
    );
  }
});
