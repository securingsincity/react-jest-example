var React = require('react'),
gronkButton = require('./button.jsx'),
taskManager = require('./taskmanager.jsx');


module.exports = React.createClass({

  render: function () {
    return (
      <div className="ui-builder">
        <gronkButton name="james" />
        <br/>
        <gronkButton name="not james"/>
        <taskManager/>

      </div>
    );
  }
});
