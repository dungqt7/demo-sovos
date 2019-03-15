"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    backgroundColor: _sovosColors.grayLight
  }
};

var SovosSettings = function SovosSettings(_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      className = _ref.className,
      style = _ref.style;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('sovosSettings', className, classes.root),
    style: style
  }, children);
};

SovosSettings.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A collection of SovosSettingsSection subcomponents
   */
  children: _propTypes.default.node.isRequired,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  style: _propTypes.default.object
} : {};
SovosSettings.defaultProps = {
  className: undefined,
  style: undefined
};
SovosSettings.displayName = 'Settings';

var _default = (0, _styles.withStyles)(styles)(SovosSettings);

exports.default = _default;