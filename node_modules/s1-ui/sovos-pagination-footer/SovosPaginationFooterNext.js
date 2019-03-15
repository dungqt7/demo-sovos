"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _styles = require("@material-ui/core/styles");

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _KeyboardArrowLeft = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowLeft"));

var _KeyboardArrowRight = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowRight"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _reactTextMask = _interopRequireDefault(require("react-text-mask"));

var _createNumberMask = _interopRequireDefault(require("text-mask-addons/dist/createNumberMask"));

var _eventHelpers = require("../utils/eventHelpers");

var _sovosRaisedButton = _interopRequireDefault(require("../sovos-raised-button"));

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var color = _sovosColors.purple;
var fontSize = 11;
var lineHeight = '24px';
var transparent = 'rgba(255, 255, 255, 0)';
var styles = {
  root: {
    color: color,
    fontSize: fontSize,
    height: 30,
    lineHeight: lineHeight,
    padding: '16px 14px',
    boxSizing: 'content-box',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  select: {
    lineHeight: lineHeight,
    color: color,
    fontSize: fontSize
  },
  selectRoot: {
    color: color,
    fontSize: fontSize,
    width: 24,
    '&:before:hover, &:after:hover': {
      borderBottom: "2px solid ".concat(_sovosColors.purple)
    }
  },
  selectInput: {
    padding: 0,
    lineHeight: '20px',
    fontSize: fontSize,
    minHeight: 20,
    color: color,
    textAlign: 'center'
  },
  item: {
    color: color,
    fontSize: fontSize,
    padding: '0 24px'
  },
  count: {
    margin: '0 15px'
  },
  arrow: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    width: 20,
    padding: 0,
    color: color
  },
  arrowButton: {
    button: {
      width: 24,
      minWidth: 24,
      height: 24
    },
    icon: {
      height: 24,
      width: 24
    }
  },
  input: {
    fontSize: 11,
    color: color,
    border: '1px solid',
    borderRadius: '2px',
    padding: '4px',
    height: '14px',
    width: '23px',
    textAlign: 'center'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '20px',
    lineHeight: lineHeight,
    height: 24
  },
  buttonRoot: {
    width: 20,
    height: 20,
    minHeight: 20,
    minWidth: 20,
    padding: 1,
    margin: 2,
    boxShadow: 'none'
  },
  buttonLabel: {
    fontSize: 11,
    paddingLeft: '1px'
  },
  underline: {
    borderBottom: "1px solid ".concat(_sovosColors.purple),
    // these not selectors are not functional. they exist to override the material ui style.
    'div&:hover:not(.dont):not(.ever):not(.use):not(.important)': {
      '&:before, &:after': {
        borderBottom: "2px solid ".concat(_sovosColors.purple)
      }
    }
  },
  show: {
    marginRight: '5px'
  },
  longPageContainer: {
    marginLeft: '4px',
    marginRight: '4px'
  },
  longPageSeparator: {
    marginLeft: '5px',
    marginRight: '5px'
  },
  selectWrapper: {
    paddingTop: '2px',
    display: 'flex',
    alignItems: 'center',
    lineHeight: '20px',
    height: '20px'
  },
  showWrapper: {
    paddingTop: '2px',
    lineHeight: lineHeight,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '24px'
  }
};
var numberMask = (0, _createNumberMask.default)({
  prefix: '',
  includeThousandsSeparator: false
});

function PageNumberMask(props) {
  var inputRef = props.inputRef,
      other = _objectWithoutProperties(props, ["inputRef"]);

  return _react.default.createElement(_reactTextMask.default, _extends({}, other, {
    ref: function ref(_ref) {
      return inputRef(_ref ? _ref.inputElement : null);
    },
    mask: numberMask
  }));
}

PageNumberMask.propTypes = process.env.NODE_ENV !== "production" ? {
  inputRef: _propTypes.default.func.isRequired
} : {};

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_KeyboardArrowLeft.default, null);

var _ref3 =
/*#__PURE__*/
_react.default.createElement(_KeyboardArrowRight.default, null);

