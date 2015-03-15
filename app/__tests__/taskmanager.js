/** @jsx React.DOM */
jest.dontMock('../js/taskmanager.jsx');
var React = require('react/addons');
var Taskmanager = require('../js/taskmanager.jsx');
var TestUtils = React.addons.TestUtils;

describe('load container and check text', function() {
  it('check text', function() {
    var taskmanager = <Taskmanager />;
    var taskmanager = TestUtils.renderIntoDocument(taskmanager);
    var button = TestUtils.findRenderedDOMComponentWithTag(
      taskmanager, 'button');
    expect(button.getDOMNode().textContent).toEqual('Add Task');
 });
});

describe('load container and check text', function() {
  it('check text', function() {
    var taskmanager = <Taskmanager />;
    var taskmanager = TestUtils.renderIntoDocument(taskmanager);
    //the value of the input should be empty
    var input = TestUtils.findRenderedDOMComponentWithTag(taskmanager, 'input');
    expect(input.getDOMNode().value).toBe('');

    var form = TestUtils.findRenderedDOMComponentWithTag(taskmanager, 'form');
    var listItems = TestUtils.scryRenderedDOMComponentsWithTag(taskmanager, 'li');
    //there should be no tasks right now
    expect(listItems.length).toEqual(0);

    input.getDOMNode().value = 'Get the groceries';
    React.addons.TestUtils.Simulate.change(input.getDOMNode());
    // the text should be changed to get the groceries
    expect(input.getDOMNode().value).toBe('Get the groceries');
    React.addons.TestUtils.Simulate.submit(form.getDOMNode());
    //when we submit the text should be blank again
    expect(input.getDOMNode().value).toBe('');
    listItems = TestUtils.scryRenderedDOMComponentsWithTag(taskmanager, 'li');
    //and there should be a new task
    expect(listItems.length).toEqual(1);
    var listItemSpan = TestUtils.findRenderedDOMComponentWithTag(listItems[0], 'span');
    //and that task should be get the groceries
    expect(listItemSpan.getDOMNode().textContent).toEqual('1: Get the groceries');
 });
});
