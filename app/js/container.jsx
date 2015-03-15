/** @jsx React.DOM */
var React = require('react'),
GronkButton = require('./button.jsx'),
TaskManager = require('./taskmanager.jsx');


module.exports = React.createClass({

  render: function () {
    return (
      <div className="ui-builder">
        <h1 ref="header">{this.props.name}</h1>
        <GronkButton name="james" />
        <br/>
        <GronkButton name="not james"/>
        <TaskManager/>

      </div>
    );
  }
});
