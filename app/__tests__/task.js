/** @jsx React.DOM */
jest.dontMock('../js/task.jsx');
var React = require('react/addons');
var Task = require('../js/task.jsx');
var TestUtils = React.addons.TestUtils;

describe('task text', function() {
  it('the task text is accurate', function() {
    var task = <Task name="hi" />;
    TestUtils.renderIntoDocument(task);
    var span = TestUtils.findRenderedDOMComponentWithTag(
      task, 'span');
    expect(span.getDOMNode().textContent).toEqual('hi');
 });


});

describe('task when clicked fires on destroy event', function() {
  it('test', function() {
    var testing = false;
    var testingFunction = function() {
      testing = true;
    };
    var task = <Task name="hi" onDestroy={testingFunction} />;
    TestUtils.renderIntoDocument(task);
    var input = TestUtils.findRenderedDOMComponentWithTag(
      task, 'input');
    React.addons.TestUtils.Simulate.change(input.getDOMNode());
    expect(testing).toBe(true);
  });
});
