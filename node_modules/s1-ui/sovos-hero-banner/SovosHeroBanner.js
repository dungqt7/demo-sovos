"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _hero_bg = _interopRequireDefault(require("./assets/img/hero_bg.png"));

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: {
    backgroundImage: _hero_bg.default,
    backgroundColor: _sovosColors.blueDark,
    padding: '1rem 30px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 150,
    justifyContent: 'center'
  },
  title: {
    color: _sovosColors.neutralWhite,
    fontSize: '32px',
    fontWeight: '100',
    margin: '.5rem 0'
  },
  subtitles: {
    color: _sovosColors.neutralWhite,
    fontSize: '18px',
    fontWeight: '300',
    margin: '.25rem 0'
  }
};

var SovosHeroBanner = function SovosHeroBanner(_ref) {
  var classes = _ref.classes,
      title = _ref.title,
      subtitle = _ref.subtitle,
      subtitle2 = _ref.subtitle2,
      parentPadding = _ref.parentPadding,
      style = _ref.style,
      textStyle = _ref.textStyle,
      className = _ref.className;

  var bannerStyle = _objectSpread({}, style);

  if (parentPadding) {
    var top = -parentPadding.top || 0;
    var right = -parentPadding.right || 0;
    var bottom = -parentPadding.bottom || 0;
    var left = -parentPadding.left || 0;
    bannerStyle.margin = "".concat(top, "px ").concat(right, "px ").concat(bottom, "px ").concat(left, "px");
  }

  return _react.default.createElement("div", {
    className: (0, _classnames.default)('sovosHeroBanner', classes.root, className),
    style: bannerStyle
  }, _react.default.createElement("span", {
    className: (0, _classnames.default)('sovosHeroBanner__title', classes.title),
    style: textStyle
  }, title), subtitle ? _react.default.createElement("span", {
    className: (0, _classnames.default)('sovosHeroBanner__subtitle', classes.subtitles),
    style: textStyle
  }, subtitle) : null, subtitle2 ? _react.default.createElement("span", {
    className: (0, _classnames.default)('sovosHeroBanner__subtitle2', classes.subtitles),
    style: textStyle
  }, subtitle2) : null);
};

SovosHeroBanner.propTypes = process.env.NODE_ENV !== "production" ? {
  parentPadding: _propTypes.default.shape({
    top: _propTypes.default.number,
    right: _propTypes.default.number,
    bottom: _propTypes.default.number,
    left: _propTypes.default.number
  }),
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  subtitle2: _propTypes.default.string,
  style: _propTypes.default.object,
  textStyle: _propTypes.default.object,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string
} : {};
SovosHeroBanner.defaultProps = {
  parentPadding: undefined,
  title: '',
  subtitle: '',
  subtitle2: '',
  style: {},
  textStyle: {},
  className: undefined
};
SovosHeroBanner.displayName = 'HeroBanner';

var _default = (0, _styles.withStyles)(styles, {
  name: 'SovosHeroBanner'
})(SovosHeroBanner);

exports.default = _default;