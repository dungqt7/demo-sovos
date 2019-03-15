"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getStyles = function getStyles(theme) {
  return {
    root: {
      alignItems: 'center',
      borderLeft: "1px solid ".concat(theme.palette.neutralColors.light),
      display: 'flex',
      flex: '1 1 auto',
      justifyContent: 'space-between',
      paddingLeft: 0,
      position: 'relative',
      height: '100%',
      '&:first-child': {
        borderLeft: 'none'
      }
    }
  };
};
/**
 * *SovosToolbarContainer* wraps elements of specific type. Can have left border if it's not first. For internal use only
 *
 * Props from Material-UI ToolbarGroup
 */


var SovosToolbarGroup = function SovosToolbarGroup(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "classes", "className"]);

  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)('sovosToolbarGroup', className, classes.root)
  }, props), children);
};

SovosToolbarGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Children that can be specified here. */
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired
} : {};
SovosToolbarGroup.defaultProps = {
  children: undefined,
  className: undefined
};

var _default = (0, _styles.withStyles)(getStyles)(SovosToolbarGroup);

exports.default = _default;