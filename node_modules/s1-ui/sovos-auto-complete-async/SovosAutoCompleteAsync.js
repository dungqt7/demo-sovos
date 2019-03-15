"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AutoComplete = _interopRequireDefault(require("../internals/auto-complete/AutoComplete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var minimumCharactersToken = '[minimumCharacters]';
var loadingMessage = 'Searching';
var noSuggestionsMessage = 'No results found';
var helpMessageTemplate = "Type ".concat(minimumCharactersToken, "+ characters to begin searching");

var SovosAutoCompleteAsync =
/*#__PURE__*/
function (_Component) {
  _inherits(SovosAutoCompleteAsync, _Component);

  _createClass(SovosAutoCompleteAsync, null, [{
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

  function SovosAutoCompleteAsync(props) {
    var _this;

    _classCallCheck(this, SovosAutoCompleteAsync);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SovosAutoCompleteAsync).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getNoOptionsMessage", function () {
      var _this$props = _this.props,
          minimumCharacters = _this$props.minimumCharacters,
          isLoading = _this$props.isLoading,
          suggestions = _this$props.suggestions;
      var searchValue = _this.state.searchValue;
      var hasSuggestions = suggestions && suggestions.length > 0;

      if ((!searchValue || searchValue.length < minimumCharacters) && !isLoading && !hasSuggestions) {
        return helpMessageTemplate.replace(minimumCharactersToken, minimumCharacters);
      }

      if (searchValue && searchValue.length >= minimumCharacters && !isLoading && !hasSuggestions) {
        return noSuggestionsMessage;
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "getLoadingMessage", function () {
      return loadingMessage;
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (searchValue) {
      _this.setState({
        searchValue: searchValue
      }, function () {
        if (searchValue && searchValue.length >= _this.props.minimumCharacters) {
          _this.props.loadSuggestions(searchValue);
        } else {
          _this.props.clearSuggestions();
        }
      });
    });

    var value = props.value;
    _this.state = {
      searchValue: value,
      prevValue: value // eslint-disable-line

    };
    return _this;
  }

  _createClass(SovosAutoCompleteAsync, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_AutoComplete.default, _extends({}, this.props, {
        onInputChange: this.handleInputChange,
        noOptionsMessage: this.getNoOptionsMessage,
        loadingMessage: this.getLoadingMessage
      }));
    }
  }]);

  return SovosAutoCompleteAsync;
}(_react.Component);

_defineProperty(SovosAutoCompleteAsync, "defaultProps", {
  classes: undefined,
  className: undefined,
  suggestions: undefined,
  value: undefined,
  label: undefined,
  isLoading: false,
  minimumCharacters: 2
});

SovosAutoCompleteAsync.propTypes = process.env.NODE_ENV !== "production" ? {
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  suggestions: _propTypes.default.arrayOf(_propTypes.default.string),
  onChange: _propTypes.default.func.isRequired,
  loadSuggestions: _propTypes.default.func.isRequired,
  clearSuggestions: _propTypes.default.func.isRequired,
  value: _propTypes.default.string,
  label: _propTypes.default.string,
  isLoading: _propTypes.default.bool,
  minimumCharacters: _propTypes.default.number
} : {};
var _default = SovosAutoCompleteAsync;
exports.default = _default;