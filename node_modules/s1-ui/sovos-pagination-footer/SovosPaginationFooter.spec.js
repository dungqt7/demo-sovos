"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _sovosSelect = _interopRequireDefault(require("../sovos-select"));

var _SovosPaginationFooter = _interopRequireDefault(require("./SovosPaginationFooter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SovosPaginationFooter', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosPaginationFooter.default, {
      endItem: 50,
      itemsPerPage: 50,
      onNextClicked: jest.fn(),
      onPerPageChanged: jest.fn(),
      onPrevClicked: jest.fn(),
      startItem: 1,
      totalItems: 100
    }));
  });
  it('calls onPrevClicked when prev button is clicked', function () {
    wrapper.find('button').first().simulate('click');
    expect(wrapper.instance().props.onPrevClicked).toHaveBeenCalled();
  });
  it('calls onNextClicked when next button is clicked', function () {
    wrapper.find('button').last().simulate('click');
    expect(wrapper.instance().props.onNextClicked).toHaveBeenCalled();
  });
  it('calls onPerPageChanged when items per page is changed', function () {
    wrapper.find(_sovosSelect.default).prop('onChange')();
    expect(wrapper.instance().props.onPerPageChanged).toHaveBeenCalled();
  });
});