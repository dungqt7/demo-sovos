"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ContainerLayer = _interopRequireDefault(require("./ContainerLayer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-undef:0 */
var _ref =
/*#__PURE__*/
_react.default.createElement("div", {
  id: "childrenID"
});

var getContainerLayer = function getContainerLayer() {
  var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultProps = {
    order: 0,
    zIndex: 1200
  };
  var props = Object.assign({}, defaultProps, conf);
  return (0, _enzyme.mount)(_react.default.createElement(_ContainerLayer.default, props, _ref));
};

describe('ContainerLayer', function () {
  describe('style tests', function () {
    it('has zIndex from props', function () {
      var wrapper = getContainerLayer();
      var container = wrapper.find('.sovosSlidingPanelContainer');
      expect(container.get(0).props.style.zIndex).toEqual(1200);
    });
  });
  describe('Children tests', function () {
    it('has children as part of the component', function () {
      var wrapper = getContainerLayer();
      expect(wrapper.find('#childrenID')).toExist();
    });
  });
});