/** @jsx React.DOM */
var React = require('react');
var Task = require('./task.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {items: [], text: '', error: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  destroyThis: function(i) {
    this.state.items.splice(i,1);
    this.setState({items: this.state.items});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.text !== '' ) {
      var nextItems = this.state.items.concat([this.state.text]);
      var nextText = '';

      this.setState({items: nextItems, text: nextText,error: ''});
    } else {
      this.setState({error: "You must enter text to write a new task"});
    }
  },

  render: function () {
    var self = this;
    var createItem = function(itemText,i) {
      return <li key={i}><Task name={itemText} onDestroy={self.destroyThis.bind(self, i)}  index={i} /></li>;
    };
    return (
      <div className="taskManager">
        <h4>To Do List</h4>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>Add Task</button>
        </form>
        <span className="errorText">{this.state.error}</span>
        <ul>{this.state.items.map(createItem)}</ul>
      </div>
    );
  }
});
