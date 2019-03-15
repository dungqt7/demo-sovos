"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNumberOfSlides = getNumberOfSlides;
exports.resetStore = resetStore;
exports.removeSlide = removeSlide;
exports.createNewSlide = createNewSlide;
var slidingPanelStore = {
  numberOfSlides: 0
};

function getNumberOfSlides() {
  return slidingPanelStore.numberOfSlides;
}

function resetStore() {
  slidingPanelStore.numberOfSlides = 0;
}

function removeSlide() {
  slidingPanelStore.numberOfSlides -= 1;
}

function createNewSlide() {
  slidingPanelStore.numberOfSlides += 1;
}