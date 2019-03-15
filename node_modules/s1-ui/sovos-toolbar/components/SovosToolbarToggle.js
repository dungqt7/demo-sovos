"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getStyles = function getStyles(theme) {
  return {
    root: {
      height: 30,
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 10,
      cursor: 'pointer',
      backgroundColor: theme.palette.neutralColors.light,
      '&:hover': {
        boxShadow: '0px 1px 6px !important'
      },
      '&.selected': {
        backgroundColor: theme.palette.secondary.main,
        '& $label': {
          color: theme.palette.secondary.contrastText
        }
      }
    },
    label: {
      lineHeight: '30px',
      paddingLeft: 10,
      paddingRight: 10,
      fontWeight: 'normal',
      fontSize: 13,
      color: theme.palette.text.disabled
    }
  };
};
/**
 * *SovosToolbarDropdown* can be 1 or several dropdowns that are specified by the product.
 * Clicking on the container should open a Material UI dropdown menu. The list of the menu will be passed by the product.
 * If title is visible, these should display to the right of the title.
 *
 * Props from Material-UI Chip
 */


var SovosToolbarToggle = function SovosToolbarToggle(_ref) {
  var selected = _ref.selected,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["selected", "children", "className"]);

  return _react.default.createElement(_Chip.default, _extends({
    className: (0, _classnames.default)('sovosToolbarToggle', {
      selected: selected
    })
  }, props, {
    label: children
  }));
};

SovosToolbarToggle.propTypes = process.env.NODE_ENV !== "production" ? {
  /** material-ui/MenuItem that can be specified. */
  children: _propTypes.default.node.isRequired,

  /** true if element state is on. */
  selected: _propTypes.default.bool,
  className: _propTypes.default.string
} : {};
SovosToolbarToggle.defaultProps = {
  selected: false,
  className: undefined
};

var _default = (0, _styles.withStyles)(getStyles)(SovosToolbarToggle);

exports.default = _default;