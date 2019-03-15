"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosTabContent = _interopRequireDefault(require("./SovosTabContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ref =
/*#__PURE__*/
_react.default.createElement("div", {
  id: "childrenID"
});

var getTabTemplate = function getTabTemplate() {
  var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // eslint-disable-line arrow-body-style
  var defaultProps = {
    selected: true,
    TabProps: {
      label: 'Test'
    }
  };

  var props = _objectSpread({}, defaultProps, conf);

  return (0, _enzyme.mount)(_react.default.createElement(_SovosTabContent.default, props, _ref));
};

describe('SovosTabContent', function () {
  it('has renders children', function () {
    var wrapper = getTabTemplate();
    var container = wrapper.find('#childrenID');
    expect(container.length).toEqual(1);
  });
  it('sets height to 0 if not selected', function () {
    var wrapper = getTabTemplate({
      selected: false
    });
    expect(wrapper.find('div').at(0).prop('style').height).toEqual(0);
  });
  it('does not set height to 0 if selected', function () {
    var wrapper = getTabTemplate({
      selected: true
    });
    expect(wrapper.find('div').at(0).prop('style').height).not.toEqual(0);
  });
});