"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosTable = require("./SovosTable");

var _tableData = require("./mocks/tableData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('SovosTable', function () {
  describe('selectable', function () {
    var wrapper;
    beforeEach(function () {
      wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosTable.SovosTable, {
        columns: _tableData.columns,
        data: _tableData.rows,
        selectable: true,
        classes: {}
      }));
    });
    it('should not clear selectedRows when data and columns have not changed', function () {
      wrapper.setState({
        selectedRows: [0, 2]
      });
      wrapper.setProps({
        columns: _tableData.columns,
        data: _tableData.rows,
        selectable: true
      });
      expect(wrapper.state('selectedRows')).toEqual([0, 2]);
    });
    it('should clear selectedRows when data changes', function () {
      wrapper.setState({
        selectedRows: [0, 2]
      });
      wrapper.setProps({
        columns: _tableData.columns,
        data: _tableData.rows.map(function (row) {
          return row;
        }),
        selectable: true
      });
      expect(wrapper.state('selectedRows')).toEqual([]);
    });
    it('should clear selectedRows when columns changes', function () {
      wrapper.setState({
        selectedRows: [0, 2]
      });
      wrapper.setProps({
        columns: _tableData.columns.map(function (c) {
          return c;
        }),
        data: _tableData.rows,
        selectable: true
      });
      expect(wrapper.state('selectedRows')).toEqual([]);
    });
    describe('select all checkbox', function () {
      describe('unchecked', function () {
        beforeEach(function () {
          wrapper.find('input').at(0).simulate('change');
        });
        it('sets allSelected to true on click', function () {
          expect(wrapper.state('allSelected')).toBe(true);
        });
        it('sets selectedRows to all rows on click', function () {
          expect(wrapper.state('selectedRows').length).toBe(_tableData.rows.length);
        });
      });
      describe('checked', function () {
        beforeEach(function () {
          wrapper.setState({
            allSelected: true,
            selectedRows: [0, 1, 2]
          });
          wrapper.find('input').at(0).simulate('change');
        });
        it('sets allSelected false on click', function () {
          expect(wrapper.state('allSelected')).toBe(false);
        });
        it('sets selectedRows to empty on click', function () {
          expect(wrapper.state('selectedRows').length).toBe(0);
        });
      });
    });
    describe('row checkbox', function () {
      describe('unchecked', function () {
        it('adds row index to selectedRows on click', function () {
          wrapper.find('div input').at(2).simulate('change');
          expect(wrapper.state('selectedRows')).toContain(1);
        });
        it('when all other rows are selected, sets allSelected to true on click', function () {
          wrapper.setState({
            selectedRows: [0, 2]
          });
          wrapper.find('input').at(2).simulate('change');
          expect(wrapper.state('allSelected')).toBe(true);
        });
      });
      describe('checked', function () {
        it('removes row index from selectedRows on click', function () {
          wrapper.setState({
            selectedRows: [1]
          });
          wrapper.find('input').at(2).simulate('change');
          expect(wrapper.state('selectedRows').length).toBe(0);
        });
        it('when all rows are selected, sets allSelected to false on click', function () {
          wrapper.setState({
            allSelected: true,
            selectedRows: [0, 1, 2]
          });
          wrapper.find('input').at(2).simulate('change');
          expect(wrapper.state('allSelected')).toBe(false);
        });
      });
    });
  });
  describe('displayHeader tests', function () {
    function renderTable() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var tableProps = _objectSpread({
        columns: _tableData.columns,
        data: _tableData.rows,
        displayHeader: true,
        selectable: true,
        classes: {}
      }, props);

      return (0, _enzyme.mount)(_react.default.createElement(_SovosTable.SovosTable, tableProps));
    }

    it('should build a table with table headers', function () {
      var wrapper = renderTable();
      expect(wrapper.find('ColumnHeaderRow')).toExist();
    });
    it('should build a table without table headers', function () {
      var wrapper = renderTable({
        displayHeader: false
      });
      expect(wrapper.find('ColumnHeaderRow')).not.toExist();
    });
  });
});