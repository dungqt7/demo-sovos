"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: {
    backgroundColor: _sovosColors.grayLight,
    color: _sovosColors.textColorSubtle,
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: 1,
    display: 'inline-flex'
  }
};
var sizes = {
  large: {
    height: 32,
    width: 32,
    lineHeight: '32px'
  },
  medium: {
    height: 26,
    width: 26,
    lineHeight: '26px'
  },
  small: {
    height: 20,
    width: 20,
    lineHeight: '20px'
  }
};

var SovosAvatar = function SovosAvatar(_ref) {
  var name = _ref.name,
      surname = _ref.surname,
      size = _ref.size,
      backgroundColor = _ref.backgroundColor,
      color = _ref.color,
      style = _ref.style,
      classes = _ref.classes,
      className = _ref.className;
  var sizeKey = size.toLowerCase();

  var avatarStyles = _objectSpread({}, style, sizes[sizeKey]);

  if (color) {
    avatarStyles.color = color;
  }

  if (backgroundColor) {
    avatarStyles.backgroundColor = backgroundColor;
  }

  return _react.default.createElement(_Tooltip.default, {
    title: name ? "".concat(name, " ").concat(surname) : 'Unassigned'
  }, _react.default.createElement(_Avatar.default, {
    className: (0, _classnames.default)('sovosAvatar', className),
    classes: {
      root: classes.root
    },
    style: avatarStyles
  }, name ? name[0].toUpperCase() + surname[0].toUpperCase() : '?'));
};

SovosAvatar.propTypes = process.env.NODE_ENV !== "production" ? {
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  name: _propTypes.default.string,
  surname: _propTypes.default.string,
  backgroundColor: _propTypes.default.string,
  color: _propTypes.default.string,
  style: _propTypes.default.object,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string
} : {};
SovosAvatar.defaultProps = {
  size: 'medium',
  name: undefined,
  surname: undefined,
  backgroundColor: undefined,
  color: undefined,
  style: {},
  className: undefined
};
SovosAvatar.displayName = 'Avatar';

var _default = (0, _styles.withStyles)(styles)(SovosAvatar);

exports.default = _default;