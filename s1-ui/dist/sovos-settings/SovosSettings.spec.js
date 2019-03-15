"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosSettings = _interopRequireDefault(require("./SovosSettings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
_react.default.createElement(_SovosSettings.default, null, _react.default.createElement("div", null));

describe('SovosSettings', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_ref);
  });
  it('renders', function () {
    expect(wrapper.find('.sovosSettings')).toExist();
  });
});