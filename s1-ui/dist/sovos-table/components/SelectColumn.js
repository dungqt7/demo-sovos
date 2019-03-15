"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Column = _interopRequireWildcard(require("./Column"));

var _ColumnHeaderRow = _interopRequireDefault(require("./ColumnHeaderRow"));

var _ColumnRow = _interopRequireDefault(require("./ColumnRow"));

var _SelectCell = _interopRequireDefault(require("./SelectCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
  columnStyle: {
    flexGrow: 0,
    flexShrink: 0
  }
};

var SelectColumn =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SelectColumn, _PureComponent);

  function SelectColumn() {
    _classCallCheck(this, SelectColumn);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectColumn).apply(this, arguments));
  }

  _createClass(SelectColumn, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          displayHeader = _this$props.displayHeader,
          allSelected = _this$props.allSelected,
          selectedRows = _this$props.selectedRows,
          onSelectAllClicked = _this$props.onSelectAllClicked,
          onSelectRowClicked = _this$props.onSelectRowClicked,
          hoveredIndex = _this$props.hoveredIndex,
          toggleHover = _this$props.toggleHover,
          rowsClickable = _this$props.rowsClickable,
          classes = _this$props.classes,
          otherProps = _objectWithoutProperties(_this$props, ["data", "displayHeader", "allSelected", "selectedRows", "onSelectAllClicked", "onSelectRowClicked", "hoveredIndex", "toggleHover", "rowsClickable", "classes"]);

      return _react.default.createElement(_Column.default, _extends({
        classes: {
          root: classes.columnStyle
        }
      }, otherProps), displayHeader && _react.default.createElement(_ColumnHeaderRow.default, null, _react.default.createElement(_SelectCell.default, {
        checked: allSelected,
        onCheck: onSelectAllClicked,
        className: "sovosTable__selectAll"
      })), data.map(function (dataRow, rowIndex) {
        return _react.default.createElement(_ColumnRow.default, {
          key: "selectRow-".concat(dataRow.id || rowIndex),
          toggleHover: toggleHover,
          dataRow: dataRow,
          isHovered: hoveredIndex === rowIndex,
          rowIndex: rowIndex,
          isClickable: rowsClickable
        }, _react.default.createElement(_SelectCell.default, {
          checked: allSelected || selectedRows.includes(rowIndex),
          onCheck: onSelectRowClicked,
          rowIndex: rowIndex,
          className: "sovosTable__selectRow"
        }));
      }));
    }
  }]);

  return SelectColumn;
}(_react.PureComponent);

_defineProperty(SelectColumn, "defaultProps", {
  rowsClickable: false
});

SelectColumn.propTypes = process.env.NODE_ENV !== "production" ? _objectSpread({
  allSelected: _propTypes.default.bool.isRequired,
  selectedRows: _propTypes.default.arrayOf(_propTypes.default.number).isRequired,
  onSelectAllClicked: _propTypes.default.func.isRequired,
  onSelectRowClicked: _propTypes.default.func.isRequired,
  rowsClickable: _propTypes.default.bool,
  classes: _propTypes.default.object.isRequired,
  displayHeader: _propTypes.default.bool.isRequired
}, _Column.columnProps) : {};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(SelectColumn);

exports.default = _default;