"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _sovosColors = require("../themes/sovos-colors");

var _materialUiHelpers = require("../utils/materialUiHelpers");

var _Button = _interopRequireDefault(require("../internals/button/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {},
  label: {},
  disabled: {},
  containedPrimary: {
    color: _sovosColors.neutralWhite,
    backgroundColor: _sovosColors.buttonBlue,
    '&:hover': {
      backgroundColor: (0, _colorManipulator.lighten)(_sovosColors.buttonBlue, 0.1)
    },
    '&$disabled': {
      color: (0, _colorManipulator.lighten)(_sovosColors.buttonBlue, 0.9),
      backgroundColor: (0, _colorManipulator.lighten)(_sovosColors.buttonBlue, 0.75)
    }
  },
  containedSecondary: {
    color: _sovosColors.buttonBlue,
    backgroundColor: _sovosColors.neutralWhite,
    '&:hover': {
      backgroundColor: (0, _colorManipulator.fade)(_sovosColors.buttonBlue, 0.1)
    },
    '&$disabled': {
      color: (0, _colorManipulator.lighten)(_sovosColors.buttonBlue, 0.7),
      backgroundColor: (0, _colorManipulator.lighten)(_sovosColors.black, 0.95)
    }
  }
};

var SovosRaisedButton = function SovosRaisedButton(_ref) {
  var color = _ref.color,
      className = _ref.className,
      backgroundColor = _ref.backgroundColor,
      buttonProps = _objectWithoutProperties(_ref, ["color", "className", "backgroundColor"]);

  var variantTheme;

  if (!(0, _materialUiHelpers.isKnownMaterialUiColor)(color)) {
    variantTheme = {
      contained: {
        color: color,
        backgroundColor: backgroundColor,
        '&:hover': {
          backgroundColor: (0, _colorManipulator.lighten)(backgroundColor, 0.1)
        },
        '&$disabled': {
          color: (0, _colorManipulator.lighten)(color, 0.8),
          backgroundColor: (0, _colorManipulator.lighten)(backgroundColor, 0.75)
        }
      }
    };
  }

  return _react.default.createElement(_Button.default, _extends({}, buttonProps, {
    color: color,
    className: (0, _classnames.default)('sovosRaisedButton', className),
    variant: "contained",
    variantTheme: variantTheme
  }));
};

SovosRaisedButton.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  backgroundColor: _propTypes.default.string,
  className: _propTypes.default.string
} : {};
SovosRaisedButton.defaultProps = {
  color: 'primary',
  backgroundColor: _sovosColors.buttonBlue,
  className: undefined
};
SovosRaisedButton.displayName = 'RaisedButton';

var _default = (0, _styles.withStyles)(styles)(SovosRaisedButton);

exports.default = _default;