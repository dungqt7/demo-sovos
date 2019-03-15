"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ColumnRow = _interopRequireDefault(require("./ColumnRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ref =
/*#__PURE__*/
_react.default.createElement("div", null);

function renderRow() {
  var hoverPropOverrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var hoverProps = Object.assign({
    isHovered: false,
    isClickable: false
  }, hoverPropOverrides);
  return (0, _enzyme.mount)(_react.default.createElement(_ColumnRow.default, _extends({
    toggleHover: function toggleHover() {},
    dataRow: {},
    rowIndex: 1
  }, hoverProps), _ref));
}

describe('ColumnRow', function () {
  it('does not add hover style to non-hovered row', function () {
    var wrapper = renderRow();
    expect(wrapper.find('div').at(0)).not.toHaveClassName('hovered');
  });
  it('does not add hover style to a hovered row, non-clickable row', function () {
    var wrapper = renderRow({
      isHovered: true
    });
    expect(wrapper.find('div').at(0)).not.toHaveClassName('hovered');
  });
  it('adds hover style to hovered, clickable row', function () {
    var wrapper = renderRow({
      isHovered: true,
      isClickable: true
    });
    expect(wrapper.find('div').at(0)).toHaveClassName('hovered');
  });
});