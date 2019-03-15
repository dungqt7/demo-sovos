"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnstyledAutoComplete = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSelect = _interopRequireWildcard(require("react-select"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Cancel = _interopRequireDefault(require("@material-ui/icons/Cancel"));

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

var _sovosTextField = _interopRequireDefault(require("../../sovos-text-field"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = function styles(theme) {
  return {
    root: {},
    input: {
      display: 'flex',
      padding: 0
    },
    valueContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden'
    },
    chip: {
      margin: "".concat(theme.spacing.unit / 2, "px ").concat(theme.spacing.unit / 4, "px")
    },
    chipFocused: {
      backgroundColor: (0, _colorManipulator.emphasize)(theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700], 0.08)
    },
    message: {
      padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 2, "px"),
      fontSize: 16,
      fontWeight: 400,
      textAlign: 'left'
    },
    singleValue: {
      fontSize: 16
    },
    placeholder: {
      position: 'absolute',
      left: 2,
      fontSize: 16
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0
    },
    divider: {
      height: theme.spacing.unit * 2
    },
    option: {}
  };
};

var _ref =
/*#__PURE__*/
_react.default.createElement(_ArrowDropDown.default, null);

function DropdownIndicator(props) {
  return _react.default.createElement(_reactSelect.components.DropdownIndicator, props, _ref);
}

function Message(props) {
  return _react.default.createElement(_Typography.default, _extends({
    color: "textSecondary",
    className: props.selectProps.classes.message
  }, props.innerProps), props.children);
}

function inputComponent(_ref2) {
  var inputRef = _ref2.inputRef,
      props = _objectWithoutProperties(_ref2, ["inputRef"]);

  return _react.default.createElement("div", _extends({
    ref: inputRef
  }, props));
}

function Control(props) {
  return _react.default.createElement(_sovosTextField.default, _extends({
    fullWidth: true,
    InputProps: {
      inputComponent: inputComponent,
      inputProps: _objectSpread({
        className: props.selectProps.classes.input,
        inputRef: props.innerRef,
        children: props.children
      }, props.innerProps)
    }
  }, props.selectProps.textFieldProps));
}

function Option(props) {
  return _react.default.createElement(_MenuItem.default, _extends({
    buttonRef: props.innerRef,
    selected: props.isFocused,
    component: "div",
    style: {
      fontWeight: props.isSelected ? 500 : 400
    },
    className: props.selectProps.classes.option
  }, props.innerProps), props.children);
}

function Placeholder(props) {
  return _react.default.createElement(_Typography.default, _extends({
    color: "textSecondary",
    className: props.selectProps.classes.placeholder
  }, props.innerProps), props.children);
}

function SingleValue(props) {
  return _react.default.createElement(_Typography.default, _extends({
    className: props.selectProps.classes.singleValue
  }, props.innerProps), props.children);
}

function ValueContainer(props) {
  /* eslint-disable */
  return _react.default.createElement("div", {
    className: props.selectProps.classes.valueContainer
  }, props.children);
  /* eslint-enable */
}

function MultiValue(props) {
  return _react.default.createElement(_Chip.default, {
    tabIndex: -1,
    label: props.children,
    className: (0, _classnames.default)(props.selectProps.classes.chip, _defineProperty({}, props.selectProps.classes.chipFocused, props.isFocused)),
    onDelete: props.removeProps.onClick,
    deleteIcon: _react.default.createElement(_Cancel.default, props.removeProps)
  });
}

function Menu(props) {
  return _react.default.createElement(_Paper.default, _extends({
    square: true,
    className: props.selectProps.classes.paper
  }, props.innerProps), props.children);
}

var componentOverrides = {
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  LoadingMessage: Message,
  Menu: Menu,
  MultiValue: MultiValue,
  NoOptionsMessage: Message,
  Option: Option,
  Placeholder: Placeholder,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};

function toOptions(suggestions) {
  return suggestions.map(function (s) {
    return {
      value: s,
      label: s
    };
  });
}

var UnstyledAutoComplete =
/*#__PURE__*/
function (_Component) {
  _inherits(UnstyledAutoComplete, _Component);

  _createClass(UnstyledAutoComplete, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var suggestions = props.suggestions;

      if (suggestions !== state.initialSuggestions) {
        return {
          suggestions: toOptions(suggestions),
          initialSuggestions: suggestions
        };
      }

      return null;
    }
  }]);

  function UnstyledAutoComplete(props) {
    var _this;

    _classCallCheck(this, UnstyledAutoComplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UnstyledAutoComplete).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (selectedValue) {
      var value = selectedValue ? selectedValue.value : null;

      _this.props.onChange({
        target: {
          value: value
        }
      }, value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        focused: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      _this.setState({
        focused: false
      });
    });

    var suggestions = props.suggestions;
    _this.state = {
      suggestions: toOptions(suggestions),
      initialSuggestions: suggestions,
      // eslint-disable-line
      focused: false
    };
    return _this;
  }

  _createClass(UnstyledAutoComplete, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          classes = _this$props.classes,
          theme = _this$props.theme,
          value = _this$props.value,
          label = _this$props.label,
          isLoading = _this$props.isLoading,
          onInputChange = _this$props.onInputChange,
          noOptionsMessage = _this$props.noOptionsMessage,
          loadingMessage = _this$props.loadingMessage,
          isMulti = _this$props.isMulti,
          helperText = _this$props.helperText,
          isClearable = _this$props.isClearable;
      var selectStyles = {
        input: function input(base) {
          return _objectSpread({}, base, {
            color: theme.palette.text.primary,
            '& input': {
              font: 'inherit'
            }
          });
        }
      };
      var selectedValue = value ? {
        value: value,
        label: value
      } : null;
      return _react.default.createElement(_reactSelect.default, {
        className: (0, _classnames.default)('sovosAutoComplete', className, classes.root),
        classes: classes,
        styles: selectStyles,
        options: this.state.suggestions,
        components: componentOverrides,
        value: selectedValue,
        onChange: this.handleChange,
        textFieldProps: {
          label: label,
          InputLabelProps: {
            shrink: this.state.focused || !!value
          },
          helperText: helperText,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        },
        placeholder: null,
        isLoading: isLoading,
        onInputChange: onInputChange,
        noOptionsMessage: noOptionsMessage,
        loadingMessage: loadingMessage,
        isMulti: isMulti,
        isClearable: isClearable
      });
    }
  }]);

  return UnstyledAutoComplete;
}(_react.Component);

exports.UnstyledAutoComplete = UnstyledAutoComplete;

_defineProperty(UnstyledAutoComplete, "defaultProps", {
  className: undefined,
  value: undefined,
  label: undefined,
  isLoading: false,
  onInputChange: undefined,
  noOptionsMessage: undefined,
  loadingMessage: undefined,
  isMulti: false,
  helperText: undefined,
  isClearable: true
});

UnstyledAutoComplete.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired,
  theme: _propTypes.default.object.isRequired,
  suggestions: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.string,
  label: _propTypes.default.string,
  isLoading: _propTypes.default.bool,
  onInputChange: _propTypes.default.func,
  noOptionsMessage: _propTypes.default.func,
  loadingMessage: _propTypes.default.func,
  isMulti: _propTypes.default.bool,
  helperText: _propTypes.default.string,
  isClearable: _propTypes.default.bool
} : {};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(UnstyledAutoComplete);

exports.default = _default;