"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _SovosPaginationFooterNext = _interopRequireDefault(require("./SovosPaginationFooterNext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderPaginationFooter = function renderPaginationFooter(totalItems) {
  var wrapper = (0, _enzyme.mount)(_react.default.createElement(_SovosPaginationFooterNext.default, {
    currentPage: 1,
    itemsPerPage: 50,
    onNextClicked: jest.fn(),
    onPerPageChanged: jest.fn(),
    onPrevClicked: jest.fn(),
    totalItems: totalItems,
    onDirectPageChange: jest.fn()
  }));
  return wrapper;
};

describe('SovosPaginationFooterNext', function () {
  it('calls onPrevClicked when prev button is clicked', function () {
    var wrapper = renderPaginationFooter(73);
    wrapper.find('button').first().simulate('click');
    expect(wrapper.instance().props.onPrevClicked).toHaveBeenCalled();
  });
  it('calls onNextClicked when next button is clicked', function () {
    var wrapper = renderPaginationFooter(73);
    wrapper.find('button').last().simulate('click');
    expect(wrapper.instance().props.onNextClicked).toHaveBeenCalled();
  });
  it('calls onPerPageChanged when items per page is changed', function () {
    var wrapper = renderPaginationFooter(73);
    wrapper.find(_Select.default).prop('onChange')();
    expect(wrapper.instance().props.onPerPageChanged).toHaveBeenCalled();
  });
  it('should render a pagination button for each page', function () {
    var wrapper = renderPaginationFooter(73);
    expect(wrapper.find('.PaginationButton button')).toHaveLength(2);
  });
  it('should not render longpagecontainer with only one page', function () {
    var wrapper = renderPaginationFooter(37);
    expect(wrapper.find('.SovosPaginationLongPageInput')).not.toExist();
  });
  it('should render the longPageContainer with 11 pages', function () {
    var wrapper = renderPaginationFooter(512);
    expect(wrapper.find('.SovosPaginationLongPageInput')).toExist();
  });
});