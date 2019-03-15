"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosAutoCompleteNext = _interopRequireDefault(require("./SovosAutoCompleteNext"));

var _AutoComplete = _interopRequireDefault(require("../internals/auto-complete/AutoComplete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SovosAutoCompleteNext', function () {
  it('should render a component', function () {
    var enzymeWrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosAutoCompleteNext.default, {
      className: "",
      classes: {},
      suggestions: ['foo', 'bar'],
      onChange: jest.fn(),
      value: "",
      label: ""
    }));
    expect(enzymeWrapper.find(_AutoComplete.default)).toExist();
  });
});