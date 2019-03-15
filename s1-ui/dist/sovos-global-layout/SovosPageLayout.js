"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _SovosTabContent = _interopRequireDefault(require("../sovos-tab-content/SovosTabContent"));

var _reactHelpers = require("../utils/reactHelpers");

var _SovosHeroBanner = _interopRequireDefault(require("../sovos-hero-banner/SovosHeroBanner"));

var _sovosColors = require("../themes/sovos-colors");

var _PageTitleBar = _interopRequireDefault(require("./components/PageTitleBar"));

var _navigationContext = _interopRequireDefault(require("./navigationContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
  page: {
    backgroundColor: _sovosColors.grayLight,
    transition: 'left .3s ease-out',
    flex: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '100vh'
  }
};

var PageLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(PageLayout, _Component);

  function PageLayout(props) {
    var _this;

    _classCallCheck(this, PageLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageLayout).call(this, props));
    _this.state = {
      selectedTab: 0
    };
    _this.handleTabClick = _this.handleTabClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PageLayout, [{
    key: "handleTabClick",
    value: function handleTabClick(event, value) {
      var _this$props = this.props,
          onTabChanged = _this$props.onTabChanged,
          children = _this$props.children;
      var selectedTabProps = (0, _reactHelpers.findChildrenByType)(children, _SovosTabContent.default)[value].props;
      this.setState({
        selectedTab: value
      }, function () {
        if (onTabChanged) {
          onTabChanged(selectedTabProps.value || value);
        }

        if (selectedTabProps.onActive) {
          selectedTabProps.onActive();
        }
      });
    }
  }, {
    key: "generateTabLabels",
    value: function generateTabLabels() {
      var tabs = (0, _reactHelpers.findChildrenByType)(this.props.children, _SovosTabContent.default);

      if (tabs.length) {
        return tabs.map(function (tab) {
          var props = tab.props.TabProps || {};
          return {
            label: props.label
          };
        });
      }

      return null;
    }
  }, {
    key: "renderHeroBanner",
    value: function renderHeroBanner() {
      var heroBanner = this.props.heroBanner;

      if (heroBanner) {
        return _react.default.createElement(_SovosHeroBanner.default, heroBanner);
      }

      return null;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      var tabs = (0, _reactHelpers.findChildrenByType)(this.props.children, _SovosTabContent.default);
      var tabContent;

      if (tabs.length) {
        tabContent = tabs.map(function (tab, index) {
          var props = tab.props.TabProps || {};
          return _react.default.cloneElement(tab, {
            key: props.label || index,
            selected: index === _this2.state.selectedTab
          });
        });
      }

      return [tabContent, (0, _reactHelpers.filterOutChildrenByType)(this.props.children, _SovosTabContent.default)];
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          navigationIcon = _this$props2.navigationIcon,
          style = _this$props2.style,
          classes = _this$props2.classes,
          titleElements = _this$props2.titleElements,
          titleBarActions = _this$props2.titleBarActions;
      return _react.default.createElement(_navigationContext.default.Consumer, null, function (context) {
        return _react.default.createElement("div", {
          className: (0, _classnames.default)('sovosPageLayout', classes.page),
          style: style
        }, _react.default.createElement(_PageTitleBar.default, {
          navigationIcon: navigationIcon || context.toggleButtonRender(),
          onTabClick: _this3.handleTabClick,
          actions: titleBarActions,
          selectedTab: _this3.state.selectedTab,
          tabs: _this3.generateTabLabels(),
          titleElements: titleElements
        }), _this3.renderHeroBanner(), _react.default.createElement("div", {
          style: {
            padding: 20
          }
        }, _this3.renderContent()));
      });
    }
  }]);

  return PageLayout;
}(_react.Component);

_defineProperty(PageLayout, "defaultProps", {
  heroBanner: undefined,
  navigationIcon: undefined,
  onTabChanged: undefined,
  style: {},
  titleBarActions: undefined
});

PageLayout.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,
  heroBanner: _propTypes.default.object,
  navigationIcon: _propTypes.default.element,
  onTabChanged: _propTypes.default.func,
  style: _propTypes.default.object,
  classes: _propTypes.default.object.isRequired,
  titleBarActions: _propTypes.default.node,
  titleElements: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string.isRequired,
    onClick: _propTypes.default.func
  })).isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(PageLayout);

exports.default = _default;