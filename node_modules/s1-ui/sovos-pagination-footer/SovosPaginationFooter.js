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

var _sovosSelect = _interopRequireDefault(require("../sovos-select"));

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

var color = _sovosColors.textColorSubtle;
var fontSize = 12;
var lineHeight = '24px';
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
    lineHeight: lineHeight,
    width: 70,
    paddingLeft: 10
  },
  selectInput: {
    padding: 0,
    lineHeight: lineHeight,
    fontSize: fontSize,
    minHeight: 24
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
    width: 24,
    padding: 0
  }
};

var _ref =
/*#__PURE__*/
_react.default.createElement("div", null, "Items per page: ");

var SovosPaginationFooter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SovosPaginationFooter, _React$Component);

  function SovosPaginationFooter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SovosPaginationFooter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SovosPaginationFooter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderItems", function () {
      return _this.props.itemsPerPageOptions.map(function (value) {
        return _react.default.createElement(_MenuItem.default, {
          className: (0, _classnames.default)("sovosPaginationFooter__itemsPerPageOption--".concat(value), _this.props.classes.item),
          key: value,
          value: value
        }, value);
      });
    });

    return _this;
  }

  _createClass(SovosPaginationFooter, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.endItem !== this.props.endItem || nextProps.itemsPerPage !== this.props.itemsPerPage || nextProps.startItem !== this.props.startItem || nextProps.totalItems !== this.props.totalItems;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          className = _this$props.className,
          style = _this$props.style,
          onPerPageChanged = _this$props.onPerPageChanged,
          itemsPerPage = _this$props.itemsPerPage,
          onPrevClicked = _this$props.onPrevClicked,
          onNextClicked = _this$props.onNextClicked,
          startItem = _this$props.startItem,
          endItem = _this$props.endItem,
          totalItems = _this$props.totalItems;
      var countText = "".concat(startItem, " - ").concat(endItem, " of ").concat(totalItems);
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosPaginationFooter', classes.root, className),
        style: style
      }, _ref, _react.default.createElement(_sovosSelect.default, {
        onChange: onPerPageChanged,
        className: (0, _classnames.default)('sovosPaginationFooter__itemsPerPageSelect', classes.select),
        classes: {
          root: classes.selectRoot,
          select: classes.selectInput
        },
        value: itemsPerPage
      }, this.renderItems()), _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosPaginationFooter__count', classes.count)
      }, countText), _react.default.createElement("button", {
        style: {
          marginLeft: 24
        },
        className: (0, _classnames.default)('sovosPaginationFooter__previousButton', classes.arrow),
        onClick: onPrevClicked,
        type: "button"
      }, "\u276E"), _react.default.createElement("button", {
        className: (0, _classnames.default)('sovosPaginationFooter__nextButton', classes.arrow),
        onClick: onNextClicked,
        type: "button"
      }, "\u276F"));
    }
  }]);

  return SovosPaginationFooter;
}(_react.default.Component);

_defineProperty(SovosPaginationFooter, "displayName", 'SovosPaginationFooter');

_defineProperty(SovosPaginationFooter, "defaultProps", {
  itemsPerPageOptions: [50, 100, 200, 300],
  className: undefined,
  style: undefined
});

SovosPaginationFooter.propTypes = process.env.NODE_ENV !== "production" ? {
  endItem: _propTypes.default.number.isRequired,
  itemsPerPage: _propTypes.default.number.isRequired,
  onNextClicked: _propTypes.default.func.isRequired,
  onPerPageChanged: _propTypes.default.func.isRequired,
  onPrevClicked: _propTypes.default.func.isRequired,
  itemsPerPageOptions: _propTypes.default.array,
  startItem: _propTypes.default.number.isRequired,
  totalItems: _propTypes.default.number.isRequired,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  style: _propTypes.default.object
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosPaginationFooter);

exports.default = _default;