"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _styles = require("@material-ui/core/styles");

var _SovosFlatButton = _interopRequireDefault(require("../../sovos-flat-button/SovosFlatButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    margin: '10px 0 0 0'
  }
};
/**
 * Default value for actions if not specified
 */

var DEFAULT_ACTIONS = [_react.default.createElement(_SovosFlatButton.default, {
  color: "secondary"
}, "Cancel"), _react.default.createElement(_SovosFlatButton.default, {
  color: "primary"
}, "Action")];
/**
 * `SovosDialogActions` is a component to be used inside `SovosDialog` to set up a dialog actions.
 */

var SovosDialogActions = function SovosDialogActions(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return _react.default.createElement(_DialogActions.default, _extends({}, props, {
    className: (0, _classnames.default)('sovosDialogActions', className)
  }));
};
/* eslint-disable react/no-unused-prop-types */


SovosDialogActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The contents of the component, must be one or more SovosFlatButtons.
   */
  children: _propTypes.default.node,
  className: _propTypes.default.string
} : {};
SovosDialogActions.defaultProps = {
  children: DEFAULT_ACTIONS,
  className: undefined
};

var _default = (0, _styles.withStyles)(styles)(SovosDialogActions);

exports.default = _default;