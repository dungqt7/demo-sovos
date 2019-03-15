"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _styles = require("@material-ui/core/styles");

var _classNameHelpers = _interopRequireDefault(require("../../utils/classNameHelpers"));

var _sovosIconButton = _interopRequireDefault(require("../../sovos-icon-button"));

var _sovosTextField = _interopRequireDefault(require("../../sovos-text-field"));

var _eventHelpers = require("../../utils/eventHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
  active: {
    width: 250,
    marginLeft: -5
  },
  root: {
    height: 50,
    maxWidth: 250,
    minWidth: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 13,
    paddingLeft: 10
  },
  input: {},
  title: {
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 0
  },
  iconButton: {
    minWidth: 40
  },
  icon: {}
};
var TooltipProps = {
  title: 'Search'
};
/**
 * Search
 *
 * Props from the SovosIconButton
 */

var SovosToolbarSearch =
/*#__PURE__*/
function (_Component) {
  _inherits(SovosToolbarSearch, _Component);

  function SovosToolbarSearch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SovosToolbarSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SovosToolbarSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      active: false,
      value: _this.props.defaultValue
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function () {
      _this.setState(function (state) {
        return {
          active: !state.active
        };
      });

      if (_this.props.onSearch && _this.state.active) {
        _this.props.onSearch(_this.state.value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTextChange", function (event) {
      _this.setState({
        value: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if ((0, _eventHelpers.isEnter)(event)) {
        _this.handleSearch();
      }
    });

    return _this;
  }

  _createClass(SovosToolbarSearch, [{
    key: "getColor",
    value: function getColor() {
      var _this$props = this.props,
          color = _this$props.color,
          theme = _this$props.theme;
      return color || theme.palette.secondary.main;
    }
  }, {
    key: "renderSearchValue",
    value: function renderSearchValue() {
      var classes = this.props.classes;
      var color = this.getColor();

      if (this.state.active) {
        return _react.default.createElement(_sovosTextField.default, {
          name: "toolbar-search-text",
          placeholder: this.placeholder,
          className: (0, _classnames.default)('sovosToolbarSearch__input', classes.text),
          InputProps: {
            style: {
              color: color
            },
            classes: {
              root: classes.root
            },
            disableUnderline: true
          },
          value: this.state.value,
          onChange: this.handleTextChange,
          onKeyDown: this.handleKeyDown,
          autoFocus: true
        });
      }

      if (this.state.value) {
        return _react.default.createElement("span", {
          onClick: this.handleSearch,
          className: classes.title,
          style: {
            color: color
          }
        }, this.state.value);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          IconButtonProps = _this$props2.IconButtonProps;
      var active = this.state.active;

      if (!IconButtonProps.TooltipProps) {
        IconButtonProps.TooltipProps = TooltipProps;
      }

      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosToolbarSearch', (_classNames = {}, _defineProperty(_classNames, classes.root, true), _defineProperty(_classNames, classes.active, active), _classNames)),
        style: {
          boxShadow: active ? "0px 2px 4px 1px ".concat(this.getColor()) : undefined
        }
      }, this.renderSearchValue(), _react.default.createElement(_sovosIconButton.default, _extends({
        onClick: this.handleSearch,
        classes: {
          root: classes.iconButton
        }
      }, (0, _classNameHelpers.default)(IconButtonProps, 'sovosToolbarSearch__searchButton')), _react.default.createElement(_Search.default, {
        style: {
          color: this.getColor()
        }
      })));
    }
  }]);

  return SovosToolbarSearch;
}(_react.Component);

_defineProperty(SovosToolbarSearch, "defaultProps", {
  IconButtonProps: {
    TooltipProps: TooltipProps
  },
  placeholder: 'Search',
  onSearch: undefined,
  defaultValue: '',
  color: undefined
});

_defineProperty(SovosToolbarSearch, "displayName", 'Search');

SovosToolbarSearch.propTypes = process.env.NODE_ENV !== "production" ? {
  IconButtonProps: _propTypes.default.object,

  /**
   * Callback function that is fired when the search value changes.
     function(newValue: string) => void
   newValue: The new value of the text field.
   */
  onSearch: _propTypes.default.func,

  /**
   * Default value for search component
   */
  defaultValue: _propTypes.default.string,

  /**
   * Placeholder text
   */
  placeholder: _propTypes.default.string,
  color: _propTypes.default.string,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,
  classes: _propTypes.default.object.isRequired
} : {};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(SovosToolbarSearch);

exports.default = _default;