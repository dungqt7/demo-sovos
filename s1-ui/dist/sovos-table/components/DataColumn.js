"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _columnPropType = _interopRequireDefault(require("../helper/columnPropType"));

var _DataCell = _interopRequireDefault(require("./DataCell"));

var _Column = _interopRequireWildcard(require("./Column"));

var _ColumnHeaderRow = _interopRequireDefault(require("./ColumnHeaderRow"));

var _ColumnRow = _interopRequireDefault(require("./ColumnRow"));

var _sovosColors = require("../../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
  header: {
    color: (0, _colorManipulator.fade)(_sovosColors.grayMedium, 0.8),
    padding: '7px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: 13
  },
  column: {
    overflow: 'hidden',
    backgroundColor: 'white'
  }
};

var DataColumn =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DataColumn, _PureComponent);

  function DataColumn() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DataColumn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DataColumn)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onHeaderClicked", function () {
      if (_this.props.onHeaderClick) {
        _this.props.onHeaderClick(_this.props.column);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getHeaderStyles", function () {
      var _this$props = _this.props,
          isSortColumn = _this$props.isSortColumn,
          onHeaderClick = _this$props.onHeaderClick;
      return {
        cursor: onHeaderClick ? 'pointer' : 'default',
        color: isSortColumn ? _sovosColors.buttonBlue : undefined
      };
    });

    _defineProperty(_assertThisInitialized(_this), "renderColumnRow", function (dataRow, rowIndex) {
      var _this$props2 = _this.props,
          column = _this$props2.column,
          onRowClick = _this$props2.onRowClick,
          hoveredIndex = _this$props2.hoveredIndex,
          toggleHover = _this$props2.toggleHover,
          rowsClickable = _this$props2.rowsClickable;
      return _react.default.createElement(_ColumnRow.default, {
        key: "dataRow-".concat(dataRow.id || rowIndex),
        toggleHover: toggleHover,
        dataRow: dataRow,
        isHovered: hoveredIndex === rowIndex,
        rowIndex: rowIndex,
        onRowClick: onRowClick,
        isClickable: rowsClickable
      }, _react.default.createElement(_DataCell.default, {
        data: dataRow,
        component: column.component
      }));
    });

    return _this;
  }

  _createClass(DataColumn, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          column = _this$props3.column,
          data = _this$props3.data,
          displayHeader = _this$props3.displayHeader,
          classes = _this$props3.classes,
          onHeaderClick = _this$props3.onHeaderClick,
          otherProps = _objectWithoutProperties(_this$props3, ["column", "data", "displayHeader", "classes", "onHeaderClick"]);

      var headerStyles = this.getHeaderStyles();
      return _react.default.createElement(_Column.default, otherProps, displayHeader && _react.default.createElement(_ColumnHeaderRow.default, {
        onClick: this.onHeaderClicked,
        style: {
          cursor: headerStyles.cursor
        }
      }, _react.default.createElement("div", {
        className: classes.header,
        style: headerStyles
      }, column.title)), data.map(this.renderColumnRow));
    }
  }]);

  return DataColumn;
}(_react.PureComponent);

_defineProperty(DataColumn, "defaultProps", {
  onHeaderClick: undefined,
  onRowClick: undefined,
  isSortColumn: false,
  rowsClickable: false
});

DataColumn.propTypes = process.env.NODE_ENV !== "production" ? _objectSpread({}, _Column.columnProps, {
  column: _columnPropType.default.isRequired,
  onRowClick: _propTypes.default.func,
  onHeaderClick: _propTypes.default.func,
  isSortColumn: _propTypes.default.bool,
  rowsClickable: _propTypes.default.bool,
  displayHeader: _propTypes.default.bool.isRequired
}) : {};

var _default = (0, _styles.withStyles)(styles)(DataColumn);

exports.default = _default;