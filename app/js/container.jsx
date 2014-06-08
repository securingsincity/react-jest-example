/** @jsx React.DOM */
var React = require('react'),
gronkButton = require('./button.jsx'),
taskManager = require('./taskmanager.jsx');


module.exports = React.createClass({

  render: function () {
    return (
      <div className="ui-builder">
        <h1>{this.props.name}</h1>
        <gronkButton name="james" />
        <br/>
        <gronkButton name="not james"/>
        <taskManager/>

      </div>
    );
  }
});
