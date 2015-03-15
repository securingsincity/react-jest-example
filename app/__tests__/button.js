/** @jsx React.DOM */
jest.dontMock('../js/button.jsx');
var React = require('react/addons');
var GronkButton = require('../js/button.jsx');
var TestUtils = React.addons.TestUtils;

describe('button test', function() {
  it('changes the text after click', function() {
    var button = <GronkButton name="hi"/>;
    var DOM = TestUtils.renderIntoDocument(button);
    expect(DOM.refs.gronkButton.getDOMNode().textContent).toEqual('hi Count : 0');
    React.addons.TestUtils.Simulate.click(DOM.refs.button.getDOMNode());
    expect(DOM.refs.gronkButton.getDOMNode().textContent).toEqual('hi Count : 1');
  });

  it('changes the text after multiple clicks', function() {

    var button = <GronkButton name="hi"/>;
    TestUtils.renderIntoDocument(button);
    var DOM = TestUtils.renderIntoDocument(button);
    expect(DOM.refs.gronkButton.getDOMNode().textContent).toEqual('hi Count : 0');
    for(var i = 1; i < 10; i++){
      React.addons.TestUtils.Simulate.click(DOM.refs.button.getDOMNode());
      expect(DOM.refs.gronkButton.getDOMNode().textContent).toEqual('hi Count : '+i);
    }

  });
});
