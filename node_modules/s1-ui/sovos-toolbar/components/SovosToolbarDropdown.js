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

var _sovosSelect = _interopRequireDefault(require("../../sovos-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getStyles = function getStyles(theme) {
  return {
    root: {
      marginRight: 0,
      paddingLeft: 16,
      color: theme.palette.secondary.main
    },
    icon: {
      color: theme.palette.secondary.main
    }
  };
};
/**
 * *SovosToolbarDropdown* can be 1 or several dropdowns that are specified by the product.
 * Clicking on the container should open a Material UI dropdown menu. The list of the menu will be passed by the product.
 * If title is visible, these should display to the right of the title.
 *
 * Props from Material-UI DropDownMenu
 */


var SovosToolbarDropdown = function SovosToolbarDropdown(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["classes", "className"]);

  return _react.default.createElement(_SovosToolbarGroup.default, {
    className: (0, _classnames.default)('sovosToolbarDropdown', className)
  }, _react.default.createElement(_sovosSelect.default, _extends({}, props, {
    autoWidth: true,
    MenuProps: {
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left'
      }
    },
    disableUnderline: true,
    classes: classes,
    className: "sovosToolbarDropdown__select"
  })));
};

SovosToolbarDropdown.propTypes = process.env.NODE_ENV !== "production" ? {
  /** material-ui/MenuItem that can be specified. */
  children: _propTypes.default.node.isRequired,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string
} : {};
SovosToolbarDropdown.defaultProps = {
  className: undefined
};

var _default = (0, _styles.withStyles)(getStyles)(SovosToolbarDropdown);

exports.default = _default;