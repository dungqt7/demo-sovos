"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SovosHeroBanner = _interopRequireDefault(require("./SovosHeroBanner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderHeroBanner = function renderHeroBanner(_ref) {
  var subtitle = _ref.subtitle,
      subtitle2 = _ref.subtitle2,
      style = _ref.style,
      textStyle = _ref.textStyle,
      parentPadding = _ref.parentPadding;
  return (0, _enzyme.mount)(_react.default.createElement(_SovosHeroBanner.default, {
    title: "Testing",
    subtitle: subtitle,
    subtitle2: subtitle2,
    style: style,
    textStyle: textStyle,
    parentPadding: parentPadding
  }));
};

describe('SovosHeroBanner', function () {
  describe('custom', function () {
    var wrapper;
    var backgroundImage = 'test.png';
    var backgroundColor = '#123abc';
    var textColor = '#abc123';
    beforeEach(function () {
      wrapper = renderHeroBanner({
        subtitle: 'test',
        subtitle2: 'test',
        style: {
          backgroundImage: backgroundImage,
          backgroundColor: backgroundColor
        },
        textStyle: {
          color: textColor
        }
      });
    });
    it('has backgroundImage set to "backgroundImage" prop', function () {
      var style = wrapper.find('div').at(0).prop('style');
      expect(style.backgroundImage).toEqual(backgroundImage);
    });
    it('has backgroundColor set to "backgroundColor" prop', function () {
      var style = wrapper.find('div').at(0).prop('style');
      expect(style.backgroundColor).toEqual(backgroundColor);
    });
    it('has title textColor set to "textColor" prop', function () {
      var style = wrapper.find('span').at(0).prop('style');
      expect(style.color).toEqual(textColor);
    });
    it('has subtitle1 textColor set to "textColor" prop', function () {
      var style = wrapper.find('span').at(1).prop('style');
      expect(style.color).toEqual(textColor);
    });
    it('has subtitle2 textColor set to "textColor" prop', function () {
      var style = wrapper.find('span').at(2).prop('style');
      expect(style.color).toEqual(textColor);
    });
  });
  describe('container with parentPadding', function () {
    var wrapper;
    var parentPadding = {
      top: 10,
      left: 5,
      bottom: 7
    };
    beforeEach(function () {
      wrapper = renderHeroBanner({
        parentPadding: parentPadding
      });
    });
    it('has margin set to negative parentPadding', function () {
      var style = wrapper.find('div').at(0).prop('style');
      var top = parentPadding.top,
          bottom = parentPadding.bottom,
          left = parentPadding.left;
      var expectedMargin = "".concat(-top, "px 0px ").concat(-bottom, "px ").concat(-left, "px");
      expect(style.margin).toEqual(expectedMargin);
    });
  });
});