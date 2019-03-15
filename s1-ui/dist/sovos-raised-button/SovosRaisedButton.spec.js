"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosRaisedButton = _interopRequireDefault(require("./SovosRaisedButton"));

var _Button = _interopRequireDefault(require("../internals/button/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderRaisedButton = function renderRaisedButton(_ref) {
  var color = _ref.color,
      backgroundColor = _ref.backgroundColor,
      onClick = _ref.onClick;
  return (0, _enzyme.mount)(_react.default.createElement(_SovosRaisedButton.default, {
    color: color,
    backgroundColor: backgroundColor,
    onClick: onClick
  }, "Testing"));
};

describe('SovosRaisedButton default', function () {
  var wrapper;
  var onClick;
  beforeEach(function () {
    onClick = jest.fn();
    wrapper = renderRaisedButton({
      onClick: onClick
    });
  });
  it('has Button color set to "primary"', function () {
    expect(wrapper.find(_Button.default).prop('color')).toEqual('primary');
  });
  it('simulates click events', function () {
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
describe('SovosRaisedButton custom', function () {
  var wrapper;
  var backgroundColor = '#e53530';
  var color = '#fedcdf';
  beforeEach(function () {
    wrapper = renderRaisedButton({
      backgroundColor: backgroundColor,
      color: color
    });
  });
  it('has Button backgroundColor set to "#e53530"', function () {
    expect(wrapper.find(_Button.default).prop('variantTheme').contained.backgroundColor).toEqual(backgroundColor);
  });
  it('has Button text color set to "#fedcdf"', function () {
    expect(wrapper.find(_Button.default).prop('variantTheme').contained.color).toEqual(color);
  });
});