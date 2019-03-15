"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosFilterTextEntry = _interopRequireDefault(require("./SovosFilterTextEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SovosFilterTextEntry without', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosFilterTextEntry.default, {
      label: "test",
      onChange: function onChange() {}
    }));
  });
  it('has Add icon', function () {
    expect(wrapper.find('svg')).toExist();
  });
  it('has no input', function () {
    expect(wrapper.find('input')).not.toExist();
  });
});
describe('SovosFilterTextEntry with data', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosFilterTextEntry.default, {
      label: "test",
      onChange: function onChange() {},
      data: ['A'],
      multiple: true
    }));
  });
  it('has remove icon', function () {
    expect(wrapper.find('svg').at(1)).toExist();
  });
  it('has input', function () {
    expect(wrapper.find('div').at(4)).toExist();
  });
});
describe('SovosFilterTextEntry with single line', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosFilterTextEntry.default, {
      label: "test",
      onChange: function onChange() {},
      data: ['A']
    }));
  });
  it('has no remove icon', function () {
    expect(wrapper.find('svg').at(1)).not.toExist();
  });
});