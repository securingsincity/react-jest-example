var React = require('react');

module.exports = React.createClass({
  taskCheck: function () {


  },
  render: function () {
    return (
      <div className="task">
        <input type="checkbox" onChange={this.props.onDestroy} /> <span>{this.props.name} </span >
      </div>
    );
  }
});
