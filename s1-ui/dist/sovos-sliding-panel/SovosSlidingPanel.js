"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _reactHelpers = require("../utils/reactHelpers");

var _SovosTabContent = _interopRequireDefault(require("../sovos-tab-content/SovosTabContent"));

var _OverlayLayer = _interopRequireDefault(require("./components/overlayLayer/OverlayLayer"));

var _ContainerLayer = _interopRequireDefault(require("./components/containerLayer/ContainerLayer"));

var _SovosSlidingPanelHeader = _interopRequireDefault(require("./components/SovosSlidingPanelHeader"));

var _SovosSlidingPanelStore = require("./store/SovosSlidingPanelStore");

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var transitionsTimeout = 300;
var styles = {
  paper: {
    boxShadow: "0 0 17px 6px ".concat(_sovosColors.boxShadow)
  },
  content: {
    overflowY: 'auto',
    padding: 20,
    flexGrow: 1
  }
};

var SovosSlidingPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(SovosSlidingPanel, _Component);

  function SovosSlidingPanel(props) {
    var _this;

    _classCallCheck(this, SovosSlidingPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SovosSlidingPanel).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleTabClick", function (event, value) {
      _this.setState({
        selectedTab: value
      });
    });

    _this.state = {
      selectedTab: 0,
      headerHeight: '',
      contentHeight: '',
      order: 0
    };
    return _this;
  }

  _createClass(SovosSlidingPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.open) {
        this.setState({
          order: (0, _SovosSlidingPanelStore.getNumberOfSlides)()
        }, function () {
          // eslint-disable-line
          (0, _SovosSlidingPanelStore.createNewSlide)();

          _this2.setContentHeight();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.open !== prevProps.open) {
        if (this.props.open) {
          this.setState({
            order: (0, _SovosSlidingPanelStore.getNumberOfSlides)()
          }, function () {
            // eslint-disable-line
            (0, _SovosSlidingPanelStore.createNewSlide)();
          });
        } else {
          (0, _SovosSlidingPanelStore.removeSlide)();
        }
      }

      if (this.props.open) {
        this.setContentHeight();
      }
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.props.open ? this.props.baseZIndex + this.state.order * 2 : 0;
    }
  }, {
    key: "setContentHeight",
    value: function setContentHeight() {
      if (!this.headerElement || !this.contentElement) {
        return;
      }

      var headerHeight = window.getComputedStyle(this.headerElement).height;

      var _window$getComputedSt = window.getComputedStyle(this.contentElement),
          paddingTop = _window$getComputedSt.paddingTop,
          paddingBottom = _window$getComputedSt.paddingBottom,
          marginTop = _window$getComputedSt.marginTop,
          marginBottom = _window$getComputedSt.marginBottom;

      if (this.state.headerHeight !== headerHeight) {
        this.setState({
          contentHeight: "calc(100vh - ".concat(headerHeight, " - ").concat(paddingTop, " - ").concat(paddingBottom, " - ").concat(marginTop, " - ").concat(marginBottom, ")"),
          headerHeight: headerHeight
        });
      }
    }
  }, {
    key: "renderPanelHeader",
    value: function renderPanelHeader() {
      var children = this.props.children;
      var tabs = (0, _reactHelpers.findChildrenByType)(children, _SovosTabContent.default);
      var panelHeader = (0, _reactHelpers.findChildByType)(children, _SovosSlidingPanelHeader.default);

      if (tabs) {
        var tabProps = {
          onTabClick: this.handleTabClick,
          tabs: tabs.map(function (tab) {
            return {
              label: tab.props.TabProps.label
            };
          }),
          selectedTab: this.state.selectedTab
        };

        if (panelHeader) {
          return _react.default.cloneElement(panelHeader, tabProps);
        }

        return _react.default.createElement(_SovosSlidingPanelHeader.default, tabProps);
      }

      return panelHeader;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this3 = this;

      var children = this.props.children;
      var tabs = (0, _reactHelpers.findChildrenByType)(children, _SovosTabContent.default);
      var panelTabs = [];

      if (tabs.length) {
        panelTabs = tabs.map(function (t, index) {
          var props = t.props.TabProps || {};
          return _react.default.cloneElement(t, {
            key: props.label || index,
            selected: index === _this3.state.selectedTab
          });
        });
      }

      return [].concat(_toConsumableArray(panelTabs), _toConsumableArray((0, _reactHelpers.filterOutChildrenByType)(children, _SovosSlidingPanelHeader.default, _SovosTabContent.default)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          onClose = _this$props.onClose,
          open = _this$props.open,
          baseWidth = _this$props.baseWidth,
          classes = _this$props.classes,
          className = _this$props.className,
          style = _this$props.style;
      var order = this.state.order;
      var zIndex = this.getZIndex();
      return _react.default.createElement(_Drawer.default, {
        anchor: "right",
        open: open,
        onClose: onClose,
        transitionDuration: transitionsTimeout,
        className: (0, _classnames.default)('sovosSlidingPanel', classes.root, className),
        PaperProps: {
          style: {
            zIndex: zIndex
          },
          classes: {
            root: classes.paper
          }
        },
        BackdropComponent: _OverlayLayer.default,
        BackdropProps: {
          order: order,
          baseWidth: baseWidth,
          zIndex: zIndex - 1,
          transitionDuration: transitionsTimeout
        },
        style: style
      }, _react.default.createElement(_ContainerLayer.default, {
        order: order,
        zIndex: zIndex,
        baseWidth: baseWidth
      }, _react.default.createElement("div", {
        ref: function ref(e) {
          _this4.headerElement = e;
        }
      }, this.renderPanelHeader()), _react.default.createElement("div", {
        ref: function ref(e) {
          _this4.contentElement = e;
        },
        style: {
          height: this.state.contentHeight
        },
        className: classes.content
      }, this.renderContent())));
    }
  }]);

  return SovosSlidingPanel;
}(_react.Component);

_defineProperty(SovosSlidingPanel, "displayName", 'SlidingPanel');

_defineProperty(SovosSlidingPanel, "defaultProps", {
  baseZIndex: 1310,
  baseWidth: undefined,
  className: undefined,
  style: undefined
});

SovosSlidingPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Used if the your app works with high levels of z-index. */
  baseZIndex: _propTypes.default.number,

  /**
   * Children react prop is marked as required because this component is a container.
   *
   * Children can include several elements that will be specially handled by the SlidingPanel. Material-ui Tab components will
   * be added to the given SovosSlidingPanelHeader child element or to a newly created SovosSlidingPanelHeader. The selected tab
   * is managed by the SlidingPanel
   *
   * The SovosSlidingPanelHeader child can contain it's own specially handled children. SovosSlidingPanelHeaderActionButtons will be rendered
   * in the top right corner of the header. SovosSlidingPanelHeaderAdditionalButtons will be rendered in the lower right corner of the header.
   * Since tabs are automatically added to the header and managed by the sliding panel, do not add Tab components directly to the header.
   */
  children: _propTypes.default.node.isRequired,
  open: _propTypes.default.bool.isRequired,

  /** Callback called when this panel is being closed. */
  onClose: _propTypes.default.func.isRequired,

  /**
   * The base width of the panel. Passed into a css calc() function
   * default is 100% - {rendered width of .sovos-navigation}
   * also configurable through muiTheme.slidingPanel
  */
  baseWidth: _propTypes.default.string,

  /** automatically provided by withTheme */
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  style: _propTypes.default.object
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosSlidingPanel);

exports.default = _default;