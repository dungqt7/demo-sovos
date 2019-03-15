"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FilterList = _interopRequireDefault(require("@material-ui/icons/FilterList"));

var _styles = require("@material-ui/core/styles");

var _SovosIconButton = _interopRequireDefault(require("../../sovos-icon-button/SovosIconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_FilterList.default, null);

/**
 * Filter (opens the filter drawer)
 *
 * Props from the SovosIconButton
 */
var SovosToolbarFilter = function SovosToolbarFilter(_ref) {
  var className = _ref.className,
      color = _ref.color,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["className", "color", "theme"]);

  return _react.default.createElement(_SovosIconButton.default, _extends({}, props, {
    className: (0, _classnames.default)('sovosToolbarFilter__button', className),
    color: color || theme.palette.secondary.main
  }), _ref2);
};

SovosToolbarFilter.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  theme: _propTypes.default.object.isRequired
} : {};
SovosToolbarFilter.defaultProps = {
  className: undefined,
  TooltipProps: {
    title: 'Filters' // eslint-disable-line react/default-props-match-prop-types

  }
};

var _default = (0, _styles.withTheme)()(SovosToolbarFilter);

exports.default = _default;