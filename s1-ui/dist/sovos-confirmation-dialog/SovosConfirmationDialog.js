"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _index = require("../sovos-dialog/index");

var _sovosFlatButton = _interopRequireDefault(require("../sovos-flat-button"));

var _reactHelpers = require("../utils/reactHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultTitle = 'Are you sure?';
var defaultContent = "A positive confirmation, like Transmit, should have 2 buttons:\nCancel (secondary button) and 'Positive action' (primary button).\nA negative confirmation, like Delete, should have 2 actions,\nCancel (primary button) and 'Negative action' in a red button.";
var defaultCancel = 'Cancel';
var defaultAction = 'Action';

var _ref =
/*#__PURE__*/
_react.default.createElement(_index.SovosDialogTitle, null, defaultTitle);

var getTitle = function getTitle(children) {
  return (0, _reactHelpers.findChildByType)(children, _index.SovosDialogTitle) || _ref;
};

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_index.SovosDialogContent, null, defaultContent);

var getContent = function getContent(children) {
  var childrenToKeep = (0, _reactHelpers.filterOutChildrenByType)(children, _index.SovosDialogTitle, _index.SovosDialogActions);

  if (childrenToKeep.length === 0) {
    return _ref2;
  }

  return childrenToKeep;
};

var getActions = function getActions(children, ActionButtonProps, CancelButtonProps, theme, negative) {
  // Return custom actions if specified
  var customActions = (0, _reactHelpers.findChildByType)(children, _index.SovosDialogActions);

  if (customActions) {
    return customActions;
  }

  var cancelButton = _react.default.createElement(_sovosFlatButton.default, {
    className: "sovosConfirmationDialog__cancelButton",
    color: negative ? 'primary' : 'secondary',
    onClick: CancelButtonProps.onClick,
    id: "cancel-button"
  }, CancelButtonProps.children || defaultCancel);

  var actionButton = _react.default.createElement(_sovosFlatButton.default, {
    className: "sovosConfirmationDialog__cancelButton",
    color: negative ? theme.palette.semanticColors.danger.dark : 'primary',
    onClick: ActionButtonProps.onClick,
    id: "action-button"
  }, ActionButtonProps.children || defaultAction);

  return _react.default.createElement(_index.SovosDialogActions, null, cancelButton, actionButton);
};

var SovosConfirmationDialog = function SovosConfirmationDialog(props) {
  var children = props.children,
      ActionButtonProps = props.ActionButtonProps,
      CancelButtonProps = props.CancelButtonProps,
      theme = props.theme,
      negative = props.negative,
      className = props.className,
      dialogProps = _objectWithoutProperties(props, ["children", "ActionButtonProps", "CancelButtonProps", "theme", "negative", "className"]);

  return _react.default.createElement(_index.SovosDialog, _extends({
    className: (0, _classnames.default)('sovosConfirmationDialog', className)
  }, dialogProps, {
    width: "small"
  }), getTitle(children), getContent(children), getActions(children, ActionButtonProps, CancelButtonProps, theme, negative));
};

SovosConfirmationDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * False if the confirmation dialog represents a "negative" action (like delete), otherwise true.
   * Negative dialogs have different default action button colors.
   */
  negative: _propTypes.default.bool,
  ActionButtonProps: _propTypes.default.shape({
    children: _propTypes.default.node,
    onClick: _propTypes.default.func
  }),
  CancelButtonProps: _propTypes.default.shape({
    children: _propTypes.default.node,
    onClick: _propTypes.default.func
  }),
  className: _propTypes.default.string,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired
} : {};
SovosConfirmationDialog.defaultProps = {
  ActionButtonProps: {
    children: defaultAction,
    onClick: undefined
  },
  CancelButtonProps: {
    children: defaultCancel,
    onClick: undefined
  },
  className: undefined,
  negative: false
};
SovosConfirmationDialog.displayName = 'ConfirmationDialog';

var _default = (0, _styles.withTheme)()(SovosConfirmationDialog);

exports.default = _default;