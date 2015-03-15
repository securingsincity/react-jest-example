/** @jsx React.DOM */
var React = require('react/addons');


module.exports = React.createClass({
   getInitialState: function() {
    return {count: 0};
  },
  propTypes:  {
    name: React.PropTypes.string.isRequired
  },
  oClick: function(e) {
    var count = this.state.count+ 1;
    this.setState({count: count});
  },
  render: function () {
    return (
      <div ref="gronkButton">
        <button ref="button" onClick={this.oClick}>{this.props.name}</button> Count : {this.state.count}
      </div>
    );
  }
});
