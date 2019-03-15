"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosMonthSelector = require("./SovosMonthSelector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderMonthSelector = function renderMonthSelector(_ref) {
  var format = _ref.format,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      onChange = _ref.onChange,
      selectedMonth = _ref.selectedMonth;
  return (0, _enzyme.mount)(_react.default.createElement(_SovosMonthSelector.SovosMonthSelector, {
    format: format,
    minDate: minDate,
    maxDate: maxDate,
    selectedMonth: selectedMonth,
    onChange: onChange,
    classes: {}
  }));
};

jest.useFakeTimers();
describe('SovosMonthSelector', function () {
  it('calls onChange when previous button is clicked', function () {
    var onChange = jest.fn();
    var wrapper = renderMonthSelector({
      onChange: onChange,
      selectedMonth: 1
    });
    wrapper.find('button.sovosMonthSelector__previousButton').simulate('click');
    jest.runAllTimers();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(wrapper.find('button.sovosMonthSelector__previousButton')).toExist();
  });
  it('calls onChange when next button is clicked', function () {
    var onChange = jest.fn();
    var wrapper = renderMonthSelector({
      onChange: onChange,
      selectedMonth: 0
    });
    wrapper.find('button.sovosMonthSelector__nextButton').simulate('click');
    jest.runAllTimers();
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('has date set to last month when prev button is pressed', function () {
    var output;

    var onChange = function onChange(o) {
      output = o;
    };

    var wrapper = renderMonthSelector({
      onChange: onChange,
      selectedMonth: 1
    });
    wrapper.find('button.sovosMonthSelector__previousButton').simulate('click');
    jest.runAllTimers();
    expect(output).toEqual({
      month: 0,
      year: new Date().getFullYear()
    });
  });
  it('does nothing when next button is clicked and current selection is at maxDate', function () {
    var maxDate = new Date();
    maxDate.setMonth(new Date().getMonth() - 1);
    var onChange = jest.fn();
    var wrapper = renderMonthSelector({
      onChange: onChange,
      maxDate: maxDate
    });
    wrapper.find('button.sovosMonthSelector__nextButton').simulate('click');
    jest.runAllTimers();
    expect(onChange).not.toHaveBeenCalled();
  });
  it('does nothing when previous button is clicked and current selection is at minDate', function () {
    var minDate = new Date();
    minDate.setMonth(new Date().getMonth() + 1);
    var onChange = jest.fn();
    var wrapper = renderMonthSelector({
      onChange: onChange,
      minDate: minDate
    });
    wrapper.find('button.sovosMonthSelector__previousButton').simulate('click');
    jest.runAllTimers();
    expect(onChange).not.toHaveBeenCalled();
  });
  it('has date set to maxDate if maxDate is less than today', function () {
    var minDate = new Date(2010, 0);
    var maxDate = new Date(2010, 5);
    var state = renderMonthSelector({
      onChange: jest.fn(),
      minDate: minDate,
      maxDate: maxDate
    }).state();
    expect(state.selectedMonth).toEqual(5);
    expect(state.selectedYear).toEqual(2010);
  });
  it('formats the date to {monthName, year} when format is "month-name"', function () {
    var output;

    var onChange = function onChange(o) {
      output = o;
    };

    var wrapper = renderMonthSelector({
      onChange: onChange,
      selectedMonth: 0,
      format: 'month-name'
    });
    wrapper.find('button.sovosMonthSelector__nextButton').simulate('click');
    jest.runAllTimers();
    expect(output).toEqual({
      month: 'February',
      year: new Date().getFullYear()
    });
  });
  it('formats the date to {monthNumber, year} when format is "number"', function () {
    var output;

    var onChange = function onChange(o) {
      output = o;
    };

    var wrapper = renderMonthSelector({
      onChange: onChange,
      selectedMonth: 0,
      format: 'number'
    });
    wrapper.find('button.sovosMonthSelector__nextButton').simulate('click');
    jest.runAllTimers();
    expect(output).toEqual({
      month: 1,
      year: new Date().getFullYear()
    });
  });
});