"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _KeyboardArrowRight = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowRight"));

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _TreeListItem = _interopRequireDefault(require("./TreeListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderItem(item) {
  var expanded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _enzyme.mount)(_react.default.createElement(_TreeListItem.default, {
    item: item,
    onClick: function onClick() {},
    onExpand: function onExpand() {},
    expandedItems: expanded
  }));
}

describe('TreeListItem', function () {
  it('renders the item', function () {
    var content = 'Test';
    var wrapper = renderItem({
      content: content,
      id: content
    });
    expect(wrapper.findWhere(function (n) {
      return n.html() && n.text() === content;
    })).toExist();
  });
  it('does not render nested item if not expanded', function () {
    var nestedContent = 'Nested';
    var wrapper = renderItem({
      content: 'Test',
      id: 'Test',
      nestedItems: [{
        content: nestedContent,
        id: nestedContent
      }]
    });
    expect(wrapper.findWhere(function (n) {
      return n.html() && n.text() === nestedContent;
    })).not.toExist();
  });
  it('renders right arrow if has nested contexts and not expanded', function () {
    var wrapper = renderItem({
      content: 'Test',
      id: 'Test',
      nestedItems: [{
        content: 'Nested',
        id: 'Nested'
      }]
    });
    expect(wrapper.find(_KeyboardArrowRight.default)).toExist();
  });
  it('renders nested item if expanded', function () {
    var content = 'Test';
    var nestedContent = 'Nested';
    var wrapper = renderItem({
      content: content,
      id: content,
      nestedItems: [{
        content: nestedContent,
        id: nestedContent
      }]
    }, _defineProperty({}, content, true));
    expect(wrapper.findWhere(function (n) {
      return n.html() && n.text() === nestedContent;
    })).toExist();
  });
  it('renders down arrow if has nested item and is expanded', function () {
    var content = 'Test';
    var nestedContent = 'Nested';
    var wrapper = renderItem({
      content: content,
      id: content,
      nestedItems: [{
        content: nestedContent,
        id: nestedContent
      }]
    }, _defineProperty({}, content, true));
    expect(wrapper.find(_KeyboardArrowDown.default)).toExist();
  });
});