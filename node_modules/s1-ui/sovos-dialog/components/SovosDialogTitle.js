"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _sovosColors = require("../../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    padding: '0 0 20px 0'
  },
  title: {
    fontSize: 20,
    color: (0, _colorManipulator.fade)(_sovosColors.black, 0.9),
    fontWeight: 500,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: 0
  }
};
/**
 * Default value for a title if not specified
 */

var DEFAULT_TITLE = 'Title';
/**
 * `SovosDialogTitle` is a component to be used inside `SovosDialog` to set up a dialog title.
 */

var SovosDialogTitle = function SovosDialogTitle(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "classes", "className"]);

  return _react.default.createElement(_DialogTitle.default, _extends({}, props, {
    classes: {
      root: classes.root
    },
    className: (0, _classnames.default)('sovosDialogTitle', className),
    disableTypography: true
  }), _react.default.createElement("h2", {
    className: classes.title
  }, children));
};
/* eslint-disable react/no-unused-prop-types */


SovosDialogTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The contents of the component, must be a string.
   */
  children: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string
} : {};
SovosDialogTitle.defaultProps = {
  children: DEFAULT_TITLE,
  className: undefined
};

var _default = (0, _styles.withStyles)(styles)(SovosDialogTitle);

exports.default = _default;