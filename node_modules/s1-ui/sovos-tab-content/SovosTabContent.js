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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    whiteSpace: 'nowrap'
  }
};

var SovosTabContent = function SovosTabContent(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      classes = _ref.classes,
      className = _ref.className,
      style = _ref.style;

  var templateStyle = _objectSpread({}, style);

  if (!selected) {
    templateStyle.height = 0;
    templateStyle.overflow = 'hidden';
  }

  return _react.default.createElement("div", {
    style: templateStyle,
    className: (0, _classnames.default)('sovosTabContent', classes.root, className)
  }, children);
};

SovosTabContent.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,
  selected: _propTypes.default.bool.isRequired,
  TabProps: _propTypes.default.shape({
    // eslint-disable-line
    label: _propTypes.default.string
  }).isRequired,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  style: _propTypes.default.object
} : {};
SovosTabContent.defaultProps = {
  className: undefined,
  style: undefined
};

var _default = (0, _styles.withStyles)(styles)(SovosTabContent);

exports.default = _default;