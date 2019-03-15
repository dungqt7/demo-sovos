"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SelectColumn = _interopRequireDefault(require("./SelectColumn"));

var _tableData = require("../mocks/tableData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderColumn() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var columnProps = _objectSpread({
    data: _tableData.rows,
    hoveredIndex: 1,
    displayHeader: true,
    toggleHover: jest.fn(),
    allSelected: false,
    selectedRows: [],
    onSelectAllClicked: jest.fn(),
    onSelectRowClicked: jest.fn()
  }, props);

  return (0, _enzyme.mount)(_react.default.createElement(_SelectColumn.default, columnProps));
}

describe('SelectColumn', function () {
  it('renders an select cell for each row', function () {
    var wrapper = renderColumn();
    expect(wrapper.find('ColumnRow').children().find('SelectCell').length).toBe(_tableData.rows.length);
  });
  it('renders a select all cell in the header row', function () {
    var wrapper = renderColumn();
    expect(wrapper.find('ColumnHeaderRow').children().find('SelectCell')).toExist();
  });
  it('does not render a header row', function () {
    var wrapper = renderColumn({
      displayHeader: false
    });
    expect(wrapper.find('ColumnHeaderRow')).not.toExist();
  });
  it('does not check cells when select all is false and there are no selected rows', function () {
    var wrapper = renderColumn();
    expect(wrapper.find({
      checked: true
    })).not.toExist();
  });
  it('checks all the cells when select all is true', function () {
    var wrapper = renderColumn({
      allSelected: true
    });
    wrapper.find('SelectCell').forEach(function (sc) {
      return expect(sc).toHaveProp('checked', true);
    });
  });
  it('does not check the select all cell when given rows are selected', function () {
    var wrapper = renderColumn({
      selectedRows: [0]
    });
    expect(wrapper.find('SelectCell').at(0)).toHaveProp('checked', false);
  });
  it('does not check unselected cells when given rows are selected', function () {
    var wrapper = renderColumn({
      selectedRows: [0]
    });
    expect(wrapper.find('SelectCell').at(2)).toHaveProp('checked', false);
  });
  it('checks the selected cell when given rows are selected', function () {
    var wrapper = renderColumn({
      selectedRows: [0]
    });
    expect(wrapper.find('SelectCell').at(1)).toHaveProp('checked', true);
  });
});