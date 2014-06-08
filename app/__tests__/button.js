/** @jsx React.DOM */
jest.dontMock('../js/button.jsx');
var React = require('react/addons');
var gronkButton = require('../js/button.jsx');
var TestUtils = React.addons.TestUtils;

describe('button test', function() {
  it('changes the text after click', function() {
    var button = <gronkButton name="hi"/>;
    TestUtils.renderIntoDocument(button);
    var div = TestUtils.findRenderedDOMComponentWithTag(
      button, 'div');
    var buttonDom = TestUtils.findRenderedDOMComponentWithTag(
      button, 'button');
    expect(div.getDOMNode().textContent).toEqual('hi Count : 0');
    React.addons.TestUtils.Simulate.click(buttonDom.getDOMNode());
    expect(div.getDOMNode().textContent).toEqual('hi Count : 1');
  });

  it('changes the text after multiple clicks', function() {

    var button = <gronkButton name="hi"/>;
    TestUtils.renderIntoDocument(button);
    var div = TestUtils.findRenderedDOMComponentWithTag(
      button, 'div');
    var buttonDom = TestUtils.findRenderedDOMComponentWithTag(
      button, 'button');
    expect(div.getDOMNode().textContent).toEqual('hi Count : 0');
    for(var i = 1; i < 10; i++){
        React.addons.TestUtils.Simulate.click(buttonDom.getDOMNode());
        expect(div.getDOMNode().textContent).toEqual('hi Count : '+i);
    }

  });
});
