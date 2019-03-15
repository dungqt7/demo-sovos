"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _sovosColors = require("../../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    fontSize: 13,
    color: (0, _colorManipulator.fade)(_sovosColors.black, 0.5),
    padding: 0,
    fontWeight: 400,
    minHeight: 186,
    margin: 0,
    '&:first-child': {
      paddingTop: 0
    }
  }
};
/**
 * `SovosDialogContent` is a component to be used inside `SovosDialog` to set up a dialog body.
 */

var SovosDialogContent = function SovosDialogContent(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return _react.default.createElement(_DialogContent.default, _extends({}, props, {
    className: (0, _classnames.default)('SovosDialogContent', className)
  }));
};

SovosDialogContent.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string
} : {};
SovosDialogContent.defaultProps = {
  className: undefined
};

var _default = (0, _styles.withStyles)(styles)(SovosDialogContent);

exports.default = _default;