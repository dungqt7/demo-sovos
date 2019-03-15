"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDialogOpen = getDialogOpen;
exports.getNumberOfSlides = getNumberOfSlides;
exports.resetStore = resetStore;
exports.removeSlideFromStore = removeSlideFromStore;
exports.removeSlide = removeSlide;
exports.removeSlideFromUnMount = removeSlideFromUnMount;
exports.createNewSlide = createNewSlide;
exports.resetDialogOpen = resetDialogOpen;
exports.setShowDialogOnClose = setShowDialogOnClose;
var slidingPanelStore = {
  numberOfSlides: 0,
  slides: [],
  isDialogOpen: false,
  slidesWithDialog: [],
  slidesWithModal: [],
  closingFromParent: false
};

function getDialogOpen() {
  return slidingPanelStore.isDialogOpen;
}

function getNumberOfSlides() {
  return slidingPanelStore.numberOfSlides;
}

function resetStore() {
  slidingPanelStore.numberOfSlides = 0;
  slidingPanelStore.slides = [];
  slidingPanelStore.isDialogOpen = false;
  slidingPanelStore.slidesWithDialog = [];
  slidingPanelStore.slidesWithModal = [];
  slidingPanelStore.closingFromParent = false;
}

function removeSlideFromStore(slideNumber) {
  if (slidingPanelStore.slides[slideNumber]) {
    slidingPanelStore.numberOfSlides = slideNumber;
    if (slidingPanelStore.slides[slideNumber].props.showDialogOnClose) slidingPanelStore.slidesWithDialog.pop();
    if (slidingPanelStore.slides[slideNumber].props.modal) slidingPanelStore.slidesWithModal.pop();
    slidingPanelStore.slides.length = slideNumber;
  }
}

function removeSlide(slideNumber, forced, fromOverlay) {
  var closeSlide = function closeSlide(index) {
    var requestClose = slidingPanelStore.slides[index].requestClose;

    removeSlideFromStore(index);
    requestClose();
  };

  var hasChildrens = function hasChildrens(slide) {
    return slidingPanelStore.slides.length > slide + 1;
  };

  var closeSlideChildrens = function closeSlideChildrens(slide) {
    if (hasChildrens(slide)) {
      closeSlide(slide + 1);
    }
  };

  var showSlideDialog = function showSlideDialog(slide) {
    slidingPanelStore.isDialogOpen = true;
    slidingPanelStore.slides[slide].showDialog();
  };

  var hideSlideDialog = function hideSlideDialog(slide) {
    slidingPanelStore.isDialogOpen = false;
    slidingPanelStore.slides[slide].hideDialog();
  };

  var getLastSlideWithDialog = function getLastSlideWithDialog() {
    return slidingPanelStore.slidesWithDialog[slidingPanelStore.slidesWithDialog.length - 1];
  };

  var getLastSlideWithModal = function getLastSlideWithModal() {
    return slidingPanelStore.slidesWithModal[slidingPanelStore.slidesWithModal.length - 1];
  };

  var isForcedClose = function isForcedClose() {
    return forced === true;
  };

  var isForcedCloseFromParentSlide = function isForcedCloseFromParentSlide() {
    return forced === true && slidingPanelStore.closingFromParent !== false;
  };

  var closeLatestDialogSlide = function closeLatestDialogSlide() {
    var slide = getLastSlideWithDialog();
    closeSlideChildrens(slide);
    showSlideDialog(slide);
  };

  var hasChildrenSlidesWithDialog = function hasChildrenSlidesWithDialog(slide) {
    return getLastSlideWithDialog() > slide;
  };

  var hasDialog = function hasDialog(slide) {
    return slidingPanelStore.slides[slide].props.showDialogOnClose === true;
  };

  var hasChildrenWithModal = function hasChildrenWithModal(index) {
    return getLastSlideWithModal() > index;
  };

  var isLastSlideModal = function isLastSlideModal() {
    return getLastSlideWithModal() === slidingPanelStore.numberOfSlides - 1;
  };

  var hasModal = function hasModal(index) {
    return slidingPanelStore.slides[index].props.modal;
  };

  if (fromOverlay && slidingPanelStore.slidesWithModal.length > 0) {
    if (hasModal(slideNumber) || hasChildrenWithModal(slideNumber)) {
      if (hasChildrens(slideNumber)) {
        if (hasChildrenWithModal(slideNumber)) {
          if (isLastSlideModal()) {
            return;
          }
          slideNumber = getLastSlideWithModal() + 1;
        } else {
          slideNumber += 1;
        }
      } else {
        return;
      }
    }
  }

  if (slidingPanelStore.isDialogOpen) {
    hideSlideDialog(slideNumber);
  }
  if (isForcedCloseFromParentSlide()) {
    forced = false;
    closeSlide(slideNumber);
    slideNumber = slidingPanelStore.closingFromParent;
    slidingPanelStore.closingFromParent = false;
  }
  if (isForcedClose()) {
    closeSlide(slideNumber);
    return;
  }
  if (hasChildrenSlidesWithDialog(slideNumber)) {
    slidingPanelStore.closingFromParent = slideNumber;
    closeLatestDialogSlide(getLastSlideWithDialog());
  } else if (hasDialog(slideNumber)) {
    closeSlideChildrens(slideNumber);
    showSlideDialog(slideNumber);
  } else {
    closeSlide(slideNumber);
  }
}

function removeSlideFromUnMount(slideNumber) {
  if (slidingPanelStore.numberOfSlides > 0 && slideNumber === 0) removeSlide(slideNumber, true);
}

function createNewSlide(slide) {
  if (slide.props.showDialogOnClose) slidingPanelStore.slidesWithDialog.push(slidingPanelStore.numberOfSlides);
  if (slide.props.modal) slidingPanelStore.slidesWithModal.push(slidingPanelStore.numberOfSlides);
  slidingPanelStore.numberOfSlides += 1;
  slidingPanelStore.slides.push(slide);
}

function resetDialogOpen() {
  slidingPanelStore.closingFromParent = false;
  slidingPanelStore.isDialogOpen = false;
}

function setShowDialogOnClose(slideNumber, value) {
  if (slidingPanelStore.slides[slideNumber]) {
    if (slidingPanelStore.slides[slideNumber].props.showDialogOnClose) {
      slidingPanelStore.slidesWithDialog = slidingPanelStore.slidesWithDialog.filter(function (slideToRemove) {
        return slideToRemove !== slideNumber;
      });
    } else {
      slidingPanelStore.slidesWithDialog.push(slideNumber);
      slidingPanelStore.slidesWithDialog.sort();
    }
    slidingPanelStore.slides[slideNumber].props.showDialogOnClose = value;
  }
}