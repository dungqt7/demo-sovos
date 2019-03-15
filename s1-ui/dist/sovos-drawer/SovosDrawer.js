"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _SovosDrawerHeader = _interopRequireDefault(require("./components/SovosDrawerHeader"));

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var transitionsTimeout = 300;
var innerWidth = {
  small: 200,
  medium: 300,
  large: 400,
  extraLarge: 500
};

var SovosDrawer = function SovosDrawer(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose,
      open = _ref.open,
      size = _ref.size,
      className = _ref.className,
      style = _ref.style,
      headerProps = _objectWithoutProperties(_ref, ["children", "onClose", "open", "size", "className", "style"]);

  return _react.default.createElement(_Drawer.default, {
    anchor: "right",
    open: open,
    onClose: onClose,
    transitionDuration: transitionsTimeout,
    className: (0, _classnames.default)('sovosDrawer', className),
    PaperProps: {
      style: {
        boxShadow: "0 0 17px 6px ".concat(_sovosColors.boxShadow)
      }
    },
    style: style
  }, _react.default.createElement("div", {
    style: {
      width: innerWidth[size] + 20,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, _react.default.createElement(_SovosDrawerHeader.default, _extends({}, headerProps, {
    headerSize: innerWidth[size]
  })), _react.default.createElement("div", {
    style: {
      padding: 10,
      overflowY: 'auto',
      flex: '1 1 auto',
      minWidth: innerWidth[size]
    }
  }, children)));
};

SovosDrawer.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node,
  onClose: _propTypes.default.func.isRequired,
  open: _propTypes.default.bool.isRequired,
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'extraLarge']),
  title: _propTypes.default.string.isRequired,
  PrimaryButtonProps: _propTypes.default.shape({
    backgroundColor: _propTypes.default.string,
    children: _propTypes.default.node,
    color: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    onClick: _propTypes.default.func.isRequired,
    style: _propTypes.default.object,
    className: _propTypes.default.string
  }).isRequired,
  SecondaryButtonProps: _propTypes.default.shape({
    backgroundColor: _propTypes.default.string,
    children: _propTypes.default.node,
    color: _propTypes.default.string,
    disabled: _propTypes.default.bool,
    onClick: _propTypes.default.func.isRequired,
    style: _propTypes.default.object,
    className: _propTypes.default.string
  }).isRequired,
  className: _propTypes.default.string,
  style: _propTypes.default.object
} : {};
SovosDrawer.defaultProps = {
  children: undefined,
  size: 'small',
  className: undefined,
  style: undefined
};
SovosDrawer.displayName = 'Drawer';
var _default = SovosDrawer;
exports.default = _default;