"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TabElementProps = exports.TitleElementProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _styles = require("@material-ui/core/styles");

var _sovosTabs = _interopRequireDefault(require("../../sovos-tabs"));

var _sovosColors = require("../../themes/sovos-colors");

var _SovosFlatButton = _interopRequireDefault(require("../../sovos-flat-button/SovosFlatButton"));

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
    width: '100%',
    backgroundColor: _sovosColors.neutralWhite,
    boxShadow: "".concat(_sovosColors.textColorSubtle, " 0px 1px 5px"),
    position: 'relative'
  },
  topSection: {
    height: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center'
  },
  breadCrumbsContainer: {
    flex: '0 1 auto',
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'flex'
  },
  breadCrumb: {
    whiteSpace: 'nowrap',
    lineHeight: '50px',
    fontSize: 20,
    maxHeight: 50
  },
  breadCrumbClickable: {
    fontSize: 20,
    lineHeight: '22px',
    textTransform: 'none',
    fontWeight: 400,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%'
  },
  breadCrumbNonClickable: {
    padding: '4px 16px',
    lineHeight: '22px',
    verticalAlign: 'middle'
  },
  actionsContainer: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 15
  }
};
var titleElementProps = {
  text: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
var tabElementProps = {
  label: _propTypes.default.string.isRequired
};

function renderTab(tab, index) {
  return _react.default.createElement(_Tab.default, {
    key: "Tab".concat(index, "-").concat(tab.label),
    label: tab.label,
    value: index
  });
}

var _ref =
/*#__PURE__*/
_react.default.createElement(_ArrowDropDown.default, null);

var _ref2 =
/*#__PURE__*/
_react.default.createElement("span", null, "/");

var PageTitleBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageTitleBar, _React$Component);

  function PageTitleBar(props) {
    var _this;

    _classCallCheck(this, PageTitleBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageTitleBar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "shouldShowTabs", function () {
      return _this.props.tabs && _this.props.tabs.length > 0;
    });

    _defineProperty(_assertThisInitialized(_this), "closeBreadCrumbDropDown", function () {
      return _this.setState({
        popoverOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "expandBreadCrumbDropDown", function (event) {
      event.preventDefault();

      _this.setState({
        popoverOpen: true,
        anchorEl: event.currentTarget
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderClickableBreadCrumb", function (item) {
      return _react.default.createElement(_SovosFlatButton.default, {
        className: "sovosPageTitleBar__breadCrumbText--clickable",
        classes: {
          label: _this.props.classes.breadCrumbClickable
        },
        color: _sovosColors.black,
        onClick: item.onClick || _this.expandBreadCrumbDropDown
      }, _react.default.createElement("span", null, item.text), item.nestedItems && _ref);
    });

    _defineProperty(_assertThisInitialized(_this), "renderNonClickableBreadCrumb", function (item) {
      return _react.default.createElement("span", {
        className: (0, _classnames.default)('sovosPageTitleBar__breadCrumb--nonClickable', _this.props.classes.breadCrumbNonClickable)
      }, _react.default.createElement("span", null, item.text));
    });

    _defineProperty(_assertThisInitialized(_this), "renderDropdownItem", function (element, index) {
      return _react.default.createElement(_MenuItem.default, {
        key: "NestedBreadCrumbItem".concat(index, "-").concat(element.text),
        onClick: function onClick() {
          _this.closeBreadCrumbDropDown();

          element.onClick();
        }
      }, element.text);
    });

    _defineProperty(_assertThisInitialized(_this), "renderBreadCrumbDropdown", function (element) {
      return _react.default.createElement(_Popover.default, {
        className: "sovosPageTitleBar__breadCrumbDropdown",
        open: _this.state.popoverOpen,
        anchorEl: _this.state.anchorEl,
        anchorOrigin: {
          horizontal: 'left',
          vertical: 'bottom'
        },
        transformOrigin: {
          horizontal: 'left',
          vertical: 'top'
        },
        onClose: _this.closeBreadCrumbDropDown
      }, element.nestedItems && element.nestedItems.length > 0 && element.nestedItems.map(_this.renderDropdownItem));
    });

    _defineProperty(_assertThisInitialized(_this), "renderBreadCrumb", function (element, index) {
      var _this$props = _this.props,
          titleElements = _this$props.titleElements,
          classes = _this$props.classes;
      var isClickable = !!element.onClick || !!element.nestedItems;
      var isLastItem = index === titleElements.length - 1;
      var opacity = isLastItem || !isClickable ? {
        opacity: 0.9
      } : {
        opacity: 0.6
      };
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosPageTitleBar__breadCrumb', classes.breadCrumb),
        key: "BreadCrumb".concat(index, "-").concat(element.text),
        style: opacity
      }, isClickable ? _this.renderClickableBreadCrumb(element) : _this.renderNonClickableBreadCrumb(element), element.nestedItems && _this.renderBreadCrumbDropdown(element), !isLastItem && _ref2);
    });

    _defineProperty(_assertThisInitialized(_this), "renderBreadCrumbsSection", function () {
      var _this$props2 = _this.props,
          titleElements = _this$props2.titleElements,
          classes = _this$props2.classes;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosPageTitleBar__breadCrumbsContainer', classes.breadCrumbsContainer)
      }, titleElements.map(_this.renderBreadCrumb));
    });

    _defineProperty(_assertThisInitialized(_this), "renderTabSection", function () {
      var _this$props3 = _this.props,
          tabs = _this$props3.tabs,
          onTabClick = _this$props3.onTabClick,
          selectedTab = _this$props3.selectedTab;
      if (!_this.shouldShowTabs()) return null;
      return _react.default.createElement(_sovosTabs.default, {
        className: "sovosPageTitleBar__tabs",
        variant: "scrollable",
        onChange: onTabClick,
        value: selectedTab
      }, tabs.map(renderTab));
    });

    _defineProperty(_assertThisInitialized(_this), "renderActions", function () {
      var _this$props4 = _this.props,
          actions = _this$props4.actions,
          classes = _this$props4.classes;

      if (actions && actions.length > 0) {
        return _react.default.createElement("div", {
          className: (0, _classnames.default)('sovosPageTitleBar__actions', classes.actionsContainer)
        }, actions);
      }

      return null;
    });

    _this.state = {
      popoverOpen: false
    };
    return _this;
  }

  _createClass(PageTitleBar, [{
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          classes = _this$props5.classes,
          navigationIcon = _this$props5.navigationIcon;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosPageTitleBar', classes.root),
        style: {
          height: this.shouldShowTabs() ? 100 : 50
        }
      }, _react.default.createElement("div", {
        className: classes.topSection
      }, navigationIcon, this.renderBreadCrumbsSection(), this.renderActions()), this.renderTabSection());
    }
  }]);

  return PageTitleBar;
}(_react.default.Component);

_defineProperty(PageTitleBar, "defaultProps", {
  actions: [],
  navigationIcon: undefined,
  selectedTab: 0,
  tabs: []
});

PageTitleBar.propTypes = process.env.NODE_ENV !== "production" ? {
  classes: _propTypes.default.object.isRequired,
  onTabClick: _propTypes.default.func.isRequired,
  navigationIcon: _propTypes.default.element,
  actions: _propTypes.default.node,
  selectedTab: _propTypes.default.number,
  tabs: _propTypes.default.arrayOf(_propTypes.default.shape(tabElementProps)),
  titleElements: _propTypes.default.arrayOf(_propTypes.default.shape(titleElementProps)).isRequired
} : {};
var TitleElementProps = titleElementProps;
exports.TitleElementProps = TitleElementProps;
var TabElementProps = tabElementProps;
exports.TabElementProps = TabElementProps;

var _default = (0, _styles.withStyles)(styles)(PageTitleBar);

exports.default = _default;