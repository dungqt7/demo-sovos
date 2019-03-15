"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _sovosCheckbox = _interopRequireDefault(require("../../sovos-checkbox"));

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
  checkbox: {
    height: 18,
    width: 18,
    '& svg': {
      height: '18px !important',
      width: '18px !important'
    }
  },
  cell: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    width: 18
  }
};

var SelectCell =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SelectCell, _PureComponent);

  function SelectCell(props) {
    var _this;

    _classCallCheck(this, SelectCell);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectCell).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SelectCell, [{
    key: "onClick",
    value: function onClick() {
      var _this$props = this.props,
          onCheck = _this$props.onCheck,
          rowIndex = _this$props.rowIndex;
      onCheck(rowIndex);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          checked = _this$props2.checked,
          classes = _this$props2.classes,
          className = _this$props2.className;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(className, classes.cell)
      }, _react.default.createElement(_sovosCheckbox.default, {
        checked: checked,
        onChange: this.onClick,
        className: classes.checkbox,
        color: "secondary"
      }));
    }
  }]);

  return SelectCell;
}(_react.PureComponent);

_defineProperty(SelectCell, "defaultProps", {
  rowIndex: undefined,
  className: undefined
});

SelectCell.propTypes = process.env.NODE_ENV !== "production" ? {
  checked: _propTypes.default.bool.isRequired,
  classes: _propTypes.default.object.isRequired,
  onCheck: _propTypes.default.func.isRequired,
  rowIndex: _propTypes.default.number,
  className: _propTypes.default.string
} : {};

var _default = (0, _styles.withStyles)(styles)(SelectCell);

exports.default = _default;