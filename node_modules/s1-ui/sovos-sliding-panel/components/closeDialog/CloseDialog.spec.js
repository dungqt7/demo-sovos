"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _CloseDialog = _interopRequireDefault(require("./CloseDialog"));

var _SovosConfirmationDialog = _interopRequireDefault(require("../../../sovos-confirmation-dialog/SovosConfirmationDialog"));

var _SovosDialogTitle = _interopRequireDefault(require("../../../sovos-dialog/components/SovosDialogTitle"));

var _SovosDialogContent = _interopRequireDefault(require("../../../sovos-dialog/components/SovosDialogContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCloseDialog = function getCloseDialog() {
  var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultProps = {
    open: false,
    DialogTitleProps: {
      children: 'Some title'
    },
    DialogContentProps: {
      children: 'Some Text'
    },
    OKButtonProps: {
      onClick: function onClick() {},
      children: 'OK'
    },
    CancelButtonProps: {
      onClick: function onClick() {},
      children: 'Cancel'
    }
  };
  var props = Object.assign({}, defaultProps, conf);
  return (0, _enzyme.shallow)(_react.default.createElement(_CloseDialog.default, props));
};

describe('CloseDialog', function () {
  describe('General tests', function () {
    it('has open flag in false when passed', function () {
      var wrapper = getCloseDialog();
      var container = wrapper.find(_SovosConfirmationDialog.default);
      expect(container.props().open).toEqual(false);
    });
    it('has open flag true when passed', function () {
      var wrapper = getCloseDialog({
        open: true
      });
      var container = wrapper.find(_SovosConfirmationDialog.default);
      expect(container.props().open).toEqual(true);
    });
    it('has title when passed sovosDialogTitle', function () {
      var wrapper = getCloseDialog();
      var container = wrapper.find(_SovosConfirmationDialog.default);
      expect(container.find(_SovosDialogTitle.default).props().children).toEqual('Some title');
    });
    it('has dialog text when passed dialogText', function () {
      var wrapper = getCloseDialog();
      var container = wrapper.find(_SovosConfirmationDialog.default);
      expect(container.find(_SovosDialogContent.default).props().children).toEqual('Some Text');
    });
  });
});