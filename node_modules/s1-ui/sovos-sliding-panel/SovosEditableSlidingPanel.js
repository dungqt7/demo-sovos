"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _classNameHelpers = _interopRequireDefault(require("../utils/classNameHelpers"));

var _sovosRaisedButton = _interopRequireDefault(require("../sovos-raised-button"));

var _SovosSlidingPanel = _interopRequireDefault(require("./SovosSlidingPanel"));

var _SovosSlidingPanelHeader = _interopRequireDefault(require("./components/SovosSlidingPanelHeader"));

var _SovosSlidingPanelHeaderActionButtons = _interopRequireDefault(require("./components/SovosSlidingPanelHeaderActionButtons"));

var _SovosSlidingPanelHeaderAdditionalButtons = _interopRequireDefault(require("./components/SovosSlidingPanelHeaderAdditionalButtons"));

var _CloseDialog = _interopRequireDefault(require("./components/closeDialog/CloseDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderAdditionalButtons(additionalButtons) {
  if (additionalButtons) {
    return _react.default.createElement(_SovosSlidingPanelHeaderAdditionalButtons.default, null, additionalButtons);
  }

  return null;
}

var defaultSaveButtonChildren = 'Save';
var defaultCancelButtonChildren = 'Cancel';

var SovosEditableSlidingPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(SovosEditableSlidingPanel, _Component);

  function SovosEditableSlidingPanel(props) {
    var _this;

    _classCallCheck(this, SovosEditableSlidingPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SovosEditableSlidingPanel).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onCancel", function () {
      return _this.setState({
        openDialog: false
      }, _this.props.onClose());
    });

    _defineProperty(_assertThisInitialized(_this), "hideDialog", function () {
      return _this.setState({
        openDialog: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showDialog", function () {
      if (_this.props.isDirty()) {
        _this.setState({
          openDialog: true
        });
      } else {
        _this.props.onClose();
      }
    });

    _this.state = {
      openDialog: false
    };
    return _this;
  }

  _createClass(SovosEditableSlidingPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          additionalButtons = _this$props.additionalButtons,
          children = _this$props.children,
          onClose = _this$props.onClose,
          CancelButtonProps = _this$props.CancelButtonProps,
          SaveButtonProps = _this$props.SaveButtonProps,
          CloseDialogProps = _this$props.CloseDialogProps,
          title = _this$props.title,
          className = _this$props.className,
          panelProps = _objectWithoutProperties(_this$props, ["additionalButtons", "children", "onClose", "CancelButtonProps", "SaveButtonProps", "CloseDialogProps", "title", "className"]);

      var OKButtonProps = CloseDialogProps.OKButtonProps,
          DialogCancelButtonProps = CloseDialogProps.CancelButtonProps,
          closeDialogProps = _objectWithoutProperties(CloseDialogProps, ["OKButtonProps", "CancelButtonProps"]);

      if (!SaveButtonProps.children) {
        SaveButtonProps.children = defaultSaveButtonChildren;
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_SovosSlidingPanel.default, _extends({
        className: (0, _classnames.default)('sovosEditableSlidingPanel', className),
        onClose: this.showDialog
      }, panelProps), _react.default.createElement(_SovosSlidingPanelHeader.default, {
        title: title
      }, _react.default.createElement(_SovosSlidingPanelHeaderActionButtons.default, null, _react.default.createElement(_sovosRaisedButton.default, _extends({
        color: "secondary",
        onClick: this.showDialog
      }, (0, _classNameHelpers.default)(CancelButtonProps, 'sovosEditableSlidingPanel__cancelButton'))), _react.default.createElement(_sovosRaisedButton.default, (0, _classNameHelpers.default)(SaveButtonProps, 'sovosEditableSlidingPanel__saveButton'))), renderAdditionalButtons(additionalButtons)), children), _react.default.createElement(_CloseDialog.default, _extends({
        open: this.state.openDialog
      }, closeDialogProps, {
        OKButtonProps: _objectSpread({}, OKButtonProps, {
          onClick: this.onCancel
        }),
        CancelButtonProps: _objectSpread({}, DialogCancelButtonProps, {
          onClick: this.hideDialog
        })
      })));
    }
  }]);

  return SovosEditableSlidingPanel;
}(_react.Component);

_defineProperty(SovosEditableSlidingPanel, "defaultProps", {
  additionalButtons: null,
  CloseDialogProps: {
    DialogTitleProps: {
      className: '',
      children: 'Are you sure you want to close this slide, without saving the information?.'
    },
    DialogContentProps: {
      className: '',
      children: 'Information not saved'
    },
    DialogActionProps: {
      className: ''
    },
    OKButtonProps: {
      children: 'Ok'
    },
    CancelButtonProps: {
      children: 'Cancel'
    }
  },
  title: '',
  CancelButtonProps: {
    children: defaultCancelButtonChildren
  },
  className: undefined
});

SovosEditableSlidingPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  additionalButtons: _propTypes.default.arrayOf(_propTypes.default.element),
  children: _propTypes.default.node.isRequired,
  CancelButtonProps: _propTypes.default.shape({
    children: _propTypes.default.node,
    className: _propTypes.default.string
  }),
  SaveButtonProps: _propTypes.default.shape({
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    onClick: _propTypes.default.func.isRequired,
    disabled: _propTypes.default.bool
  }).isRequired,
  CloseDialogProps: _propTypes.default.shape({
    DialogTitleProps: _propTypes.default.shape({
      className: _propTypes.default.string,
      children: _propTypes.default.node
    }),
    DialogContentProps: _propTypes.default.shape({
      className: _propTypes.default.string,
      children: _propTypes.default.node
    }),
    DialogActionProps: _propTypes.default.shape({
      className: _propTypes.default.string
    }),
    OKButtonProps: _propTypes.default.shape({
      children: _propTypes.default.node,
      className: _propTypes.default.string
    }),
    CancelButtonProps: _propTypes.default.shape({
      children: _propTypes.default.node,
      className: _propTypes.default.string
    })
  }),
  isDirty: _propTypes.default.func.isRequired,
  onClose: _propTypes.default.func.isRequired,
  title: _propTypes.default.node,
  className: _propTypes.default.string
} : {};
var _default = SovosEditableSlidingPanel;
exports.default = _default;