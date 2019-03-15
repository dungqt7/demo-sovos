"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosToolbar = _interopRequireDefault(require("./SovosToolbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
_react.default.createElement(_SovosToolbar.default, null);

describe('SovosToolbar', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_ref);
  });
  it('renders', function () {
    expect(wrapper.find('Toolbar')).toExist();
  });
});