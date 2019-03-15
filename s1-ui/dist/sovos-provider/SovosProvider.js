"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _materialUiPickers = require("material-ui-pickers");

var _moment = _interopRequireDefault(require("@date-io/moment"));

var _styles = require("@material-ui/core/styles");

var _objectHelpers = require("../utils/objectHelpers");

var _sovosEnterprise = _interopRequireDefault(require("../themes/sovos-enterprise"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SovosProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(SovosProvider, _Component);

  function SovosProvider() {
    _classCallCheck(this, SovosProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(SovosProvider).apply(this, arguments));
  }

  _createClass(SovosProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Add our custom fonts
      var typographyCss = document.createElement('link');
      typographyCss.rel = 'stylesheet';
      typographyCss.type = 'text/css';
      typographyCss.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
      document.head.appendChild(typographyCss); // Add material-ui font icons

      var iconsCss = document.createElement('link');
      iconsCss.rel = 'stylesheet';
      iconsCss.type = 'text/css';
      iconsCss.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
      document.head.appendChild(iconsCss); // Set defaults

      var typography = this.props.theme.typography || _sovosEnterprise.default.typography;
      document.body.style.fontFamily = typography.fontFamily;
      document.body.style.margin = 0;
      document.body.style.padding = 0;
    }
  }, {
    key: "render",
    value: function render() {
      var theme = this.props.theme;

      if (typeof theme !== 'undefined') {
        theme = (0, _objectHelpers.mergeDeep)({}, _sovosEnterprise.default, theme);
      }

      return _react.default.createElement(_styles.MuiThemeProvider, {
        theme: (0, _styles.createMuiTheme)(theme)
      }, _react.default.createElement(_materialUiPickers.MuiPickersUtilsProvider, {
        utils: _moment.default
      }, this.props.children));
    }
  }]);

  return SovosProvider;
}(_react.Component);

SovosProvider.defaultProps = {
  theme: {}
};
SovosProvider.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,

  /* eslint-disable */
  theme: _propTypes.default.object
  /* eslint-enable */

} : {};
var _default = SovosProvider;
exports.default = _default;