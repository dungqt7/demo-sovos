"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _styles = require("@material-ui/core/styles");

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    display: 'flex',
    backgroundColor: _sovosColors.neutralWhite,
    height: 50,
    minHeight: 50,
    width: '100%',
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    boxShadow: "0 2px 2px ".concat(_sovosColors.borderColorWhite)
  }
};

var SovosToolbar = function SovosToolbar(_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["classes", "children", "className"]);

  return _react.default.createElement(_Toolbar.default, _extends({}, props, {
    className: (0, _classnames.default)('sovosToolbar', className),
    classes: {
      regular: classes.root
    }
  }), children);
};

SovosToolbar.propTypes = process.env.NODE_ENV !== "production" ? _objectSpread({}, _Toolbar.default.propTypes, {
  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired
}) : {};
SovosToolbar.displayName = 'Toolbar';

var _default = (0, _styles.withStyles)(styles)(SovosToolbar);

exports.default = _default;