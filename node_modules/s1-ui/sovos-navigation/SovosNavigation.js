"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnstyledSovosNavigation = exports.navigationClassName = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _NavigationBranding = _interopRequireDefault(require("./components/navigation-branding/NavigationBranding"));

var _NavigationLinks = _interopRequireDefault(require("./components/navigation-links/NavigationLinks"));

var _ContextSwitcher = _interopRequireDefault(require("./components/context-switcher/ContextSwitcher"));

var _NavigationFooter = _interopRequireDefault(require("./components/navigation-footer/NavigationFooter"));

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: {
    transition: 'width 290ms, min-width 290ms',
    flex: '240px',
    height: '100vh',
    backgroundColor: _sovosColors.primaryNavy,
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  hidden: {
    width: 0,
    minWidth: 0,
    zIndex: 1301,
    position: 'relative',
    flex: '0 0 0'
  },
  open: {
    width: 240,
    minWidth: 240
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: 240,
    height: '100%'
  }
};
var navigationClassName = 'sovosNavigation';
exports.navigationClassName = navigationClassName;

var UnstyledSovosNavigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UnstyledSovosNavigation, _React$Component);

  function UnstyledSovosNavigation(props) {
    var _this;

    _classCallCheck(this, UnstyledSovosNavigation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UnstyledSovosNavigation).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleSelectLink", function (key, action, expandMenu) {
      action();

      _this.setState({
        selectedLink: key
      });

      if (!expandMenu) {
        _this.props.hideDrawer();
      }
    });

    _this.state = {
      selectedLink: '' || props.initialSelectedLink
    };
    return _this;
  }

  _createClass(UnstyledSovosNavigation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          contexts = _this$props.contexts,
          selectedContext = _this$props.selectedContext,
          setContext = _this$props.setContext,
          collapsed = _this$props.collapsed,
          classes = _this$props.classes,
          FooterProps = _this$props.FooterProps,
          BrandingProps = _this$props.BrandingProps,
          links = _this$props.links;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(navigationClassName, classes.root, collapsed ? classes.hidden : classes.open)
      }, _react.default.createElement("div", {
        className: classes.content
      }, _react.default.createElement(_NavigationBranding.default, BrandingProps), contexts && contexts.length > 0 && _react.default.createElement(_ContextSwitcher.default, {
        collapsed: collapsed,
        contexts: contexts,
        selectedContext: selectedContext,
        setContext: setContext
      }), _react.default.createElement(_NavigationLinks.default, {
        links: links,
        selectedLink: this.state.selectedLink,
        onLinkClick: this.handleSelectLink,
        key: this.state.selectedLink
      }), _react.default.createElement(_NavigationFooter.default, FooterProps)));
    }
  }]);

  return UnstyledSovosNavigation;
}(_react.default.Component);

exports.UnstyledSovosNavigation = UnstyledSovosNavigation;

_defineProperty(UnstyledSovosNavigation, "defaultProps", {
  FooterProps: null
});

_defineProperty(UnstyledSovosNavigation, "displayName", 'Navigation');

UnstyledSovosNavigation.propTypes = process.env.NODE_ENV !== "production" ? {
  BrandingProps: _propTypes.default.shape({
    productName: _propTypes.default.string.isRequired,
    collapsed: _propTypes.default.bool
  }).isRequired,
  collapsed: _propTypes.default.bool.isRequired,
  contexts: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    taxYear: _propTypes.default.string,
    type: _propTypes.default.oneOf(['production', 'test', 'default']),
    nestedContexts: _propTypes.default.arrayOf(_propTypes.default.object)
  })).isRequired,
  FooterProps: _propTypes.default.shape({
    onHelpClicked: _propTypes.default.func,
    showSettingsButton: _propTypes.default.bool,
    showHelpButton: _propTypes.default.bool,
    settingsMenuItems: _propTypes.default.arrayOf(_propTypes.default.shape({
      label: _propTypes.default.string,
      action: _propTypes.default.func
    })),
    userName: _propTypes.default.string.isRequired,
    userMenuItems: _propTypes.default.arrayOf(_propTypes.default.shape({
      label: _propTypes.default.string,
      action: _propTypes.default.func
    })).isRequired
  }),
  hideDrawer: _propTypes.default.func.isRequired,
  initialSelectedLink: _propTypes.default.string.isRequired,
  links: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    icon: _propTypes.default.func.isRequired,
    action: _propTypes.default.func,
    nestedLinks: _propTypes.default.arrayOf(_propTypes.default.shape({
      label: _propTypes.default.string.isRequired,
      action: _propTypes.default.func.isRequired
    }))
  })).isRequired,
  classes: _propTypes.default.object.isRequired,
  selectedContext: _propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    taxYear: _propTypes.default.string,
    type: _propTypes.default.oneOf(['production', 'test', 'default'])
  }).isRequired,
  setContext: _propTypes.default.func.isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(UnstyledSovosNavigation);

exports.default = _default;