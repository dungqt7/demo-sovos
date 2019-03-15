"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactAutosuggest = _interopRequireDefault(require("react-autosuggest"));

var _match = _interopRequireDefault(require("autosuggest-highlight/match"));

var _parse = _interopRequireDefault(require("autosuggest-highlight/parse"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _styles = require("@material-ui/core/styles");

var _sovosTextField = _interopRequireDefault(require("../sovos-text-field"));

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function renderInput(inputProps) {
  var classes = inputProps.classes,
      ref = inputProps.ref,
      other = _objectWithoutProperties(inputProps, ["classes", "ref"]);

  return _react.default.createElement(_sovosTextField.default, {
    fullWidth: true,
    InputProps: _objectSpread({
      inputRef: ref
    }, classes, other)
  });
}

function renderSuggestionsContainer(options) {
  var containerProps = options.containerProps,
      children = options.children;
  return _react.default.createElement(_Paper.default, _extends({}, containerProps, {
    square: true
  }), children);
}

function getSuggestionValue(suggestion) {
  return suggestion;
}

var styles = function styles(theme) {
  return {
    container: {
      flexGrow: 1,
      position: 'relative'
    },
    suggestionsContainerOpen: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0
    },
    suggestion: {
      display: 'block'
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      lineHeight: '24px',
      minHeight: 24,
      fontSize: 13
    }
  };
};

var SovosAutoComplete =
/*#__PURE__*/
function (_Component) {
  _inherits(SovosAutoComplete, _Component);

  _createClass(SovosAutoComplete, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.value !== state.prevValue) {
        return {
          prevValue: props.value
        };
      }

      return null;
    }
  }]);

  function SovosAutoComplete(props) {
    var _this;

    _classCallCheck(this, SovosAutoComplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SovosAutoComplete).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleSuggestionsFetchRequested", function (_ref) {
      var value = _ref.value;

      _this.setState({
        suggestions: _this.getSuggestions(value)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSuggestionsClearRequested", function () {
      _this.setState({
        suggestions: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event, _ref2) {
      var newValue = _ref2.newValue;

      _this.setState({
        searchValue: newValue
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSuggestionSelected", function (event, _ref3) {
      var suggestionValue = _ref3.suggestionValue;

      _this.props.onChange(event, suggestionValue);
    });

    _defineProperty(_assertThisInitialized(_this), "renderSuggestion", function (suggestion, _ref4) {
      var query = _ref4.query,
          isHighlighted = _ref4.isHighlighted;
      var matches = (0, _match.default)(suggestion, query);
      var parts = (0, _parse.default)(suggestion, matches);
      return _react.default.createElement(_MenuItem.default, {
        selected: isHighlighted,
        component: "div",
        className: _this.props.MenuItemProps.className
      }, _react.default.createElement("div", null, parts.map(function (part, index) {
        return part.highlight ? _react.default.createElement("span", {
          key: String(index),
          style: {
            fontWeight: 500
          }
        }, part.text) : _react.default.createElement("strong", {
          key: String(index),
          style: {
            fontWeight: 300
          }
        }, part.text);
      })));
    });

    var _value = props.value;
    _this.state = {
      suggestions: [],
      searchValue: _value,
      prevValue: _value // eslint-disable-line

    };
    return _this;
  }

  _createClass(SovosAutoComplete, [{
    key: "getSuggestions",
    value: function getSuggestions(value) {
      var initialSuggestions = this.props.initialSuggestions;
      var inputValue = value.trim().toLowerCase();
      var inputLength = inputValue.length;
      var count = 0;
      return inputLength === 0 ? [] : initialSuggestions.filter(function (suggestion) {
        var keep = count < 5 && suggestion.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          style = _this$props.style,
          className = _this$props.className,
          inputProps = _this$props.inputProps;
      return _react.default.createElement(_reactAutosuggest.default, {
        theme: {
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        },
        renderInputComponent: renderInput,
        suggestions: this.state.suggestions,
        onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
        renderSuggestionsContainer: renderSuggestionsContainer,
        getSuggestionValue: getSuggestionValue,
        renderSuggestion: this.renderSuggestion,
        onSuggestionSelected: this.onSuggestionSelected,
        inputProps: _objectSpread({}, inputProps, {
          value: this.state.searchValue,
          onChange: this.handleChange
        }),
        style: style,
        className: (0, _classnames.default)('sovosAutoComplete', className)
      });
    }
  }]);

  return SovosAutoComplete;
}(_react.Component);

_defineProperty(SovosAutoComplete, "defaultProps", {
  value: '',
  inputProps: {},
  style: undefined,
  MenuItemProps: {},
  className: undefined
});

SovosAutoComplete.propTypes = process.env.NODE_ENV !== "production" ? {
  classes: _propTypes.default.object.isRequired,
  initialSuggestions: _propTypes.default.array.isRequired,
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.string,
  inputProps: _propTypes.default.object,
  MenuItemProps: _propTypes.default.object,
  className: _propTypes.default.string,
  style: _propTypes.default.object
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosAutoComplete);

exports.default = _default;