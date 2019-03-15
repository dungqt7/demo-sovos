"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _Home = _interopRequireDefault(require("@material-ui/icons/Home"));

var _SovosIconButton = _interopRequireWildcard(require("./SovosIconButton"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_Home.default, null);

var renderIconButton = function renderIconButton(_ref) {
  var size = _ref.size,
      color = _ref.color,
      onClick = _ref.onClick;
  return (0, _enzyme.mount)(_react.default.createElement(_SovosIconButton.default, {
    size: size,
    color: color,
    onClick: onClick
  }, _ref2));
};

describe('SovosIconButton', function () {
  describe('default', function () {
    var wrapper;
    var onClick;
    beforeEach(function () {
      onClick = jest.fn();
      wrapper = renderIconButton({
        onClick: onClick
      });
    });
    it('has "medium" size container', function () {
      var style = wrapper.find('button').prop('style');
      expect(style.width).toEqual(_SovosIconButton.sizes.medium.button.width);
    });
    it('has "medium" size icon', function () {
      var style = wrapper.find('svg').prop('style');
      expect(style.width).toEqual(_SovosIconButton.sizes.medium.icon.width);
    });
    it('simulates click events', function () {
      wrapper.find('button').simulate('click');
      expect(onClick).toHaveBeenCalled();
    });
  });
  describe('small size', function () {
    var wrapper;
    beforeEach(function () {
      wrapper = renderIconButton({
        size: 'small'
      });
    });
    it('has "small" size container', function () {
      var style = wrapper.find('button').prop('style');
      expect(style.width).toEqual(_SovosIconButton.sizes.small.button.width);
    });
    it('has "small" size icon', function () {
      var style = wrapper.find('svg').prop('style');
      expect(style.width).toEqual(_SovosIconButton.sizes.small.icon.width);
    });
  });
  describe('medium size', function () {
    var wrapper;
    beforeEach(function () {
      wrapper = renderIconButton({
        size: 'medium'
      });
    });
    it('has "medium" size container', function () {
      var style = wrapper.find('button').prop('style');
      expect(style.width).toEqual(_SovosIconButton.sizes.medium.button.width);
    });
    it('has "medium" size icon', function () {
      var style = wrapper.find('svg').prop('style');
      expect(style.width).toEqual(_SovosIconButton.sizes.medium.icon.width);
    });
  });
  describe('large size', function () {
    var wrapper;
    beforeEach(function () {
      wrapper = renderIconButton({
        size: 'large'
      });
    });
    it('has "large" size container', function () {
      var style = wrapper.find('button').prop('style');
      expect(style.width).toEqual(_SovosIconButton.sizes.large.button.width);
    });
    it('has "large" size icon', function () {
      var style = wrapper.find('svg').prop('style');
      expect(style.width).toEqual(_SovosIconButton.sizes.large.icon.width);
    });
  });
  describe('custom color', function () {
    var wrapper;
    var color = '#fefe00';
    beforeEach(function () {
      wrapper = renderIconButton({
        color: color
      });
    });
    it('has "color" set on icon', function () {
      var style = wrapper.find('svg').prop('style');
      expect(style.color).toEqual((0, _colorManipulator.fade)(color, 0.87));
    });
  });
});