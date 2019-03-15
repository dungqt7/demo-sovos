"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _SovosToolbarGroup = _interopRequireDefault(require("./SovosToolbarGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: '0 1 auto'
  }
};
/**
 * *SovosToolbarToggles* wrapper element for SovosToolbarToggle
 *
 * Props from Material-UI SovosToolbarGroup
 */

var SovosToolbarToggles = function SovosToolbarToggles(props) {
  return _react.default.createElement(_SovosToolbarGroup.default, props);
};

SovosToolbarToggles.propTypes = process.env.NODE_ENV !== "production" ? _objectSpread({}, _SovosToolbarGroup.default.propTypes) : {};

var _default = (0, _styles.withStyles)(styles)(SovosToolbarToggles);

exports.default = _default;