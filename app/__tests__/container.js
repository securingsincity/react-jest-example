/** @jsx React.DOM */
jest.dontMock('../js/container.jsx');
var React = require('react/addons');
var Container = require('../js/container.jsx');
var TestUtils = React.addons.TestUtils;

describe('load container and check text', function() {
  it('check text', function() {
    var container = <Container name="hi" />;
    var DOM = TestUtils.renderIntoDocument(container);
    expect(DOM.refs.header.getDOMNode().textContent).toEqual('hi');
 });
});
describe('load container and the right number of objects', function() {
  it('should have 3 buttons', function() {
    var container = <Container name="hi" />;
    var DOM = TestUtils.renderIntoDocument(container);
    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(
      DOM, 'button');
    expect(buttons.length).toEqual(3);
 });
 it('should have 1 input', function() {
   var container = <Container name="hi" />;
   var DOM = TestUtils.renderIntoDocument(container);
   var input = TestUtils.scryRenderedDOMComponentsWithTag(
     DOM, 'input');
   expect(input.length).toEqual(1);
});
});
