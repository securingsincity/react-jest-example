/** @jsx React.DOM */
jest.dontMock('../js/container.jsx');
var React = require('react/addons');
var Container = require('../js/container.jsx');
var TestUtils = React.addons.TestUtils;

describe('load container and check text', function() {
  it('check text', function() {
    var container = <Container name="hi" />;
    TestUtils.renderIntoDocument(container);
    var h1 = TestUtils.findRenderedDOMComponentWithTag(
      container, 'h1');
    expect(h1.getDOMNode().textContent).toEqual('hi');
 });
});
describe('load container and the right number of objects', function() {
  it('check buttons', function() {
    var container = <Container name="hi" />;
    TestUtils.renderIntoDocument(container);
    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(
      container, 'button');
    expect(buttons.length).toEqual(3);
 });
 it('check buttons', function() {
   var container = <Container name="hi" />;
   TestUtils.renderIntoDocument(container);
   var input = TestUtils.scryRenderedDOMComponentsWithTag(
     container, 'input');
   expect(input.length).toEqual(1);
});
});
