"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _SovosSnackbar = _interopRequireDefault(require("./SovosSnackbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SovosSnackbar', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosSnackbar.default, {
      message: "test",
      open: true,
      onClose: function onClose() {},
      onAction: function onAction() {}
    }));
  });
  it('has Snackbar autoHideDuration set to 4000', function () {
    var container = wrapper.find(_Snackbar.default).prop('autoHideDuration');
    expect(container).toEqual(4000);
  });
  it('has Snackbar class set to confirmation', function () {
    var className = wrapper.find(_SnackbarContent.default).prop('className');
    expect(className).toContain('confirmation');
  });
  it('has Snackbar width set to 100%', function () {
    var style = wrapper.find(_Snackbar.default).prop('style');
    expect(style.width).toEqual('100%');
  });
});
describe('SovosSnackbar error', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosSnackbar.default, {
      variant: "error",
      message: "test",
      open: true,
      onClose: function onClose() {},
      onAction: function onAction() {}
    }));
  });
  it('has Snackbar class set to error();', function () {
    var className = wrapper.find(_SnackbarContent.default).prop('className');
    expect(className).toContain('error');
  });
});