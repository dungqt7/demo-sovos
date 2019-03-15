"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosDrawerHeader = _interopRequireDefault(require("./SovosDrawerHeader"));

var _sovosRaisedButton = _interopRequireDefault(require("../../sovos-raised-button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
_react.default.createElement("h2", null, "Test Title");

describe('SovosDrawerHeader', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosDrawerHeader.default, {
      title: "Test Title",
      onClose: jest.fn(),
      PrimaryButtonProps: {
        onClick: jest.fn(),
        children: 'Button Test primary'
      },
      SecondaryButtonProps: {
        onClick: jest.fn(),
        children: 'Button Test secondary'
      },
      disabled: false,
      headerSize: 200
    }));
  });
  it('Should contain a title', function () {
    expect(wrapper.contains(_ref)).toEqual(true);
  });
  it('Should contain 2 buttons', function () {
    expect(wrapper.find(_sovosRaisedButton.default).length).toEqual(2);
  });
});