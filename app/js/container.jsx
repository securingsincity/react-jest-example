var React = require('react'),
gronkButton = require('./button.jsx');

module.exports = React.createClass({

  render: function () {
    return (
      <div className="ui-builder">
        <gronkButton />
        <br/>
        <gronkButton />
        Hi james
      </div>
    );
  }
});
