"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sizes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    '&:hover': {
      backgroundColor: 'inherit'
    },
    borderRadius: '50%',
    padding: 0
  }
};
var sizes = {
  extraSmall: {
    button: {
      width: 24,
      height: 24
    },
    icon: {
      height: 16,
      width: 16
    }
  },
  small: {
    button: {
      width: 36,
      minWidth: 36,
      height: 36
    },
    icon: {
      height: 20,
      width: 20
    }
  },
  medium: {
    button: {
      width: 40,
      minWidth: 40,
      height: 40
    },
    icon: {
      height: 24,
      width: 24
    }
  },
  large: {
    button: {
      width: 40,
      minWidth: 40,
      height: 40
    },
    icon: {
      height: 28,
      width: 28
    }
  }
};
exports.sizes = sizes;

function renderIconButton(iconButtonProps) {
  var sizeKey = iconButtonProps.size,
      color = iconButtonProps.color,
      classes = iconButtonProps.classes,
      children = iconButtonProps.children,
      disabled = iconButtonProps.disabled,
      style = iconButtonProps.style,
      className = iconButtonProps.className,
      otherProps = _objectWithoutProperties(iconButtonProps, ["size", "color", "classes", "children", "disabled", "style", "className"]);

  var buttonStyles = _objectSpread({}, sizes[sizeKey].button, style);

  var iconStyle = _objectSpread({
    color: (0, _colorManipulator.fade)(color || _sovosColors.black, 0.87)
  }, sizes[sizeKey].icon);

  if (disabled) {
    iconStyle.color = (0, _colorManipulator.fade)(iconStyle.color, 0.15);
  }

  var icon = _react.default.Children.only(children);

  icon = _react.default.cloneElement(icon, {
    style: _objectSpread({}, iconStyle, icon.props.style)
  });
  return _react.default.createElement(_IconButton.default, _extends({}, otherProps, {
    classes: {
      root: classes.root
    },
    className: (0, _classnames.default)('sovosIconButton', className),
    disabled: disabled,
    disableRipple: true,
    style: buttonStyles
  }), icon);
}

var SovosIconButton = function SovosIconButton(_ref) {
  var TooltipProps = _ref.TooltipProps,
      otherProps = _objectWithoutProperties(_ref, ["TooltipProps"]);

  var iconButton = renderIconButton(otherProps);

  if (TooltipProps) {
    return _react.default.createElement(_Tooltip.default, TooltipProps, otherProps.disabled ? _react.default.createElement("div", null, iconButton) : iconButton);
  }

  return iconButton;
};

SovosIconButton.propTypes = process.env.NODE_ENV !== "production" ? _objectSpread({
  color: _propTypes.default.string,
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(['extraSmall', 'small', 'medium', 'large']),
  TooltipProps: _propTypes.default.object
}, _IconButton.default.propTypes) : {};
SovosIconButton.defaultProps = {
  color: undefined,
  className: undefined,
  size: 'medium',
  TooltipProps: undefined
};
SovosIconButton.displayName = 'IconButton';

var _default = (0, _styles.withStyles)(styles)(SovosIconButton);

exports.default = _default;