"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SovosTable = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _columnPropType = _interopRequireDefault(require("./helper/columnPropType"));

var _ColumnFirstTable = _interopRequireDefault(require("./components/ColumnFirstTable"));

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
    borderCollapse: 'collapse',
    margin: 5
  },
  scroll: {
    overflowX: 'auto'
  }
};

var SovosTable =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SovosTable, _PureComponent);

  function SovosTable(props) {
    var _this;

    _classCallCheck(this, SovosTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SovosTable).call(this, props));
    _this.state = {
      allSelected: false,
      selectedRows: [],
      hoveredIndex: undefined
    };
    _this.selectAllClicked = _this.selectAllClicked.bind(_assertThisInitialized(_this));
    _this.selectRowClicked = _this.selectRowClicked.bind(_assertThisInitialized(_this));
    _this.toggleHover = _this.toggleHover.bind(_assertThisInitialized(_this));
    _this.onColumnSort = _this.onColumnSort.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SovosTable, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.data !== prevProps.data || this.props.columns !== prevProps.columns) {
        this.clearSelected();
      }
    }
  }, {
    key: "onColumnSort",
    value: function onColumnSort(column) {
      if (this.props.onColumnSort) {
        this.props.onColumnSort(column);
        this.clearSelected();
      }
    }
  }, {
    key: "selectRowClicked",
    value: function selectRowClicked(row) {
      var _this2 = this;

      var selectedRows = this.state.selectedRows;
      var selectedIndex = selectedRows.indexOf(row);
      var newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selectedRows, row);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selectedRows.slice(1));
      } else if (selectedIndex === selectedRows.length - 1) {
        newSelected = newSelected.concat(selectedRows.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(selectedRows.slice(0, selectedIndex), selectedRows.slice(selectedIndex + 1));
      }

      this.setState({
        allSelected: newSelected.length === this.props.data.length,
        selectedRows: newSelected
      }, function () {
        return _this2.props.onRowSelection(_this2.state.selectedRows);
      });
    }
  }, {
    key: "selectAllClicked",
    value: function selectAllClicked() {
      var _this3 = this;

      this.setState(function (state, props) {
        var allSelected = !state.allSelected;
        var selectedRows = allSelected ? props.data.map(function (d, i) {
          return i;
        }) : [];
        return {
          allSelected: allSelected,
          selectedRows: selectedRows
        };
      }, function () {
        return _this3.props.onRowSelection(_this3.state.selectedRows);
      });
    }
  }, {
    key: "clearSelected",
    value: function clearSelected() {
      var _this4 = this;

      if (this.state.selectedRows.length || this.state.allSelected) {
        this.setState({
          selectedRows: [],
          allSelected: false
        }, function () {
          return _this4.props.onRowSelection([]);
        });
      }
    }
  }, {
    key: "toggleHover",
    value: function toggleHover(hoveredIndex, isHovered) {
      this.setState(function (state) {
        var newIndex = !isHovered && hoveredIndex === state.hoveredIndex ? undefined : hoveredIndex;
        return {
          hoveredIndex: newIndex
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          columns = _this$props.columns,
          data = _this$props.data,
          classes = _this$props.classes,
          selectable = _this$props.selectable,
          displayHeader = _this$props.displayHeader,
          onRowClick = _this$props.onRowClick,
          onColumnSort = _this$props.onColumnSort,
          sortedColumnId = _this$props.sortedColumnId,
          className = _this$props.className,
          style = _this$props.style;
      var _this$state = this.state,
          allSelected = _this$state.allSelected,
          selectedRows = _this$state.selectedRows;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosTable', classes.root, className),
        style: style
      }, _react.default.createElement("div", {
        className: classes.scroll
      }, _react.default.createElement(_ColumnFirstTable.default, {
        columns: columns,
        data: data,
        selectable: selectable,
        displayHeader: displayHeader,
        allSelected: allSelected,
        onRowClick: onRowClick,
        onSelectAllClicked: this.selectAllClicked,
        onSelectRowClicked: this.selectRowClicked,
        onHeaderClick: onColumnSort ? this.onColumnSort : undefined,
        selectedRows: selectedRows,
        toggleHover: this.toggleHover,
        hoveredIndex: this.state.hoveredIndex,
        sortedColumnId: sortedColumnId
      })));
    }
  }]);

  return SovosTable;
}(_react.PureComponent);

exports.SovosTable = SovosTable;

_defineProperty(SovosTable, "defaultProps", {
  onRowSelection: function onRowSelection() {},
  onRowClick: undefined,
  onColumnSort: undefined,
  selectable: false,
  sortedColumnId: undefined,
  className: undefined,
  style: undefined,
  displayHeader: true
});

_defineProperty(SovosTable, "displayName", 'Table');

SovosTable.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * An array of column ojects to display in the table. This array is assumed to
   * be immutable. If the set of columns changes, a new array must be passed to them
   * to trigger a re-render.
   */
  columns: _propTypes.default.arrayOf(_columnPropType.default).isRequired,

  /**
   * An array of data objects displayed as rows in the table, columns define how
   * data properties are rendered. This array is assumed to
   * be immutable. If the data changes, a new array must be passed to them
   * to trigger a re-render.
   */
  data: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,

  /**
   * Callback triggered when a row is selected.
   */
  onRowSelection: _propTypes.default.func,

  /**
   * Callback triggered when a row is clicked.
   */
  onRowClick: _propTypes.default.func,

  /**
   * Callback triggered when a column header is clicked.
   * The column object is passed in as an argument.
   */
  onColumnSort: _propTypes.default.func,

  /**
   * Display select all and row select checkboxes.
   */
  selectable: _propTypes.default.bool,

  /**
   * The ID of the column that the table is sorted by. Used for styling.
   */
  sortedColumnId: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  displayHeader: _propTypes.default.bool
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosTable);

exports.default = _default;