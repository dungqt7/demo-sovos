"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _AccountCircle = _interopRequireDefault(require("@material-ui/icons/AccountCircle"));

var _Settings = _interopRequireDefault(require("@material-ui/icons/Settings"));

var _Help = _interopRequireDefault(require("@material-ui/icons/Help"));

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _styles = require("@material-ui/core/styles");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _sovosColors = require("../../../themes/sovos-colors");

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
    height: 49,
    borderTop: "1px solid ".concat(_sovosColors.borderColorWhite),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    margin: '0 25px'
  },
  iconButton: {
    minWidth: 30,
    width: 30,
    height: 30,
    paddingTop: 4
  },
  icon: {
    minWidth: 30,
    width: 30,
    height: 30,
    color: (0, _colorManipulator.fade)(_sovosColors.neutralWhite, 0.7)
  },
  userMenuIcon: {
    height: 36,
    width: 36,
    color: (0, _colorManipulator.fade)(_sovosColors.neutralWhite, 0.8),
    marginRight: 5
  },
  popover: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: (0, _colorManipulator.fade)(_sovosColors.black, 0.5),
    boxShadow: "".concat(_sovosColors.borderColor, " 0px 1px 6px, ").concat(_sovosColors.borderColor, " 0px 1px 4px"),
    overflow: 'hidden',
    width: 190
  },
  userMenuHeader: {
    height: 50,
    borderBottom: "1px solid ".concat((0, _colorManipulator.fade)(_sovosColors.neutralWhite, 0.2)),
    fontSize: 16,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    color: (0, _colorManipulator.fade)(_sovosColors.neutralWhite, 0.8),
    paddingBottom: 10
  },
  popoverMenuItem: {
    padding: 0,
    minHeight: 40
  },
  popoverMenuItemText: {
    color: (0, _colorManipulator.fade)(_sovosColors.neutralWhite, 0.8),
    fontSize: 13,
    lineHeight: '40px'
  }
};
var MenuItemPropType = process.env.NODE_ENV !== "production" ? _propTypes.default.shape({
  label: _propTypes.default.string,
  action: _propTypes.default.func
}) : {};

