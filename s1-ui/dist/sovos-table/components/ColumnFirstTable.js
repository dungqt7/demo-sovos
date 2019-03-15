"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _DataColumn = _interopRequireDefault(require("./DataColumn"));

var _SelectColumn = _interopRequireDefault(require("./SelectColumn"));

var _ActionColumn = _interopRequireDefault(require("./ActionColumn"));

var _columnPropType = _interopRequireDefault(require("../helper/columnPropType"));

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0
  }
};

function getWidthOptionsFromType(type) {
  switch (type) {
    case 'greedy':
      return {
        grow: 1,
        shrink: 100,
        min: 150
      };

    case 'no-wrap':
    case 'currency':
      return {
        grow: 0,
        shrink: 0
      };

    default:
      return {
        grow: 1,
        shrink: 1,
        max: 150,
        min: 80
      };
  }
} // If no columns are greedy make all columns greedy


function getColumns(columnConfig) {
  // Hydrate widthConfig from type
  var columnsWithWidthConfig = columnConfig.map(function (config) {
    return _objectSpread({
      widthConfig: _objectSpread({}, getWidthOptionsFromType(config.type), config.widthConfig)
    }, config);
  }); // Clone config and populate default options

  var columns = columnsWithWidthConfig.map(function (column) {
    // If there are no greedy columns all columns should be greedy
    var optionsStyle = {
      flexGrow: column.widthConfig.grow,
      flexShrink: column.widthConfig.shrink,
      flexBasis: column.widthConfig.basis,
      minWidth: column.widthConfig.min,
      maxWidth: column.widthConfig.max
    }; // Manually configured styles should overwrite options

    var columnStyle = _objectSpread({}, optionsStyle, column.style);

    return _objectSpread({
      style: columnStyle
    }, column);
  });
  return columns;
}

var ColumnFirstTable =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ColumnFirstTable, _PureComponent);

  function ColumnFirstTable() {
    _classCallCheck(this, ColumnFirstTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColumnFirstTable).apply(this, arguments));
  }

  _createClass(ColumnFirstTable, [{
    key: "rowsClickable",
    value: function rowsClickable() {
      return !!this.props.onRowClick;
    }
  }, {
    key: "renderActionColumn",
    value: function renderActionColumn() {
      var _this$props = this.props,
          data = _this$props.data,
          toggleHover = _this$props.toggleHover,
          hoveredIndex = _this$props.hoveredIndex,
          allSelected = _this$props.allSelected,
          selectedRows = _this$props.selectedRows,
          displayHeader = _this$props.displayHeader;

      if (data.find(function (d) {
        return d.actions;
      })) {
        return _react.default.createElement(_ActionColumn.default, {
          data: data,
          displayHeader: displayHeader,
          toggleHover: toggleHover,
          hoveredIndex: hoveredIndex,
          allSelected: allSelected,
          selectedRows: selectedRows,
          rowsClickable: this.rowsClickable()
        });
      }

      return null;
    }
  }, {
    key: "renderSelectColumn",
    value: function renderSelectColumn() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          selectable = _this$props2.selectable,
          displayHeader = _this$props2.displayHeader,
          allSelected = _this$props2.allSelected,
          onSelectAllClicked = _this$props2.onSelectAllClicked,
          onSelectRowClicked = _this$props2.onSelectRowClicked,
          selectedRows = _this$props2.selectedRows,
          toggleHover = _this$props2.toggleHover,
          hoveredIndex = _this$props2.hoveredIndex;

      if (selectable) {
        return _react.default.createElement(_SelectColumn.default, {
          data: data,
          displayHeader: displayHeader,
          allSelected: allSelected,
          onSelectAllClicked: onSelectAllClicked,
          onSelectRowClicked: onSelectRowClicked,
          selectedRows: selectedRows,
          toggleHover: toggleHover,
          hoveredIndex: hoveredIndex,
          rowsClickable: this.rowsClickable()
        });
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props3 = this.props,
          classes = _this$props3.classes,
          columns = _this$props3.columns,
          data = _this$props3.data,
          displayHeader = _this$props3.displayHeader,
          onRowClick = _this$props3.onRowClick,
          toggleHover = _this$props3.toggleHover,
          hoveredIndex = _this$props3.hoveredIndex,
          onHeaderClick = _this$props3.onHeaderClick,
          sortedColumnId = _this$props3.sortedColumnId;
      return _react.default.createElement("div", {
        className: classes.root
      }, this.renderSelectColumn(), getColumns(columns).map(function (column, index) {
        return _react.default.createElement(_DataColumn.default, {
          key: "dataColumn-".concat(column.id || index),
          column: column,
          data: data,
          displayHeader: displayHeader,
          style: column.style,
          onRowClick: onRowClick,
          toggleHover: toggleHover,
          hoveredIndex: hoveredIndex,
          onHeaderClick: onHeaderClick,
          isSortColumn: sortedColumnId === column.id,
          rowsClickable: _this.rowsClickable()
        });
      }), this.renderActionColumn());
    }
  }]);

  return ColumnFirstTable;
}(_react.PureComponent);

_defineProperty(ColumnFirstTable, "defaultProps", {
  hoveredIndex: undefined,
  onHeaderClick: undefined,
  onRowClick: undefined,
  sortedColumnId: undefined
});

ColumnFirstTable.propTypes = process.env.NODE_ENV !== "production" ? {
  columns: _propTypes.default.arrayOf(_columnPropType.default).isRequired,
  data: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  selectable: _propTypes.default.bool.isRequired,
  allSelected: _propTypes.default.bool.isRequired,
  onRowClick: _propTypes.default.func,
  onSelectAllClicked: _propTypes.default.func.isRequired,
  onSelectRowClicked: _propTypes.default.func.isRequired,
  onHeaderClick: _propTypes.default.func,
  selectedRows: _propTypes.default.arrayOf(_propTypes.default.number).isRequired,
  sortedColumnId: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  toggleHover: _propTypes.default.func.isRequired,
  hoveredIndex: _propTypes.default.number,
  classes: _propTypes.default.object.isRequired,
  displayHeader: _propTypes.default.bool.isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(ColumnFirstTable);

exports.default = _default;