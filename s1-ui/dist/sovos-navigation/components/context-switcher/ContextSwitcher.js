"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Lens = _interopRequireDefault(require("@material-ui/icons/Lens"));

var _styles = require("@material-ui/core/styles");

var _sovosTreeList = require("../../../sovos-tree-list");

var _sovosColors = require("../../../themes/sovos-colors");

var _sovosEnterprise = _interopRequireDefault(require("../../../themes/sovos-enterprise"));

var _contextColors = _interopRequireDefault(require("./contextColors"));

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

var contextItemShape = {
  name: _propTypes.default.string.isRequired,
  taxYear: _propTypes.default.string,
  type: _propTypes.default.oneOf(['production', 'test', 'default'])
};
contextItemShape.nestedContexts = _propTypes.default.arrayOf(_propTypes.default.shape(contextItemShape));
var contextItemPropTypes = process.env.NODE_ENV !== "production" ? _propTypes.default.shape(contextItemShape) : {};
var styles = {
  root: {
    height: 40,
    fontWeight: 400,
    fontSize: 14
  },
  alias: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textAlign: 'left'
  },
  taxyear: {
    fontWeight: 700
  },
  taxyearOpacity: {
    opacity: 0.5
  },
  toggleButton: {
    height: 40,
    padding: '0 25px',
    fontWeight: 400
  },
  search: {
    display: 'flex',
    minWidth: 250,
    height: 20,
    borderBottom: '1px solid lightgrey',
    padding: '8px 8px 6px'
  },
  searchIcons: {
    width: 20,
    height: 20,
    marginRight: 4
  },
  overlay: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2000
  },
  icons: {
    width: 14,
    height: 14,
    marginRight: 8
  },
  contextItem: {
    display: 'flex',
    flexGrow: 1
  }
};

function getContextColor(context) {
  return _contextColors.default[context.type || 'default'];
}

function renderContextIcon(context, classes) {
  if (context.type) {
    return _react.default.createElement(_Lens.default, {
      classes: {
        root: classes.icons
      },
      style: {
        color: _contextColors.default[context.type].icon
      }
    });
  }

  return null;
}

function renderTaxYear(context) {
  if (context.taxYear) {
    return _react.default.createElement("span", null, context.taxYear);
  }

  return null;
}

var ContextSwitcher =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContextSwitcher, _React$Component);

  function ContextSwitcher(props) {
    var _this;

    _classCallCheck(this, ContextSwitcher);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContextSwitcher).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "contextMenuFilter", function (context) {
      var searchRegex = new RegExp(_this.state.searchValue, 'i');
      return (_this.props.selectedContext.name !== context.name || context.nestedContexts) && (!_this.state.searchValue || searchRegex.test(context.name));
    });

    _defineProperty(_assertThisInitialized(_this), "handleContextBarClick", function (event) {
      var contexts = _this.props.contexts;

      if (contexts.length > 1 || contexts[0].nestedContexts) {
        _this.setState({
          open: true,
          anchorEl: event.currentTarget,
          searchValue: ''
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function () {
      _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function (event) {
      _this.setState({
        searchValue: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "generateContextContent", function (context) {
      var classes = _this.props.classes;
      return _react.default.createElement("div", {
        className: classes.contextItem
      }, renderContextIcon(context, classes), _react.default.createElement(_sovosTreeList.SovosTreeListText, {
        primary: context.name
      }), renderTaxYear(context));
    });

    _defineProperty(_assertThisInitialized(_this), "generateContextDataItem", function (context) {
      var item = _objectSpread({
        id: context.name,
        content: _this.generateContextContent(context)
      }, context);

      if (context.nestedContexts) {
        item.nestedItems = context.nestedContexts.map(_this.generateContextDataItem);
      }

      return item;
    });

    _defineProperty(_assertThisInitialized(_this), "handleContextClick", function (context) {
      if (_this.props.selectedContext.name !== context.name) {
        _this.setState({
          open: false
        }, _this.props.setContext(context));
      }
    });

    _this.state = {
      open: false,
      searchValue: ''
    };
    return _this;
  }

  _createClass(ContextSwitcher, [{
    key: "renderContextDropdownButton",
    value: function renderContextDropdownButton() {
      var selectedContext = this.props.selectedContext;

      var _getContextColor = getContextColor(selectedContext),
          background = _getContextColor.background,
          text = _getContextColor.text;

      var classes = this.props.classes;
      return _react.default.createElement(_styles.MuiThemeProvider, {
        theme: (0, _styles.createMuiTheme)(_objectSpread({}, _sovosEnterprise.default, {
          overrides: {
            MuiButton: {
              root: {
                borderRadius: 2,
                backgroundColor: (0, _colorManipulator.fade)(background, 0.6),
                '&:hover': {
                  backgroundColor: background
                },
                color: text,
                padding: '0 25px'
              }
            },
            label: {
              display: 'flex'
            }
          }
        }))
      }, _react.default.createElement(_Button.default, {
        fullWidth: true,
        disableRipple: true,
        className: (0, _classnames.default)('sovos-navigation-context-switcher__button', classes.toggleButton),
        onClick: this.handleContextBarClick
      }, _react.default.createElement("span", {
        style: _objectSpread({}, styles.alias, {
          flex: "1 0 ".concat(selectedContext.taxYear ? 140 : 180, "px")
        })
      }, selectedContext ? selectedContext.name : ''), selectedContext.taxYear && _react.default.createElement("span", {
        className: (0, _classnames.default)('sovos-navigation-context-switcher__year', classes.taxyear)
      }, _react.default.createElement("span", {
        className: classes.taxyearOpacity
      }, selectedContext ? 20 : ''), selectedContext ? selectedContext.taxYear.substring(2) : '')));
    }
  }, {
    key: "renderPopover",
    value: function renderPopover() {
      var classes = this.props.classes;
      var contextData = this.props.contexts.filter(this.contextMenuFilter).map(this.generateContextDataItem);
      return _react.default.createElement(_Popover.default, {
        open: this.state.open,
        anchorEl: this.state.anchorEl,
        onClose: this.closeMenu,
        anchorOrigin: {
          horizontal: 'left',
          vertical: 'bottom'
        },
        transformOrigin: {
          horizontal: 'left',
          vertical: 'top'
        }
      }, _react.default.createElement("div", {
        className: classes.search
      }, _react.default.createElement(_Search.default, {
        classes: {
          root: classes.searchIcons
        },
        style: {
          color: _sovosColors.grayMedium
        }
      }), _react.default.createElement("input", {
        type: "text",
        autoFocus: true,
        value: this.state.searchValue,
        onChange: this.handleSearch,
        name: "contextSearch",
        placeholder: "Search"
      })), _react.default.createElement(_sovosTreeList.SovosTreeList, {
        data: contextData,
        onItemClick: this.handleContextClick
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovos-navigation-context-switcher', classes.root)
      }, this.renderContextDropdownButton(), this.renderPopover());
    }
  }]);

  return ContextSwitcher;
}(_react.default.Component);

ContextSwitcher.propTypes = process.env.NODE_ENV !== "production" ? {
  selectedContext: contextItemPropTypes.isRequired,
  contexts: _propTypes.default.arrayOf(contextItemPropTypes).isRequired,
  setContext: _propTypes.default.func.isRequired,
  classes: _propTypes.default.object.isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(ContextSwitcher);

exports.default = _default;