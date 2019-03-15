"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosFilterDateInput = _interopRequireDefault(require("./SovosFilterDateInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SovosFilterDateInput without', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosFilterDateInput.default, {
      label: "test",
      onChange: function onChange() {}
    }));
  });
  it('has add icon style: purple', function () {
    expect(wrapper.find('svg')).toExist();
  });
  it('has no input', function () {
    expect(wrapper.find('input')).not.toExist();
  });
});
describe('SovosFilterDateInput with data', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosFilterDateInput.default, {
      label: "test",
      onChange: function onChange() {},
      data: ['12/1/2020'],
      multiple: true
    }));
  });
  it('has remove icon ', function () {
    expect(wrapper.find('svg').at(1)).toExist();
  });
  it('has input', function () {
    expect(wrapper.find('div').at(4)).toExist();
  });
});
describe('SovosFilterDateInput with single line', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosFilterDateInput.default, {
      label: "test",
      onChange: function onChange() {},
      data: ['12/1/2020']
    }));
  });
  it('has no remove icon', function () {
    expect(wrapper.find('svg').at(1)).not.toExist();
  });
});