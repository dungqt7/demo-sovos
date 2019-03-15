"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ColumnFirstTable = _interopRequireDefault(require("./ColumnFirstTable"));

var _tableData = require("../mocks/tableData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderTable() {
  var isSelectable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _tableData.rows;
  return (0, _enzyme.mount)(_react.default.createElement(_ColumnFirstTable.default, {
    columns: _tableData.columns,
    data: data,
    selectable: isSelectable,
    allSelected: false,
    onRowClick: function onRowClick() {},
    onSelectAllClicked: function onSelectAllClicked() {},
    onSelectRowClicked: function onSelectRowClicked() {},
    selectedRows: [],
    toggleHover: function toggleHover() {},
    displayHeader: true
  }));
}

describe('ColumnFirstTable', function () {
  it('renders each data column', function () {
    var wrapper = renderTable();
    expect(wrapper.find('DataColumn').length).toBe(_tableData.columns.length);
  });
  it('does not render a select column when selectable is false', function () {
    var wrapper = renderTable();
    expect(wrapper.find('SelectColumn')).not.toExist();
  });
  it('does not render an action column when all rows do not have actions', function () {
    var wrapper = renderTable();
    expect(wrapper.find('ActionColumn')).not.toExist();
  });
  it('srender a select column when selectable is true', function () {
    var wrapper = renderTable(true);
    expect(wrapper.find('SelectColumn')).toExist();
  });
  it('renders an action column when rows have actions', function () {
    var actionRows = _tableData.rows.map(function (r) {
      return _objectSpread({}, r, {
        actions: [{
          text: 'test',
          action: function action() {}
        }]
      });
    });

    var wrapper = renderTable(true, actionRows);
    expect(wrapper.find('ActionColumn')).toExist();
  });
});