var NavigationFooter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavigationFooter, _React$Component);

  function NavigationFooter(props) {
    var _this;

    _classCallCheck(this, NavigationFooter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavigationFooter).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleMenuClick", function (action) {
      _this.hideUserMenu();

      action();
    });

    _defineProperty(_assertThisInitialized(_this), "showUserMenu", function (event) {
      event.preventDefault();

      _this.setState({
        userMenuOpen: true,
        userAnchorEl: event.currentTarget
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideUserMenu", function () {
      _this.setState({
        userMenuOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showSettingsMenu", function (event) {
      event.preventDefault();

      _this.setState({
        settingsMenuOpen: true,
        settingsAnchorEl: event.currentTarget
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideSettingsMenu", function () {
      _this.setState({
        settingsMenuOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderSettingsMenu", function () {
      var _this$props = _this.props,
          classes = _this$props.classes,
          settingsMenuItems = _this$props.settingsMenuItems;
      var popover = classes.popover,
          popoverMenuItem = classes.popoverMenuItem,
          popoverMenuItemText = classes.popoverMenuItemText;
      return _react.default.createElement(_Popover.default, {
        className: "sovosNavigationFooter__settingsMenu",
        open: _this.state.settingsMenuOpen,
        anchorEl: _this.state.settingsAnchorEl,
        onClose: _this.hideSettingsMenu,
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'top'
        },
        transformOrigin: {
          horizontal: 'center',
          vertical: 'bottom'
        },
        classes: {
          paper: popover
        }
      }, _react.default.createElement(_MenuList.default, null, settingsMenuItems.map(function (element) {
        return _react.default.createElement(_MenuItem.default, {
          className: (0, _classnames.default)("sovosNavigationFooter__settingsMenuItem--".concat(element.label), popoverMenuItem),
          onClick: function onClick() {
            return _this.handleMenuClick(element.action);
          },
          key: element.label
        }, _react.default.createElement(_ListItemText.default, {
          primary: element.label,
          classes: {
            primary: popoverMenuItemText
          }
        }));
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderUserMenu", function () {
      var _this$props2 = _this.props,
          classes = _this$props2.classes,
          userMenuItems = _this$props2.userMenuItems,
          userName = _this$props2.userName;
      var popover = classes.popover,
          userMenuHeader = classes.userMenuHeader,
          userMenuIcon = classes.userMenuIcon,
          popoverMenuItem = classes.popoverMenuItem,
          popoverMenuItemText = classes.popoverMenuItemText;
      return _react.default.createElement(_Popover.default, {
        className: "sovosNavigationFooter__userMenu",
        open: _this.state.userMenuOpen,
        anchorEl: _this.state.userAnchorEl,
        onClose: _this.hideUserMenu,
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'top'
        },
        transformOrigin: {
          horizontal: 'center',
          vertical: 'bottom'
        },
        classes: {
          paper: popover
        }
      }, _react.default.createElement("div", {
        className: userMenuHeader
      }, _react.default.createElement(_AccountCircle.default, {
        classes: {
          root: userMenuIcon
        }
      }), _react.default.createElement("span", {
        className: {
          overflowWrap: 'break-word',
          width: 'calc(100% - 41px)'
        }
      }, userName)), _react.default.createElement(_MenuList.default, null, (userMenuItems || []).map(function (element) {
        return _react.default.createElement(_MenuItem.default, {
          className: (0, _classnames.default)("sovosNavigationFooter__userMenuItem--".concat(element.label), popoverMenuItem),
          onClick: function onClick() {
            return _this.handleMenuClick(element.action);
          },
          key: element.label
        }, _react.default.createElement(_ListItemText.default, {
          primary: element.label,
          classes: {
            primary: popoverMenuItemText
          }
        }));
      })));
    });

    _this.state = {
      userMenuOpen: false,
      settingsMenuOpen: false
    };
    return _this;
  }

  _createClass(NavigationFooter, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          showSettingsButton = _this$props3.showSettingsButton,
          showHelpButton = _this$props3.showHelpButton,
          classes = _this$props3.classes;
      var root = classes.root,
          iconButton = classes.iconButton,
          icon = classes.icon;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosNavigationFooter', root)
      }, _react.default.createElement(_IconButton.default, {
        className: (0, _classnames.default)('sovosNavigationFooter__userButton', iconButton),
        onClick: this.showUserMenu
      }, _react.default.createElement(_AccountCircle.default, {
        classes: {
          root: icon
        }
      })), this.renderUserMenu(), showSettingsButton && _react.default.createElement(_IconButton.default, {
        className: (0, _classnames.default)('sovosNavigationFooter__settingsButton', iconButton),
        onClick: this.showSettingsMenu
      }, _react.default.createElement(_Settings.default, {
        classes: {
          root: icon
        }
      })), showSettingsButton && this.renderSettingsMenu(), showHelpButton && _react.default.createElement(_IconButton.default, {
        className: (0, _classnames.default)('sovosNavigationFooter__helpButton', iconButton),
        onClick: this.props.onHelpClicked
      }, _react.default.createElement(_Help.default, {
        classes: {
          root: icon
        }
      })));
    }
  }]);

  return NavigationFooter;
}(_react.default.Component);

_defineProperty(NavigationFooter, "defaultProps", {
  onHelpClicked: function onHelpClicked() {},
  showSettingsButton: false,
  showHelpButton: false,
  settingsMenuItems: []
});

NavigationFooter.propTypes = process.env.NODE_ENV !== "production" ? {
  classes: _propTypes.default.object.isRequired,
  onHelpClicked: _propTypes.default.func,
  showSettingsButton: _propTypes.default.bool,
  showHelpButton: _propTypes.default.bool,
  settingsMenuItems: _propTypes.default.arrayOf(MenuItemPropType),
  userName: _propTypes.default.string.isRequired,
  userMenuItems: _propTypes.default.arrayOf(MenuItemPropType).isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(NavigationFooter);

exports.default = _default;