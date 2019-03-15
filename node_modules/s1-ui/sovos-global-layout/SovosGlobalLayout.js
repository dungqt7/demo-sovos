"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SovosGlobalLayout = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _styles = require("@material-ui/core/styles");

var _SovosNavigation = _interopRequireDefault(require("../sovos-navigation/SovosNavigation"));

var _SovosIconButton = _interopRequireDefault(require("../sovos-icon-button/SovosIconButton"));

var _navigationConstants = require("./constants/navigationConstants");

var _sovosColors = require("../themes/sovos-colors");

var _navigationContext = _interopRequireDefault(require("./navigationContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  navigationToggle: {
    height: 50,
    width: 50,
    flex: '0 0 50px'
  },
  overlayVisible: {
    zIndex: 2000,
    background: _sovosColors.textColorSubtle,
    position: 'fixed',
    left: 240,
    top: 0,
    bottom: 0,
    right: 0,
    transition: 'background 290ms, left 290ms ease-out'
  },
  overlayHidden: {
    clickable: false,
    zIndex: -1,
    background: 'rgba(0, 0, 0, 0.0)',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    transition: 'left 290ms ease-out'
  }
};

var _ref =
/*#__PURE__*/
_react.default.createElement(_Menu.default, null);

var SovosGlobalLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SovosGlobalLayout, _React$Component);

  function SovosGlobalLayout(props) {
    var _this;

    _classCallCheck(this, SovosGlobalLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SovosGlobalLayout).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleNavigation", function (collapsed) {
      _this.setState(function (state) {
        return {
          navigationCollapsed: typeof collapsed === 'boolean' ? !collapsed : !state.navigationCollapsed
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isSmallerThanBreakpoint", function () {
      return _this.props.window.innerWidth < _this.props.breakPoint;
    });

    _defineProperty(_assertThisInitialized(_this), "renderNavigationToggleButton", function () {
      if (_this.isSmallerThanBreakpoint()) {
        return _react.default.createElement(_SovosIconButton.default, {
          className: (0, _classnames.default)('sovosGlobalLayout__navigationButton', _this.props.classes.navigationToggle),
          onClick: _this.toggleNavigation
        }, _ref);
      }

      return undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "renderNavigation", function () {
      return _react.default.createElement(_SovosNavigation.default, _extends({}, _this.props.NavigationProps, {
        collapsed: _this.state.navigationCollapsed,
        onCollapseToggled: _this.toggleNavigation,
        hideDrawer: function hideDrawer() {
          return _this.isSmallerThanBreakpoint() && _this.toggleNavigation(false);
        }
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderOverlay", function () {
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosGlobalLayout__overlay', _this.isSmallerThanBreakpoint() && !_this.state.navigationCollapsed ? _this.props.classes.overlayVisible : _this.props.classes.overlayHidden),
        onClick: function onClick() {
          return _this.toggleNavigation(false);
        }
      });
    });

    var initialNavigationCollapsed = _this.props.initialNavigationCollapsed;
    _this.state = {
      navigationCollapsed: typeof initialNavigationCollapsed !== 'undefined' ? initialNavigationCollapsed : _this.isSmallerThanBreakpoint()
    };

    if (window.addEventListener) {
      window.addEventListener('resize', function () {
        var isSmallerThanBreakpoint = _this.isSmallerThanBreakpoint();

        if (isSmallerThanBreakpoint !== _this.state.navigationCollapsed) {
          _this.setState({
            navigationCollapsed: isSmallerThanBreakpoint
          });
        }
      });
    }

    return _this;
  }

  _createClass(SovosGlobalLayout, [{
    key: "render",
    value: function render() {
      var maxWidth = window.innerWidth - (this.isSmallerThanBreakpoint() ? _navigationConstants.navigationContainerOpenWidth : 0);
      return _react.default.createElement(_navigationContext.default.Provider, {
        value: {
          toggleButtonRender: this.renderNavigationToggleButton,
          maxWidth: maxWidth
        }
      }, _react.default.createElement("div", {
        className: "sovosGlobalLayout"
      }, _react.default.createElement("div", {
        style: {
          display: 'flex',
          width: this.props.width || '100vw'
        }
      }, this.renderNavigation(), _react.default.cloneElement(_react.default.Children.only(this.props.children), {
        navigationIcon: this.renderNavigationToggleButton(),
        maxWidth: maxWidth
      })), this.renderOverlay()));
    }
  }]);

  return SovosGlobalLayout;
}(_react.default.Component);

exports.SovosGlobalLayout = SovosGlobalLayout;

_defineProperty(SovosGlobalLayout, "defaultProps", {
  initialNavigationCollapsed: undefined,
  breakPoint: 960,
  width: undefined,
  window: window
});

_defineProperty(SovosGlobalLayout, "displayName", 'GlobalLayout');

SovosGlobalLayout.propTypes = process.env.NODE_ENV !== "production" ? {
  breakPoint: _propTypes.default.number,
  children: _propTypes.default.element.isRequired,
  initialNavigationCollapsed: _propTypes.default.bool,
  classes: _propTypes.default.object.isRequired,
  NavigationProps: _propTypes.default.shape({
    BrandingProps: _propTypes.default.shape({
      productName: _propTypes.default.string.isRequired,
      collapsed: _propTypes.default.bool
    }).isRequired,
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
    selectedContext: _propTypes.default.shape({
      name: _propTypes.default.string.isRequired,
      taxYear: _propTypes.default.string,
      type: _propTypes.default.oneOf(['production', 'test', 'default'])
    }).isRequired,
    setContext: _propTypes.default.func.isRequired
  }).isRequired,
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  window: _propTypes.default.object
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosGlobalLayout);

exports.default = _default;