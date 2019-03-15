"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _Fade = _interopRequireDefault(require("@material-ui/core/Fade"));

var _width = require("../helper/width");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    minHeight: '100%'
  },
  mask: {
    position: 'fixed',
    top: 0,
    right: 0,
    minHeight: '100%',
    background: 'rgba(0, 0, 0, 0.5)'
  }
};

var OverlayLayer = function OverlayLayer(_ref) {
  var open = _ref.open,
      onClick = _ref.onClick,
      transitionDuration = _ref.transitionDuration,
      zIndex = _ref.zIndex,
      order = _ref.order,
      baseWidth = _ref.baseWidth,
      classes = _ref.classes,
      other = _objectWithoutProperties(_ref, ["open", "onClick", "transitionDuration", "zIndex", "order", "baseWidth", "classes"]);

  var rootStyle = {
    zIndex: zIndex
  };
  var maskStyle = {
    width: order === 0 ? '100%' : (0, _width.getOverlayWidth)(order, baseWidth)
  };
  return _react.default.createElement(_Fade.default, _extends({
    appear: true,
    in: open,
    timeout: transitionDuration
  }, other), _react.default.createElement("div", {
    onClick: onClick,
    className: (0, _classnames.default)('sovosSlidingPanelOverlay', classes.root),
    style: rootStyle
  }, _react.default.createElement("div", {
    className: classes.mask,
    onClick: onClick,
    style: maskStyle
  })));
};

OverlayLayer.propTypes = process.env.NODE_ENV !== "production" ? {
  open: _propTypes.default.bool.isRequired,
  onClick: _propTypes.default.func.isRequired,
  transitionDuration: _propTypes.default.number.isRequired,
  zIndex: _propTypes.default.number.isRequired,
  order: _propTypes.default.number.isRequired,
  baseWidth: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired
} : {};
OverlayLayer.defaultProps = {
  baseWidth: undefined
};

var _default = (0, _styles.withStyles)(styles)(OverlayLayer);

exports.default = _default;