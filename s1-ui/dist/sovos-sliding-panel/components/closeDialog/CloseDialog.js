"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNameHelpers = _interopRequireDefault(require("../../../utils/classNameHelpers"));

var _SovosConfirmationDialog = _interopRequireDefault(require("../../../sovos-confirmation-dialog/SovosConfirmationDialog"));

var _SovosDialogTitle = _interopRequireDefault(require("../../../sovos-dialog/components/SovosDialogTitle"));

var _SovosDialogContent = _interopRequireDefault(require("../../../sovos-dialog/components/SovosDialogContent"));

var _SovosDialogActions = _interopRequireDefault(require("../../../sovos-dialog/components/SovosDialogActions"));

var _sovosFlatButton = _interopRequireDefault(require("../../../sovos-flat-button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CloseDialog = function CloseDialog(_ref) {
  var open = _ref.open,
      DialogTitleProps = _ref.DialogTitleProps,
      DialogContentProps = _ref.DialogContentProps,
      DialogActionProps = _ref.DialogActionProps,
      OKButtonProps = _ref.OKButtonProps,
      CancelButtonProps = _ref.CancelButtonProps;
  var actions = [_react.default.createElement(_sovosFlatButton.default, _extends({
    color: "secondary",
    key: "cancel-button"
  }, (0, _classNameHelpers.default)(CancelButtonProps, 'sovosSlidingPanelCloseDialog__cancelButton'))), _react.default.createElement(_sovosFlatButton.default, _extends({
    color: "primary",
    key: "action-button"
  }, (0, _classNameHelpers.default)(OKButtonProps, 'sovosSlidingPanelCloseDialog__okButton')))];
  return _react.default.createElement(_SovosConfirmationDialog.default, {
    className: "sovosSlidingPanelCloseDialog",
    open: open,
    width: "small"
  }, _react.default.createElement(_SovosDialogTitle.default, (0, _classNameHelpers.default)(DialogTitleProps, 'sovosSlidingPanelCloseDialog__title')), _react.default.createElement(_SovosDialogContent.default, (0, _classNameHelpers.default)(DialogContentProps, 'sovosSlidingPanelCloseDialog__content')), _react.default.createElement(_SovosDialogActions.default, (0, _classNameHelpers.default)(DialogActionProps, 'sovosSlidingPanelCloseDialog__actions'), actions));
};

CloseDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  open: _propTypes.default.bool.isRequired,
  DialogTitleProps: _propTypes.default.shape({
    className: _propTypes.default.string,
    children: _propTypes.default.node.isRequired
  }).isRequired,
  DialogContentProps: _propTypes.default.shape({
    className: _propTypes.default.string,
    children: _propTypes.default.node.isRequired
  }).isRequired,
  DialogActionProps: _propTypes.default.shape({
    className: _propTypes.default.string
  }),
  OKButtonProps: _propTypes.default.shape({
    children: _propTypes.default.node.isRequired,
    onClick: _propTypes.default.func.isRequired
  }).isRequired,
  CancelButtonProps: _propTypes.default.shape({
    children: _propTypes.default.node.isRequired,
    onClick: _propTypes.default.func.isRequired
  }).isRequired
} : {};
CloseDialog.defaultProps = {
  DialogActionProps: {}
};
var _default = CloseDialog;
exports.default = _default;