"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosFlatButton = _interopRequireDefault(require("./SovosFlatButton"));

var _Button = _interopRequireDefault(require("../internals/button/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderFlatButton = function renderFlatButton(_ref) {
  var color = _ref.color,
      onClick = _ref.onClick;
  return (0, _enzyme.mount)(_react.default.createElement(_SovosFlatButton.default, {
    color: color,
    onClick: onClick
  }, "Testing"));
};

describe('SovosFlatButton default', function () {
  var wrapper;
  var onClick;
  beforeEach(function () {
    onClick = jest.fn();
    wrapper = renderFlatButton({
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
describe('SovosFlatButton custom', function () {
  var wrapper;
  var color = '#fedcdf';
  beforeEach(function () {
    wrapper = renderFlatButton({
      color: color
    });
  });
  it('has Button text color set to "#fedcdf"', function () {
    expect(wrapper.find(_Button.default).prop('variantTheme').text.color).toEqual(color);
  });
});