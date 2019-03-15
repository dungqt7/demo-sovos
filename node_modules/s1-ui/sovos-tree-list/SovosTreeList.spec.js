"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosTreeList = _interopRequireDefault(require("./SovosTreeList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{
  id: '1',
  content: _react.default.createElement("div", null)
}, {
  id: '2',
  content: _react.default.createElement("div", null)
}, {
  id: '3',
  content: _react.default.createElement("div", null)
}];

function renderList() {
  return (0, _enzyme.mount)(_react.default.createElement(_SovosTreeList.default, {
    data: data,
    onItemClick: function onItemClick() {}
  }));
}

describe('SovosTreeList', function () {
  it('renders each list item', function () {
    var wrapper = renderList();
    expect(wrapper.find('TreeListItem').length).toBe(data.length);
  });
});