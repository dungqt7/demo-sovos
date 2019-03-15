"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.columnProps = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _reactHelpers = require("../../utils/reactHelpers");

var _ColumnHeaderRow = _interopRequireDefault(require("./ColumnHeaderRow"));

var _ColumnRow = _interopRequireDefault(require("./ColumnRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: {
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  }
};
var columnProps = {
  data: _propTypes.default.array.isRequired,
  style: _propTypes.default.object,
  toggleHover: _propTypes.default.func.isRequired,
  hoveredIndex: _propTypes.default.number
};
exports.columnProps = columnProps;

var Column =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Column, _PureComponent);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, _getPrototypeOf(Column).apply(this, arguments));
  }

  _createClass(Column, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          classes = _this$props.classes,
          style = _this$props.style;
      return _react.default.createElement("div", {
        className: classes.root,
        style: style
      }, _react.default.createElement("div", {
        className: classes.flexContainer
      }, (0, _reactHelpers.findChildrenByType)(children, _ColumnHeaderRow.default), (0, _reactHelpers.findChildrenByType)(children, _ColumnRow.default)));
    }
  }]);

  return Column;
}(_react.PureComponent);

_defineProperty(Column, "defaultProps", {
  style: {}
});

Column.propTypes = process.env.NODE_ENV !== "production" ? {
  classes: _propTypes.default.object.isRequired,
  style: _propTypes.default.object,
  children: _propTypes.default.node.isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(Column);

exports.default = _default;