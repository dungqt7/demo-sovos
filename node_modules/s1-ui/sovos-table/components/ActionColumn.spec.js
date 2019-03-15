"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ActionColumn = _interopRequireDefault(require("./ActionColumn"));

var _tableData = require("../mocks/tableData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderColumn() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var columnProps = _objectSpread({
    data: _tableData.rows,
    hoveredIndex: 1,
    toggleHover: jest.fn(),
    displayHeader: true
  }, props);

  return (0, _enzyme.mount)(_react.default.createElement(_ActionColumn.default, columnProps));
}

describe('ActionColumn', function () {
  it('renders an action cell for each row', function () {
    var wrapper = renderColumn({
      displayHeader: true
    });
    expect(wrapper.find('ActionCell').length).toBe(_tableData.rows.length);
  });
  it('renders an empty div in the header row', function () {
    var wrapper = renderColumn({
      displayHeader: true
    });
    expect(wrapper.find('ColumnHeaderRow').children().find('div').at(1).children()).not.toExist();
  });
  it('does not render a column header', function () {
    var wrapper = renderColumn({
      displayHeader: false
    });
    expect(wrapper.find('ColumnHeaderRow')).not.toExist();
  });
});