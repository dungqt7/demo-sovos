"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CONFIRMATION = 'confirmation';
var WARNING = process.env.NODE_ENV !== "production" ? 'warning' : {};
var ERROR = 'error';
var styles = {
  root: {
    padding: '0px, 20px'
  },
  content: {
    height: '50px',
    rightMargin: '30px',
    color: _sovosColors.neutralWhite
  },
  confirmation: {
    backgroundColor: _sovosColors.blueDark
  },
  warning: {
    backgroundColor: _sovosColors.yellowMedium
  },
  error: {
    backgroundColor: _sovosColors.redMedium
  },
  actionButton: {
    color: _sovosColors.neutralWhite,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
};

var SovosSnackbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SovosSnackbar, _React$Component);

  function SovosSnackbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SovosSnackbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SovosSnackbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getSnackBarWidth", function () {
      switch (_this.props.length) {
        case 'short':
          return '300px';

        case 'medium':
          return '600px';

        case 'long':
        default:
          return '100%';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getSnackBarAction", function () {
      var classes = _this.props.classes;
      var actionLabel = _this.props.actionLabel;

      if (!actionLabel && _this.props.variant === ERROR) {
        actionLabel = 'CLOSE';
      }

      if (actionLabel) {
        return _react.default.createElement(_Button.default, {
          disableRipple: true,
          classes: {
            root: classes.actionButton
          },
          className: "sovosSnackbar__actionButton",
          onClick: _this.handleOnAction
        }, actionLabel);
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "getAutoHideDuration", function () {
      if (_this.props.variant !== ERROR) {
        return 4000;
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnAction", function () {
      var _this$props = _this.props,
          onAction = _this$props.onAction,
          onClose = _this$props.onClose;

      if (onAction) {
        onAction();
      } else {
        onClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnClose", function (reason) {
      if (reason !== 'clickaway') {
        _this.props.onClose();
      }
    });

    return _this;
  }

  _createClass(SovosSnackbar, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          message = _this$props2.message,
          variant = _this$props2.variant,
          className = _this$props2.className,
          style = _this$props2.style;
      var width = this.getSnackBarWidth();
      return _react.default.createElement(_Snackbar.default, {
        classes: {
          root: classes.root
        },
        className: (0, _classnames.default)('sovosSnackbar', className),
        style: _objectSpread({
          maxWidth: width,
          width: width
        }, style),
        open: this.props.open,
        autoHideDuration: this.getAutoHideDuration(),
        onClose: this.handleOnClose
      }, _react.default.createElement(_SnackbarContent.default, {
        className: classes[variant.toLowerCase()],
        classes: {
          root: classes.content
        },
        style: {
          maxWidth: width,
          width: width
        },
        message: message,
        action: this.getSnackBarAction()
      }));
    }
  }]);

  return SovosSnackbar;
}(_react.default.Component);

_defineProperty(SovosSnackbar, "defaultProps", {
  open: false,
  length: 'long',
  message: '',
  actionLabel: '',
  variant: CONFIRMATION,
  onAction: undefined,
  className: undefined,
  style: undefined
});

_defineProperty(SovosSnackbar, "displayName", 'Snackbar');

SovosSnackbar.propTypes = process.env.NODE_ENV !== "production" ? {
  open: _propTypes.default.bool,
  length: _propTypes.default.string,
  message: _propTypes.default.string,
  actionLabel: _propTypes.default.string,
  variant: _propTypes.default.oneOf([CONFIRMATION, WARNING, ERROR]),
  onClose: _propTypes.default.func.isRequired,
  onAction: _propTypes.default.func,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  style: _propTypes.default.object
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosSnackbar);

exports.default = _default;