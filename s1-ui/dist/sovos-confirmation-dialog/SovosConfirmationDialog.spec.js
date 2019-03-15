"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosDialog = _interopRequireDefault(require("../sovos-dialog/SovosDialog"));

var _SovosConfirmationDialog = _interopRequireDefault(require("./SovosConfirmationDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderDialog = function renderDialog() {
  var negative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (0, _enzyme.mount)(_react.default.createElement(_SovosConfirmationDialog.default, {
    open: true,
    negative: negative
  }));
};

describe('SovosConfirmationDialog', function () {
  it('has width fixed to small', function () {
    var wrapper = renderDialog();

    var _wrapper$find$props = wrapper.find(_SovosDialog.default).props(),
        width = _wrapper$find$props.width;

    expect(width).toEqual('small');
  });
});