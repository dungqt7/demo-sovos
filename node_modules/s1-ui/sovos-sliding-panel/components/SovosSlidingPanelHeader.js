"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _reactHelpers = require("../../utils/reactHelpers");

var _sovosTabs = _interopRequireDefault(require("../../sovos-tabs"));

var _SovosSlidingPanelHeaderActionButtons = _interopRequireDefault(require("./SovosSlidingPanelHeaderActionButtons"));

var _SovosSlidingPanelHeaderAdditionalButtons = _interopRequireDefault(require("./SovosSlidingPanelHeaderAdditionalButtons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
    padding: '0 20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    flex: '1 0 auto',
    justifyContent: 'space-between'
  },
  titleRow: {
    alignItems: 'center',
    height: 50
  },
  title: {
    flexGrow: 1,
    fontSize: '22px',
    fontWeight: '400'
  },
  tabs: {
    flex: '1 1 auto'
  },
  buttons: {
    margin: '0 5px',
    '& > div:last-child': {
      marginRight: 0
    }
  },
  additionalButtons: {
    marginLeft: 'auto'
  }
};

var SovosSlidingPanelHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SovosSlidingPanelHeader, _React$Component);

  function SovosSlidingPanelHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SovosSlidingPanelHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SovosSlidingPanelHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderAdditionalButtons", function () {
      return (0, _reactHelpers.findChildByType)(_this.props.children, _SovosSlidingPanelHeaderAdditionalButtons.default);
    });

    _defineProperty(_assertThisInitialized(_this), "renderActionButtons", function () {
      return (0, _reactHelpers.findChildByType)(_this.props.children, _SovosSlidingPanelHeaderActionButtons.default);
    });

    _defineProperty(_assertThisInitialized(_this), "renderTabSection", function () {
      var _this$props = _this.props,
          tabs = _this$props.tabs,
          TabsClasses = _this$props.TabsClasses;

      if (tabs.length) {
        var _this$props2 = _this.props,
            onTabClick = _this$props2.onTabClick,
            selectedTab = _this$props2.selectedTab;
        var tabLabels = tabs.map(function (tab, index) {
          var label = tab.label;
          return _react.default.createElement(_Tab.default, {
            label: label,
            value: index,
            key: label || index
          });
        });
        return _react.default.createElement(_sovosTabs.default, {
          value: selectedTab,
          onChange: onTabClick,
          classes: TabsClasses
        }, tabLabels);
      }

      return null;
    });

    return _this;
  }

  _createClass(SovosSlidingPanelHeader, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          title = _this$props3.title,
          classes = _this$props3.classes,
          showBorderBottom = _this$props3.showBorderBottom,
          className = _this$props3.className,
          style = _this$props3.style;
      var tabs = this.renderTabSection();
      var additionalButtons = this.renderAdditionalButtons();

      var borderStyle = _objectSpread({
        borderBottom: showBorderBottom ? '1px solid #ebeef0' : 'none'
      }, style);

      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosSlidingPanelHeader', classes.root, className),
        style: borderStyle
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)(classes.row, classes.titleRow)
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosSlidingPanelHeader__title', classes.title)
      }, title), _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosSlidingPanelHeader__actions', classes.buttons)
      }, this.renderActionButtons())), (0, _reactHelpers.filterOutChildrenByType)(children, _SovosSlidingPanelHeaderActionButtons.default, _SovosSlidingPanelHeaderAdditionalButtons.default, _Tab.default), _react.default.createElement("div", {
        className: classes.row,
        style: {
          height: tabs || additionalButtons ? 50 : 0
        }
      }, _react.default.createElement("div", {
        className: classes.tabs
      }, tabs), _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosSlidingPanelHeader__additionalButtons', classes.buttons, classes.additionalButtons)
      }, additionalButtons)));
    }
  }]);

  return SovosSlidingPanelHeader;
}(_react.default.Component);

_defineProperty(SovosSlidingPanelHeader, "defaultProps", {
  children: null,
  onTabClick: function onTabClick() {},
  selectedTab: 0,
  showBorderBottom: true,
  tabs: [],
  TabsClasses: {},
  title: '',
  className: undefined,
  style: undefined
});

SovosSlidingPanelHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node,
  onTabClick: _propTypes.default.func,
  selectedTab: _propTypes.default.number,
  showBorderBottom: _propTypes.default.bool,
  tabs: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired
  })),
  TabsClasses: _propTypes.default.object,
  title: _propTypes.default.node,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  style: _propTypes.default.object
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosSlidingPanelHeader);

exports.default = _default;