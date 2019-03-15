"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _styles = require("@material-ui/core/styles");

var _sovosIconMenu = _interopRequireDefault(require("../../sovos-icon-menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  icon: {
    padding: 0,
    width: 24,
    height: 24
  }
};

var SovosToolbarMoreMenu = function SovosToolbarMoreMenu(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      color = _ref.color,
      theme = _ref.theme,
      MenuProps = _ref.MenuProps,
      IconButtonProps = _ref.IconButtonProps;
  return _react.default.createElement(_sovosIconMenu.default, {
    className: (0, _classnames.default)('sovosToolbarMoreMenu', className),
    MenuProps: MenuProps,
    IconButtonProps: _objectSpread({
      classes: {
        root: classes.icon
      }
    }, IconButtonProps),
    iconElement: _react.default.createElement(_MoreVert.default, {
      style: {
        color: color || theme.palette.secondary.main
      }
    })
  }, children);
};

SovosToolbarMoreMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,
  color: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  theme: _propTypes.default.object.isRequired,
  IconButtonProps: _propTypes.default.object,
  MenuProps: _propTypes.default.object
} : {};
SovosToolbarMoreMenu.defaultProps = {
  color: undefined,
  className: undefined,
  IconButtonProps: {},
  MenuProps: {}
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(SovosToolbarMoreMenu);

exports.default = _default;