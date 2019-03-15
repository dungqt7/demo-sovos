"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosButtonsGroup = _interopRequireDefault(require("./SovosButtonsGroup"));

var _SovosRaisedButton = _interopRequireDefault(require("../sovos-raised-button/SovosRaisedButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
_react.default.createElement(_SovosButtonsGroup.default, null, _react.default.createElement(_SovosRaisedButton.default, null, "Button Label"));

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_SovosButtonsGroup.default, null, _react.default.createElement(_SovosRaisedButton.default, null, "Button Label"), _react.default.createElement(_SovosRaisedButton.default, null, "Button Label 2"));

describe('SovosButtonsGroup', function () {
  it('renders one button', function () {
    var enzymeWrapper = (0, _enzyme.mount)(_ref);
    expect(enzymeWrapper.find(_SovosRaisedButton.default)).toExist();
    expect(enzymeWrapper.find(_SovosRaisedButton.default).text()).toBe('Button Label');
  });
  it('Render an array of buttons', function () {
    var enzymeWrapper = (0, _enzyme.mount)(_ref2);
    expect(enzymeWrapper.find(_SovosRaisedButton.default).length).toBe(2);
    expect(enzymeWrapper.find(_SovosRaisedButton.default).last().text()).toBe('Button Label 2');
  });
});