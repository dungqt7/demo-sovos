"use strict";

var SlidingPanelStore = _interopRequireWildcard(require("./SovosSlidingPanelStore"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

describe('SlidingPanelStore', function () {
  beforeEach(function () {
    SlidingPanelStore.resetStore();
  });
  describe('Adding slides', function () {
    it('Has one slide', function () {
      expect(SlidingPanelStore.getNumberOfSlides()).toEqual(0);
      SlidingPanelStore.createNewSlide();
      expect(SlidingPanelStore.getNumberOfSlides()).toEqual(1);
    });
    it('Has 5 slides', function () {
      expect(SlidingPanelStore.getNumberOfSlides()).toEqual(0);
      SlidingPanelStore.createNewSlide();
      SlidingPanelStore.createNewSlide();
      SlidingPanelStore.createNewSlide();
      SlidingPanelStore.createNewSlide();
      SlidingPanelStore.createNewSlide();
      expect(SlidingPanelStore.getNumberOfSlides()).toEqual(5);
    });
  });
  describe('removing slides', function () {
    beforeEach(function () {
      SlidingPanelStore.createNewSlide();
      SlidingPanelStore.createNewSlide();
      SlidingPanelStore.createNewSlide();
      SlidingPanelStore.createNewSlide();
      SlidingPanelStore.createNewSlide();
    });
    it('Removes a slide', function () {
      expect(SlidingPanelStore.getNumberOfSlides()).toEqual(5);
      SlidingPanelStore.removeSlide();
      expect(SlidingPanelStore.getNumberOfSlides()).toEqual(4);
    });
    it('Removes all the slides', function () {
      expect(SlidingPanelStore.getNumberOfSlides()).toEqual(5);
      SlidingPanelStore.removeSlide();
      SlidingPanelStore.removeSlide();
      SlidingPanelStore.removeSlide();
      SlidingPanelStore.removeSlide();
      SlidingPanelStore.removeSlide();
      expect(SlidingPanelStore.getNumberOfSlides()).toEqual(0);
    });
  });
});