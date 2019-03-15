"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.actionPropTypes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _sovosIconMenu = _interopRequireDefault(require("../../sovos-icon-menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionPropTypes = _propTypes.default.shape({
  text: _propTypes.default.string.isRequired,
  action: _propTypes.default.func.isRequired
});

exports.actionPropTypes = actionPropTypes;
var styles = {
  icon: {
    paddingTop: 4
  }
};

var _ref =
/*#__PURE__*/
_react.default.createElement("div", null);

var ActionCell =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ActionCell, _PureComponent);

  function ActionCell(props) {
    var _this;

    _classCallCheck(this, ActionCell);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActionCell).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onDropdownActionClicked", function (action) {
      _this.closeDropdown();

      action();
    });

    _defineProperty(_assertThisInitialized(_this), "closeDropdown", function () {
      _this.setState({
        dropdownOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "expandDropdown", function () {
      _this.setState({
        dropdownOpen: true
      });
    });

    _this.state = {
      dropdownOpen: false
    };
    return _this;
  }

  _createClass(ActionCell, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          className = _this$props.className,
          actions = _this$props.actions;
      var opacity = this.props.isHovered || this.state.dropdownOpen ? '1' : '0';

      if (actions.length) {
        return _react.default.createElement(_sovosIconMenu.default, {
          className: (0, _classnames.default)('sovosActionCell__button', className),
          IconButtonProps: {
            classes: {
              root: classes.icon
            }
          },
          iconElement: _react.default.createElement(_MoreVert.default, {
            style: {
              opacity: opacity
            }
          }),
          onOpen: this.expandDropdown,
          onClose: this.closeDropdown
        }, actions.map(function (action) {
          return _react.default.createElement(_MenuItem.default, {
            key: action.text,
            onClick: function onClick() {
              return _this2.onDropdownActionClicked(action.action);
            }
          }, action.text);
        }));
      }

      return _ref;
    }
  }]);

  return ActionCell;
}(_react.PureComponent);

_defineProperty(ActionCell, "defaultProps", {
  actions: [],
  className: undefined,
  isHovered: false
});

ActionCell.propTypes = process.env.NODE_ENV !== "production" ? {
  actions: _propTypes.default.arrayOf(actionPropTypes),
  isHovered: _propTypes.default.bool,
  className: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(ActionCell);

exports.default = _default;