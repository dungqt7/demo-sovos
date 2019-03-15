"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _AttachFile = _interopRequireDefault(require("@material-ui/icons/AttachFile"));

var _styles = require("@material-ui/core/styles");

var _sovosRaisedButton = _interopRequireDefault(require("../sovos-raised-button"));

var _sovosIconButton = _interopRequireDefault(require("../sovos-icon-button"));

var _sovosTextField = _interopRequireDefault(require("../sovos-text-field"));

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var styles = {
  root: {
    padding: '24px 24px',
    display: 'flex',
    alignItems: 'initial',
    backgroundColor: _sovosColors.grayLight,
    height: 50
  },
  commentField: {
    width: '100%'
  },
  commentInput: {
    marginRight: '1rem',
    fontSize: 13
  },
  error: {
    whiteSpace: 'pre'
  }
};

var _ref =
/*#__PURE__*/
_react.default.createElement(_AttachFile.default, null);

var SovosCommentForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SovosCommentForm, _React$Component);

  function SovosCommentForm(props) {
    var _this;

    _classCallCheck(this, SovosCommentForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SovosCommentForm).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleCommentChanged", function (event) {
      var comment = event.target.value;
      var onCommentContentChange = _this.props.onCommentContentChange;

      if (onCommentContentChange) {
        onCommentContentChange(comment);
      }

      _this.setState({
        comment: comment
      });

      _this.validate(comment);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function () {
      var comment = _this.state.comment;

      if (!comment || comment.length === 0) {
        _this.setState({
          error: 'Comment is empty.'
        });

        return;
      }

      _this.props.handleSubmit(comment);

      _this.setState({
        error: '',
        comment: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "validate", function (comment) {
      if (comment && comment.length > 500) {
        _this.setState({
          error: 'Comment must be less than 500 characters.'
        });

        return false;
      }

      _this.setState({
        error: ''
      });

      return true;
    });

    _this.state = {
      comment: '',
      error: ''
    };
    return _this;
  }

  _createClass(SovosCommentForm, [{
    key: "renderAttachmentIcon",
    value: function renderAttachmentIcon() {
      var handleAttachmentClicked = this.props.handleAttachmentClicked;

      if (handleAttachmentClicked) {
        return _react.default.createElement(_sovosIconButton.default, {
          className: "sovosCommentForm__addAttachmentButton",
          onClick: handleAttachmentClicked
        }, _ref);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          className = _this$props.className,
          style = _this$props.style;
      return _react.default.createElement("form", {
        onSubmit: this.handleSubmit,
        className: (0, _classnames.default)('sovosCommentForm', classes.root, className),
        style: style
      }, _react.default.createElement(_sovosTextField.default, {
        name: "add-comment",
        value: this.state.comment,
        placeholder: "Being typing to leave a comment...",
        multiline: true,
        InputProps: {
          classes: {
            root: classes.commentInput,
            error: classes.error
          },
          disableUnderline: true
        },
        error: !!this.state.error,
        helperText: this.state.error,
        onChange: this.handleCommentChanged,
        className: (0, _classnames.default)('sovosCommentForm__commentField', classes.commentField)
      }), this.renderAttachmentIcon(), _react.default.createElement(_sovosRaisedButton.default, {
        className: "sovosCommentForm__submitButton",
        onClick: this.handleSubmit
      }, "Comment"));
    }
  }]);

  return SovosCommentForm;
}(_react.default.Component);

_defineProperty(SovosCommentForm, "defaultProps", {
  handleAttachmentClicked: undefined,
  onCommentContentChange: undefined,
  style: undefined,
  className: undefined
});

SovosCommentForm.propTypes = process.env.NODE_ENV !== "production" ? {
  handleSubmit: _propTypes.default.func.isRequired,
  handleAttachmentClicked: _propTypes.default.func,
  onCommentContentChange: _propTypes.default.func,
  classes: _propTypes.default.object.isRequired,
  style: _propTypes.default.object,
  className: _propTypes.default.string
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosCommentForm);

exports.default = _default;