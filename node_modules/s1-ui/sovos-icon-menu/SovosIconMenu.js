"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _reactHelpers = require("../utils/reactHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: {
    padding: 0,
    height: 40,
    width: 40,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
};

var SovosIconMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(SovosIconMenu, _Component);

  function SovosIconMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SovosIconMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SovosIconMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      anchorEl: null
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var onOpen = _this.props.onOpen;

      _this.setState({
        anchorEl: event.currentTarget
      });

      if (onOpen) {
        onOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMenuClose", function () {
      var onClose = _this.props.onClose;

      _this.setState({
        anchorEl: null
      });

      if (onClose) {
        onClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMenuItemClick", function (onClick) {
      return function () {
        _this.onMenuClose();

        if (onClick) {
          onClick();
        }
      };
    });

    return _this;
  }

  _createClass(SovosIconMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          classes = _this$props.classes,
          className = _this$props.className,
          IconButtonProps = _this$props.IconButtonProps,
          iconElement = _this$props.iconElement,
          MenuProps = _this$props.MenuProps,
          style = _this$props.style;
      var anchorEl = this.state.anchorEl;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_IconButton.default, _extends({}, IconButtonProps, {
        onClick: this.onClick,
        disableRipple: true,
        classes: {
          root: classes.root
        },
        style: style,
        className: (0, _classnames.default)('sovosIconMenu', className)
      }), iconElement), _react.default.createElement(_Menu.default, _extends({}, MenuProps, {
        className: "sovosIconMenu__menu",
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom'
        },
        transformOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        anchorEl: anchorEl,
        onClose: this.onMenuClose,
        open: Boolean(anchorEl),
        getContentAnchorEl: null
      }), (0, _reactHelpers.findChildrenByType)(children, _MenuItem.default).map(function (menuItem) {
        var props = menuItem.props;
        return _react.default.cloneElement(menuItem, _objectSpread({}, props, {
          className: (0, _classnames.default)('sovosIconMenu__menuItem', props.className),
          onClick: _this2.onMenuItemClick(props.onClick)
        }));
      })));
    }
  }]);

  return SovosIconMenu;
}(_react.Component);

_defineProperty(SovosIconMenu, "defaultProps", {
  className: undefined,
  IconButtonProps: {},
  MenuProps: {},
  style: undefined,
  onOpen: undefined,
  onClose: undefined
});

_defineProperty(SovosIconMenu, "displayName", 'IconMenu');

SovosIconMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  IconButtonProps: _propTypes.default.object,
  iconElement: _propTypes.default.element.isRequired,
  MenuProps: _propTypes.default.object,
  style: _propTypes.default.object,
  onOpen: _propTypes.default.func,
  onClose: _propTypes.default.func
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosIconMenu);

exports.default = _default;