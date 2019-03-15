"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _styles = require("@material-ui/core/styles");

var _sovosColors = require("../themes/sovos-colors");

var _pDFIcon = _interopRequireDefault(require("./assets/img/p-d-f-icon.png"));

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

var styles = {
  root: {
    display: 'flex',
    width: 640,
    height: 335,
    marginLeft: 'auto',
    marginRight: 'auto',
    border: "dashed 1px ".concat(_sovosColors.grayMedium),
    borderRadius: '6px !important',
    transition: 'all 0.5s',
    cursor: 'pointer'
  },
  description: {
    margin: 'auto',
    top: '10%',
    alignSelf: 'center'
  },
  descriptionText: {
    fontWeight: 'bold',
    color: _sovosColors.black,
    fontSize: '23px',
    paddingBottom: 14
  },
  icon: {
    margin: 20
  },
  center: {
    textAlign: 'center'
  }
};

var SovosFileDrop =
/*#__PURE__*/
function (_Component) {
  _inherits(SovosFileDrop, _Component);

  function SovosFileDrop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SovosFileDrop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SovosFileDrop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onOpenClick", function () {
      _this.dropzone.open();
    });

    _defineProperty(_assertThisInitialized(_this), "getIcons", function () {
      return _react.default.createElement("img", {
        className: (0, _classnames.default)('sovosFileDrop___icon', _this.props.classes.icon),
        src: _pDFIcon.default,
        alt: ""
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getMimeType", function (type) {
      switch (type) {
        case 'PDF':
          return 'application/pdf';

        case 'PNG':
          return 'image/png';

        case 'JPG':
          return 'image/jpeg';

        case 'EXCEL':
          return 'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

        case 'DOC':
          return 'application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document';

        case 'TEXT':
          return 'text/*';

        case 'APPLICATION':
          return 'application/*';

        case 'IMAGE':
          return 'image/*';

        case 'ZIP':
          return 'application/zip';

        case 'TIFF':
          return 'image/tiff';

        default:
          return 'application/*';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getAcceptedFileTypes", function () {
      var acceptedTypes = _this.props.acceptedTypes;
      var types = '';

      switch (_typeof(acceptedTypes)) {
        case 'string':
          return _this.getMimeType(acceptedTypes.toUpperCase());

        case 'undefined':
          return '';

        default:
          if (Array.isArray(acceptedTypes)) {
            acceptedTypes.forEach(function (type, index, acceptedTypesArray) {
              types += _this.getMimeType(type.toUpperCase());

              if (index !== acceptedTypesArray.length - 1) {
                types += ' ,';
              }
            });
          } else {
            console.error('Expected acceptedTypes to be either a string or array. Received type: ', _typeof(acceptedTypes));
          }

          return types;
      }
    });

    return _this;
  }

  _createClass(SovosFileDrop, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeStyle = this.props.style && this.props.style.acceptedBorderColor ? {
        border: "1px solid ".concat(this.props.style.acceptedBorderColor)
      } : {
        border: "1px solid ".concat(_sovosColors.green)
      };
      var rejectStyle = this.props.style && this.props.style.rejectedBorderColor ? {
        border: "1px solid ".concat(this.props.style.rejectedBorderColor)
      } : {
        border: "1px solid ".concat(_sovosColors.redDark)
      };
      var style = this.props.style && this.props.style.width && this.props.style.height ? {
        width: this.props.style.width || '640px',
        height: this.props.style.height || '335px'
      } : {};
      var classes = this.props.classes;
      return _react.default.createElement("div", null, _react.default.createElement(_reactDropzone.default, {
        style: style,
        className: (0, _classnames.default)('sovosFileDrop', classes.root),
        activeStyle: activeStyle,
        rejectStyle: rejectStyle,
        ref: function ref(node) {
          _this2.dropzone = node;
        },
        onDrop: this.props.onFileSelect,
        onDropAccepted: this.props.onDropAccepted,
        onDropRejected: this.props.onDropRejected,
        multiple: this.props.multiple,
        accept: this.getAcceptedFileTypes()
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosFileDrop__description', classes.description)
      }, _react.default.createElement("div", {
        className: classes.center
      }, this.getIcons()), _react.default.createElement("div", {
        className: (0, _classnames.default)(classes.descriptionText, classes.center)
      }, "Drag and Drop"), _react.default.createElement("div", {
        className: classes.center
      }, "your files here or", _react.default.createElement("span", {
        onClick: this.onOpenClick
      }, "Browse File")))));
    }
  }]);

  return SovosFileDrop;
}(_react.Component);

_defineProperty(SovosFileDrop, "defaultProps", {
  acceptedTypes: undefined,
  style: undefined,
  multiple: false
});

_defineProperty(SovosFileDrop, "displayName", 'FileDrop');

SovosFileDrop.propTypes = process.env.NODE_ENV !== "production" ? {
  acceptedTypes: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]),
  style: _propTypes.default.shape({
    acceptedBorderColor: _propTypes.default.string,
    rejectedBorderColor: _propTypes.default.string,
    height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
  }),
  multiple: _propTypes.default.bool,
  onFileSelect: _propTypes.default.func.isRequired,
  onDropAccepted: _propTypes.default.func.isRequired,
  onDropRejected: _propTypes.default.func.isRequired,
  classes: _propTypes.default.object.isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosFileDrop);

exports.default = _default;