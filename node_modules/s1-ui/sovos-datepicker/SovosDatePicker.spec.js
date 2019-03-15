"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _SovosDatePicker = _interopRequireDefault(require("./SovosDatePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timezoneName = 'America/Los_Angeles';
describe('SovosDatePicker', function () {
  var wrapper;
  var onChange;

  var _ref =
  /*#__PURE__*/
  _react.default.createElement(_SovosDatePicker.default, {
    onChange: onChange,
    timezoneName: timezoneName
  });

  beforeEach(function () {
    onChange = jest.fn();
    wrapper = (0, _enzyme.shallow)(_ref);
  });
  it('onChange adjusts selected date to match the timezone', function () {
    wrapper.instance().onInputChange((0, _momentTimezone.default)()); // get the date from the onChange handler

    var dateValue = onChange.mock.calls[0][1];
    expect(dateValue.getTimezoneOffset()).toBe((0, _momentTimezone.default)().tz(timezoneName).toDate().getTimezoneOffset());
  });
});