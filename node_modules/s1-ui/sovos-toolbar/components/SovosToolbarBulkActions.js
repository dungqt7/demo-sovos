"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _styles = require("@material-ui/core/styles");

var _SovosToolbarGroup = _interopRequireDefault(require("./SovosToolbarGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getGradientSpec = function getGradientSpec(backgroundColor) {
  return ["".concat((0, _colorManipulator.darken)(backgroundColor, 0.5), " 0"), "".concat((0, _colorManipulator.darken)(backgroundColor, 0.2), " 4px"), "".concat(backgroundColor, " 12px")].join(', ');
};

var getStyles = function getStyles(theme) {
  return {
    root: {
      background: "linear-gradient(to left, ".concat(getGradientSpec(theme.palette.secondary.main), ")"),
      borderTopLeftRadius: 4,
      paddingLeft: 0,
      flex: '0 0 auto'
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 10px 0 15px',
      transition: 'margin-left 400ms ease-in-out'
    },
    label: {
      color: theme.palette.secondary.contrastText,
      fontSize: 13,
      fontStyle: 'italic',
      whiteSpace: 'nowrap',
      marginRight: 15
    }
  };
};
/**
 * *SovosToolbarBulkActions* is a hidden container that slides out from the left if one or several rows are selected and slides back in if everything is deselected. Therefore, bulk actions only display if at least one row is selected.
 *
 * Props from Material-UI SovosToolbarGroup
 */


var SovosToolbarBulkActions = function SovosToolbarBulkActions(_ref) {
  var count = _ref.count,
      children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["count", "children", "classes", "className"]);

  return _react.default.createElement(_SovosToolbarGroup.default, _extends({}, props, {
    classes: {
      root: classes.root
    },
    className: (0, _classnames.default)('sovosToolbarBulkActions', className)
  }), _react.default.createElement("div", {
    className: classes.wrapper,
    style: {
      marginLeft: count > 0 ? 0 : -300
    }
  }, _react.default.createElement("span", {
    className: classes.label
  }, "".concat(count, " selected")), children));
};

SovosToolbarBulkActions.propTypes = process.env.NODE_ENV !== "production" ? _objectSpread({}, _SovosToolbarGroup.default.propTypes, {
  /** Actions that can be specified. */
  children: _propTypes.default.node,

  /** Number of selected items.  */
  count: _propTypes.default.number.isRequired,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string
}) : {};
SovosToolbarBulkActions.defaultProps = {
  children: null,
  className: undefined
};

var _default = (0, _styles.withStyles)(getStyles)(SovosToolbarBulkActions);

exports.default = _default;