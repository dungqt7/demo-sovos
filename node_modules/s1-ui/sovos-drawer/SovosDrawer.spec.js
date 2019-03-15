"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosDrawer = _interopRequireDefault(require("./SovosDrawer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
_react.default.createElement("div", null);

describe('SovosDrawer', function () {
  var wrapper;
  beforeEach(function () {
    // eslint-disable-next-line function-paren-newline
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosDrawer.default, {
      onClose: jest.fn(),
      open: true,
      PrimaryButtonProps: {
        onClick: jest.fn()
      },
      SecondaryButtonProps: {
        onClick: jest.fn()
      },
      title: "Demo",
      size: "large"
    }, _ref));
  });
  it('Should contain a header', function () {
    expect(wrapper.find('SovosDrawerHeader')).toExist();
  });
});