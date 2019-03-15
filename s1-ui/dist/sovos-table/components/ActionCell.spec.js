"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _sovosIconButton = _interopRequireDefault(require("../../sovos-icon-button"));

var _ActionCell = _interopRequireDefault(require("./ActionCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultActions = [{
  text: 'action 1',
  action: function action() {}
}, {
  text: 'action 2',
  action: function action() {}
}];

function renderCell(isHovered) {
  var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultActions;
  return (0, _enzyme.mount)(_react.default.createElement(_ActionCell.default, {
    actions: actions,
    isHovered: isHovered
  }));
}

describe('ActionCell', function () {
  it('renders a hidden icon by default', function () {
    var wrapper = renderCell(false);
    expect(wrapper.find(_MoreVert.default)).toHaveStyle('opacity', '0');
  });
  it('renders a visible icon when hovered', function () {
    var wrapper = renderCell(true);
    expect(wrapper.find(_MoreVert.default)).toHaveStyle('opacity', '1');
  });
  it('renders an empty div when there are no actions', function () {
    var wrapper = renderCell(true, []);
    expect(wrapper.find(_sovosIconButton.default)).not.toExist();
  });
});