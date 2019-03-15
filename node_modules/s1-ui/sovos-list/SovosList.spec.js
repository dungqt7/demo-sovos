"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosList = _interopRequireDefault(require("./SovosList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var renderList = function renderList(props) {
  return (0, _enzyme.mount)(_react.default.createElement(_SovosList.default, props));
};

var TestComponent = function TestComponent(_ref) {
  var text = _ref.text;
  return _react.default.createElement("div", null, text);
}; // eslint-disable-line react/prop-types


var rowRenderer = function rowRenderer(_ref2) {
  var text = _ref2.text;
  return _react.default.createElement(TestComponent, {
    text: text
  });
}; // eslint-disable-line react/prop-types


var data = [{
  id: 0,
  text: '0'
}, {
  id: 3,
  text: '3'
}, {
  id: 1,
  text: '1'
}];
var testProps = {
  rowRenderer: rowRenderer,
  data: data
};
describe('SovosList', function () {
  it('sorts data properly', function () {
    var sortKey = 'id';

    var ascendingSort = function ascendingSort(a, b) {
      return a[sortKey] - b[sortKey];
    };

    var sortedData = data.slice().sort(ascendingSort);
    var wrapper = renderList(_objectSpread({}, testProps, {
      data: sortedData,
      sortFunction: ascendingSort
    }));
    expect(wrapper.find(TestComponent).at(0)).toHaveText(sortedData[0].text);
    expect(wrapper.find(TestComponent).at(1)).toHaveText(sortedData[1].text);
    expect(wrapper.find(TestComponent).at(2)).toHaveText(sortedData[2].text);

    var descendingSort = function descendingSort(a, b) {
      return b[sortKey] - a[sortKey];
    };

    wrapper = renderList(_objectSpread({}, testProps, {
      data: sortedData,
      sortFunction: descendingSort
    }));
    expect(wrapper.find(TestComponent).at(0)).toHaveText(sortedData[2].text);
    expect(wrapper.find(TestComponent).at(1)).toHaveText(sortedData[1].text);
    expect(wrapper.find(TestComponent).at(2)).toHaveText(sortedData[0].text);
  });
});