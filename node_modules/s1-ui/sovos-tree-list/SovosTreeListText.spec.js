"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosTreeListText = _interopRequireDefault(require("./SovosTreeListText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderText(text) {
  return (0, _enzyme.mount)(_react.default.createElement(_SovosTreeListText.default, {
    primary: text
  }));
}

describe('SovosTreeListText', function () {
  it('truncates long names to 40 characters and includes an ellipsis', function () {
    var text = 'Really really really really long content that will get truncated';
    var wrapper = renderText(text);
    var truncated = wrapper.findWhere(function (n) {
      return n.html() && n.text().includes('...');
    });
    expect(truncated.last().text().length).toBe(43);
  });
});