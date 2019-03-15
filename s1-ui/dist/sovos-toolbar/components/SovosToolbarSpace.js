"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _SovosToolbarGroup = _interopRequireDefault(require("./SovosToolbarGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    minWidth: 0,
    flex: '1 1 auto'
  }
};
/**
 * *SovosToolbarSpace* empty element. You can use it to split left and right align components when there is no title
 *
 * Props from Material-UI ToolbarTitle
 */

var SovosToolbarSpace = function SovosToolbarSpace(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(_SovosToolbarGroup.default, props, children);
};

SovosToolbarSpace.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node
} : {};
SovosToolbarSpace.defaultProps = {
  children: undefined
};

var _default = (0, _styles.withStyles)(styles)(SovosToolbarSpace);

exports.default = _default;