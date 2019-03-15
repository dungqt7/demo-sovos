"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosAvatar = _interopRequireDefault(require("./SovosAvatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
_react.default.createElement(_SovosAvatar.default, {
  name: "David",
  surname: "Dango",
  showTooltip: true,
  size: "small"
});

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_SovosAvatar.default, {
  showTooltip: true,
  size: "small"
});

describe('SovosAvatar', function () {
  it('renders tooltip when name is specified', function () {
    var enzymeWrapper = (0, _enzyme.mount)(_ref);
    expect(enzymeWrapper.find('Tooltip').prop('title')).toBe('David Dango');
  });
  it('renders tooltip with question mark when no name specified', function () {
    var enzymeWrapper = (0, _enzyme.mount)(_ref2);
    expect(enzymeWrapper.find('Tooltip').prop('title')).toBe('Unassigned');
  });
});