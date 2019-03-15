"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosTable = require("../sovos-table/SovosTable");

var _tableData = require("../sovos-table/mocks/tableData");

var _SovosTableCard = _interopRequireDefault(require("./SovosTableCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderTableCard = function renderTableCard() {
  return (0, _enzyme.mount)(_react.default.createElement(_SovosTableCard.default, null, _react.default.createElement(_SovosTable.SovosTable, {
    columns: _tableData.columns,
    data: _tableData.rows,
    selectable: true,
    classes: {}
  })));
};

describe('SovosTableCard', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = renderTableCard();
  });
  it('renders', function () {
    expect(wrapper.find('Card')).toExist();
  });
});