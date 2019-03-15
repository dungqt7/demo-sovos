"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _sovosColors = require("../../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    fontSize: 20,
    color: (0, _colorManipulator.fade)(_sovosColors.black, 0.8),
    paddingTop: 20,
    paddingBottom: 10
  }
};
/**
 * *SovosSettingsTitle* name of the settings title
 *
 */

var SovosSettingsTitle = function SovosSettingsTitle(_ref) {
  var classes = _ref.classes,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('sovosSettingsTitle', classes.root)
  }, children);
};

SovosSettingsTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosSettingsTitle);

exports.default = _default;