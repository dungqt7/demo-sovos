"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _styles = require("@material-ui/core/styles");

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  underline: {
    '&:after': {
      borderBottom: "2px solid ".concat(_sovosColors.purple)
    },
    '&:hover:not($disabled):not($focused):not($error):before': {
      borderBottom: "2px solid ".concat(_sovosColors.purple)
    }
  },
  disabled: {},
  focused: {},
  error: {}
};

var SovosTextField = function SovosTextField(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      InputProps = _ref.InputProps,
      textFieldProps = _objectWithoutProperties(_ref, ["classes", "className", "InputProps"]);

  var underline = classes.underline,
      disabled = classes.disabled,
      focused = classes.focused,
      error = classes.error,
      value = classes.value,
      textFieldClasses = _objectWithoutProperties(classes, ["underline", "disabled", "focused", "error", "value"]);

  return _react.default.createElement(_TextField.default, _extends({
    classes: textFieldClasses,
    className: (0, _classnames.default)('sovosTextField', className),
    InputProps: _objectSpread({}, InputProps, {
      classes: _objectSpread({}, InputProps.classes, {
        underline: underline,
        disabled: disabled,
        focused: focused,
        error: error
      })
    }),
    value: value
  }, textFieldProps));
};

SovosTextField.propTypes = process.env.NODE_ENV !== "production" ? {
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  InputProps: _propTypes.default.object,
  value: _propTypes.default.string
} : {};
SovosTextField.defaultProps = {
  className: undefined,
  InputProps: {},
  value: ''
};
SovosTextField.displayName = 'TextField';

var _default = (0, _styles.withStyles)(styles)(SovosTextField);

exports.default = _default;