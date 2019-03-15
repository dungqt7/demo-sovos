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

var styles = {
  root: {
    paddingRight: 5,
    flexGrow: 1
  }
};

function truncateText(name, maxLength) {
  name = name || '';

  if (name.length > maxLength) {
    return "".concat(name.substring(0, maxLength), "...");
  }

  return name;
}

var SovosTreeListText = function SovosTreeListText(_ref) {
  var maxLength = _ref.maxLength,
      primary = _ref.primary,
      classes = _ref.classes,
      className = _ref.className,
      style = _ref.style;
  return _react.default.createElement("span", {
    className: (0, _classnames.default)('sovosTreeListText', classes.root, className),
    title: primary.length > maxLength ? primary : null,
    style: style
  }, truncateText(primary, maxLength));
};

SovosTreeListText.propTypes = process.env.NODE_ENV !== "production" ? {
  maxLength: _propTypes.default.number,
  primary: _propTypes.default.string.isRequired,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  style: _propTypes.default.object
} : {};
SovosTreeListText.defaultProps = {
  maxLength: 40,
  className: undefined,
  style: undefined
};

var _default = (0, _styles.withStyles)(styles)(SovosTreeListText);

exports.default = _default;