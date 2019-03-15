"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _materialUiHelpers = require("../../utils/materialUiHelpers");

var _sovosEnterprise = _interopRequireDefault(require("../../themes/sovos-enterprise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    maxHeight: 30,
    minHeight: 30,
    padding: '4px 16px',
    minWidth: 80,
    borderRadius: 2
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0.5
  },
  containedPrimary: {},
  containedSecondary: {},
  textPrimary: {},
  textSecondary: {},
  disabled: {}
};

var Button = function Button(_ref) {
  var color = _ref.color,
      variantTheme = _ref.variantTheme,
      otherProps = _objectWithoutProperties(_ref, ["color", "variantTheme"]);

  if ((0, _materialUiHelpers.isKnownMaterialUiColor)(color)) {
    return _react.default.createElement(_Button.default, _extends({}, otherProps, {
      color: color
    }));
  }

  return _react.default.createElement(_styles.MuiThemeProvider, {
    theme: (0, _styles.createMuiTheme)(_objectSpread({}, _sovosEnterprise.default, {
      overrides: {
        MuiButton: _objectSpread({
          disabled: {}
        }, variantTheme)
      }
    }))
  }, _react.default.createElement(_Button.default, otherProps));
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired,
  variantTheme: _propTypes.default.object
} : {};
Button.defaultProps = {
  color: 'primary',
  variantTheme: {}
};
Button.displayName = 'Button';

var _default = (0, _styles.withStyles)(styles)(Button);

exports.default = _default;