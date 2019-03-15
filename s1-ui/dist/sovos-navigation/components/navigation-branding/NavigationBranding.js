"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _sovosbranding = _interopRequireDefault(require("../../assets/sovosbranding.png"));

var _sovosColors = require("../../../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  open: {
    height: 78,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 22,
    textAlign: 'left',
    backgroundColor: _sovosColors.primaryNavy
  },
  collapsed: {
    height: 0,
    textAlign: 'left'
  },
  logo: {
    height: 38,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100px 30px'
  },
  productName: {
    color: _sovosColors.blueMedium,
    fontSize: 14
  }
};

var NavigationBranding = function NavigationBranding(_ref) {
  var collapsed = _ref.collapsed,
      classes = _ref.classes,
      productName = _ref.productName;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('sovosNavigationBranding', collapsed ? classes.collapsed : classes.open)
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)('sovosNavigationBranding__logo', classes.logo),
    style: {
      backgroundImage: "url(".concat(_sovosbranding.default, ")")
    }
  }), _react.default.createElement("span", {
    className: (0, _classnames.default)('sovosNavigationBranding__productName', classes.productName)
  }, productName));
};

NavigationBranding.defaultProps = {
  collapsed: false
};
NavigationBranding.propTypes = process.env.NODE_ENV !== "production" ? {
  classes: _propTypes.default.object.isRequired,
  productName: _propTypes.default.string.isRequired,
  collapsed: _propTypes.default.bool
} : {};

var _default = (0, _styles.withStyles)(styles)(NavigationBranding);

exports.default = _default;