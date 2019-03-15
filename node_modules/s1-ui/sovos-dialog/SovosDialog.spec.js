"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
_react.default.createElement("div", null);

var renderDialog = function renderDialog(_ref) {
  var width = _ref.width;
  return (0, _enzyme.mount)(_react.default.createElement(_.SovosDialog, {
    open: false,
    width: width
  }, _ref2));
};

describe('SovosDialog', function () {
  describe('has proper width set from enum', function () {
    it('small', function () {
      var wrapper = renderDialog({
        width: 'small'
      });
      var style = wrapper.find(_Dialog.default).props().PaperProps.style;
      expect(style.maxWidth).toEqual('400px');
    });
    it('medium', function () {
      var wrapper = renderDialog({
        width: 'medium'
      });
      var style = wrapper.find(_Dialog.default).props().PaperProps.style;
      expect(style.maxWidth).toEqual('700px');
      expect(style.minWidth).toEqual('600px');
    });
    it('large', function () {
      var wrapper = renderDialog({
        width: 'large'
      });
      var style = wrapper.find(_Dialog.default).props().PaperProps.style;
      expect(style.maxWidth).toEqual('80%');
      expect(style.minWidth).toEqual('600px');
    });
  });
  it('has proper custom width', function () {
    var wrapper = renderDialog({
      width: 100
    });
    var style = wrapper.find(_Dialog.default).props().PaperProps.style;
    expect(style.width).toEqual(100);
  });
});