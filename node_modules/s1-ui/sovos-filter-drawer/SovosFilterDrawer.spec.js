"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _sovosDrawer = _interopRequireDefault(require("../sovos-drawer"));

var _SovosFilterDrawer = _interopRequireDefault(require("./SovosFilterDrawer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
_react.default.createElement("div", null);

describe('SovosFilterDrawer', function () {
  var wrapper;
  beforeEach(function () {
    // eslint-disable-next-line function-paren-newline
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosFilterDrawer.default, {
      onClose: jest.fn(),
      SaveButtonProps: {
        onClick: jest.fn()
      },
      ClearButtonProps: {
        onClick: jest.fn()
      },
      open: true
    }, _ref));
  });
  it('Should contain a SovosDrawer', function () {
    expect(wrapper.find(_sovosDrawer.default)).toExist();
  });
});