var SovosPaginationFooterNext =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SovosPaginationFooterNext, _React$Component);

  function SovosPaginationFooterNext() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SovosPaginationFooterNext);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SovosPaginationFooterNext)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderItems", function () {
      return _this.props.itemsPerPageOptions.map(function (value) {
        return _react.default.createElement(_MenuItem.default, {
          className: (0, _classnames.default)("sovosPaginationFooter__itemsPerPageOption--".concat(value), _this.props.classes.item),
          key: value,
          value: value
        }, value);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if ((0, _eventHelpers.isEnter)(event)) {
        _this.onTextFieldBlur(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "numberOfPages", function () {
      return Math.ceil(_this.props.totalItems / _this.props.itemsPerPage);
    });

    _defineProperty(_assertThisInitialized(_this), "onTextFieldBlur", function (event) {
      var value = event.target.value;

      if (Number.isInteger(Number(value))) {
        _this.props.onDirectPageChange(Number(value));
      } else {
        _this.props.onDirectPageChange(_this.props.currentPage);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderPaginationGroup", function () {
      var _this$props = _this.props,
          onPrevClicked = _this$props.onPrevClicked,
          onNextClicked = _this$props.onNextClicked,
          classes = _this$props.classes;

      if (_this.numberOfPages() === 1) {
        return null;
      }

      return _react.default.createElement("div", {
        className: classes.buttonContainer
      }, _react.default.createElement(_IconButton.default, {
        classes: {
          root: classes.arrowButton
        },
        className: (0, _classnames.default)('sovosIconButton', classes.arrow),
        onClick: onPrevClicked,
        disableRipple: true
      }, _ref2), _this.renderPaginationButtons(), _react.default.createElement(_IconButton.default, {
        classes: {
          root: classes.arrowButton
        },
        className: (0, _classnames.default)('sovosIconButton', classes.arrow),
        onClick: onNextClicked,
        disableRipple: true
      }, _ref3));
    });

    _defineProperty(_assertThisInitialized(_this), "renderButtonArray", function () {
      var _this$props2 = _this.props,
          currentPage = _this$props2.currentPage,
          classes = _this$props2.classes;
      var arrayLength = Math.ceil(_this.numberOfPages()); // fills an array with values from 1 to numberOfPages

      var array = Array.from(new Array(arrayLength), function (val, index) {
        return index + 1;
      });
      return array.map(function (number) {
        return _react.default.createElement(_sovosRaisedButton.default, {
          className: "PaginationButton",
          classes: {
            root: classes.buttonRoot,
            label: classes.buttonLabel
          },
          key: number,
          color: currentPage === number ? _sovosColors.neutralWhite : _sovosColors.purple,
          backgroundColor: currentPage === number ? _sovosColors.purple : transparent,
          onClick: function onClick() {
            return _this.props.onDirectPageChange(number);
          }
        }, number);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderPaginationButtons", function () {
      var _this$props3 = _this.props,
          currentPage = _this$props3.currentPage,
          classes = _this$props3.classes;
      var pageString = currentPage.toString();

      if (_this.numberOfPages() > 1 && _this.numberOfPages() <= 10) {
        return _react.default.createElement("div", null, _this.renderButtonArray());
      }

      return _react.default.createElement("div", {
        className: classes.longPageContainer
      }, _react.default.createElement(_Input.default, {
        className: "SovosPaginationLongPageInput",
        classes: {
          input: classes.input
        },
        inputComponent: PageNumberMask,
        disableUnderline: true,
        defaultValue: pageString,
        onKeyDown: _this.handleKeyDown,
        onBlur: _this.onTextFieldBlur
      }), _react.default.createElement("span", {
        className: classes.longPageSeparator
      }, "/"), _this.numberOfPages());
    });

    return _this;
  }

  _createClass(SovosPaginationFooterNext, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.itemsPerPage !== this.props.itemsPerPage || nextProps.totalItems !== this.props.totalItems || nextProps.currentPage !== this.props.currentPage;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          classes = _this$props4.classes,
          className = _this$props4.className,
          style = _this$props4.style,
          onPerPageChanged = _this$props4.onPerPageChanged,
          itemsPerPage = _this$props4.itemsPerPage;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosPaginationFooter', classes.root, className),
        style: style
      }, _react.default.createElement("div", {
        className: classes.showWrapper
      }, _react.default.createElement("span", {
        className: classes.show
      }, "show")), _react.default.createElement("div", {
        className: classes.selectWrapper
      }, _react.default.createElement(_Select.default, {
        onChange: onPerPageChanged,
        IconComponent: function IconComponent() {
          return null;
        },
        className: (0, _classnames.default)('sovosPaginationFooter__itemsPerPageSelect', classes.select),
        classes: {
          root: classes.selectRoot,
          select: classes.selectInput
        },
        input: _react.default.createElement(_Input.default, {
          classes: {
            underline: classes.underline
          },
          name: "itemsPerPage",
          id: "items-per-page"
        }),
        value: itemsPerPage
      }, this.renderItems())), this.renderPaginationGroup());
    }
  }]);

  return SovosPaginationFooterNext;
}(_react.default.Component);

_defineProperty(SovosPaginationFooterNext, "displayName", 'SovosPaginationFooter');

_defineProperty(SovosPaginationFooterNext, "defaultProps", {
  itemsPerPageOptions: [20, 50, 100],
  className: undefined,
  style: undefined
});

SovosPaginationFooterNext.propTypes = process.env.NODE_ENV !== "production" ? {
  itemsPerPage: _propTypes.default.number.isRequired,
  onNextClicked: _propTypes.default.func.isRequired,
  onPerPageChanged: _propTypes.default.func.isRequired,
  onPrevClicked: _propTypes.default.func.isRequired,
  onDirectPageChange: _propTypes.default.func.isRequired,
  itemsPerPageOptions: _propTypes.default.array,
  totalItems: _propTypes.default.number.isRequired,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  currentPage: _propTypes.default.number.isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosPaginationFooterNext);

exports.default = _default;