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

var _SovosToolbarSpace = _interopRequireDefault(require("./SovosToolbarSpace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(theme) {
  return {
    root: {
      color: (0, _colorManipulator.fade)(theme.palette.text.primary, 0.9),
      fontSize: 18,
      lineHeight: 'auto',
      overflow: 'hidden',
      paddingLeft: 16,
      paddingRight: 16,
      position: 'relative',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  };
};
/**
 * *SovosToolbarTitle* element is optional
 *
 * Props from Material-UI ToolbarTitle
 */


var SovosToolbarTitle = function SovosToolbarTitle(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      children = _ref.children;
  return _react.default.createElement(_SovosToolbarSpace.default, {
    className: (0, _classnames.default)('sovosToolbarTitle', className)
  }, _react.default.createElement("span", {
    className: classes.root
  }, children));
};

SovosToolbarTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Title is optional and is a parameter that can be specified. */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string
} : {};
SovosToolbarTitle.defaultProps = {
  className: undefined
};

var _default = (0, _styles.withStyles)(getStyles)(SovosToolbarTitle);

exports.default = _default;