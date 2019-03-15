"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _SovosTabs = _interopRequireDefault(require("./SovosTabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ref =
/*#__PURE__*/
_react.default.createElement(_Tab.default, {
  value: "tab1"
});

var getTabs = function getTabs() {
  var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultProps = {
    onChange: jest.fn(),
    classes: {},
    value: 'tab1'
  };

  var props = _objectSpread({}, defaultProps, conf);

  return (0, _enzyme.mount)(_react.default.createElement(_SovosTabs.default, props, _ref));
};

describe('SovosTabs', function () {
  it('renders the tabs', function () {
    var wrapper = getTabs();
    expect(wrapper.find('Tab')).toExist();
  });
});