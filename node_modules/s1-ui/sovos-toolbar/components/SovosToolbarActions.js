"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _SovosToolbarGroup = _interopRequireDefault(require("./SovosToolbarGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: '0 1 auto',
    marginLeft: 'auto'
  }
};
/**
 * *SovosToolbarActions* element is optional - It consists of 1 or more icon buttons. If no icon buttons are sent over, then do not display the container
 *
 * Props from Material-UI SovosToolbarGroup
 */

var SovosToolbarActions = function SovosToolbarActions(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "classes", "className"]);

  return _react.default.createElement(_SovosToolbarGroup.default, _extends({}, props, {
    classes: {
      root: classes.root
    },
    className: (0, _classnames.default)('sovosToolbarActions', className)
  }), children);
};

SovosToolbarActions.propTypes = process.env.NODE_ENV !== "production" ? _objectSpread({}, _SovosToolbarGroup.default.propTypes, {
  /** Actions that can be specified. */
  children: _propTypes.default.node.isRequired,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string
}) : {};
SovosToolbarActions.defaultProps = {
  className: undefined
};

var _default = (0, _styles.withStyles)(styles)(SovosToolbarActions);

exports.default = _default;