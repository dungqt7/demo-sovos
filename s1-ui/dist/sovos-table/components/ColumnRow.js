"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _sovosColors = require("../../themes/sovos-colors");

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
  root: {
    height: 32,
    borderTop: "solid ".concat(_sovosColors.grayLight, " 1px"),
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    overflow: 'hidden',
    '&.hovered': {
      cursor: 'pointer',
      backgroundColor: (0, _colorManipulator.fade)(_sovosColors.primaryBlue, 0.25)
    }
  }
};

var ColumnRow =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ColumnRow, _PureComponent);

  function ColumnRow(props) {
    var _this;

    _classCallCheck(this, ColumnRow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColumnRow).call(this, props));
    _this.onMouseEnter = _this.onMouseEnter.bind(_assertThisInitialized(_this));
    _this.onMouseLeave = _this.onMouseLeave.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.elementRef = _react.default.createRef();
    return _this;
  }

  _createClass(ColumnRow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.elementRef.current.addEventListener('mouseenter', this.onMouseEnter);
      this.elementRef.current.addEventListener('mouseleave', this.onMouseLeave);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.elementRef.current.removeEventListener('mouseenter', this.onMouseEnter);
      this.elementRef.current.removeEventListener('mouseleave', this.onMouseLeave);
    }
  }, {
    key: "onToggleHover",
    value: function onToggleHover(toggled) {
      this.props.toggleHover(this.props.rowIndex, toggled);
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter(event) {
      event.preventDefault();
      event.stopPropagation();
      this.onToggleHover(true);
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(event) {
      event.preventDefault();
      event.stopPropagation();
      this.onToggleHover(false);
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var _this$props = this.props,
          onRowClick = _this$props.onRowClick,
          isClickable = _this$props.isClickable,
          dataRow = _this$props.dataRow;

      if (onRowClick && isClickable) {
        onRowClick(dataRow);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          classes = _this$props2.classes,
          isHovered = _this$props2.isHovered,
          isClickable = _this$props2.isClickable;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(classes.root, {
          hovered: isHovered && isClickable
        }),
        onClick: this.onClick,
        ref: this.elementRef
      }, children);
    }
  }]);

  return ColumnRow;
}(_react.PureComponent);

_defineProperty(ColumnRow, "defaultProps", {
  isHovered: false,
  onRowClick: undefined,
  isClickable: false
});

ColumnRow.propTypes = process.env.NODE_ENV !== "production" ? {
  classes: _propTypes.default.object.isRequired,
  dataRow: _propTypes.default.object.isRequired,
  rowIndex: _propTypes.default.number.isRequired,
  isHovered: _propTypes.default.bool,
  toggleHover: _propTypes.default.func.isRequired,
  onRowClick: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  isClickable: _propTypes.default.bool
} : {};

var _default = (0, _styles.withStyles)(styles)(ColumnRow);

exports.default = _default;