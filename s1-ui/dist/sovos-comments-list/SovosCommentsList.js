"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _index = require("../index");

var _sovosAvatar = _interopRequireDefault(require("../sovos-avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  row: {
    height: 'auto',
    alignItems: 'initial'
  },
  timestamp: {
    margin: '16px 0 16px 8px',
    textAlign: 'right',
    flex: '0 0 120px',
    color: 'rgba(0, 0, 0, 0.5)'
  },
  avatar: {
    margin: '16px 16px 16px 0',
    flex: '0 0 auto'
  },
  comment: {
    alignItems: 'center',
    flex: '1 1 auto',
    color: 'rgba(0, 0, 0, 0.5)',
    whiteSpace: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    margin: '16px 0'
  }
};

var getRowRenderer = function getRowRenderer(classes) {
  return function (entry) {
    var comment = entry.comment,
        formattedDate = entry.formattedDate,
        name = entry.name,
        surname = entry.surname;
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
      className: classes.avatar
    }, _react.default.createElement(_sovosAvatar.default, {
      className: "sovosCommentListRow__avatar",
      name: name,
      surname: surname,
      size: "large"
    })), _react.default.createElement("div", {
      className: (0, _classnames.default)('sovosCommentListRow__comment', classes.comment)
    }, comment), _react.default.createElement("div", {
      className: (0, _classnames.default)('sovosCommentListRow__timestamp', classes.timestamp)
    }, formattedDate));
  };
};
/**
 * Specialized list base[](http://www.material-ui.com/#/components/list).
 */


var SovosCommentsList = function SovosCommentsList(_ref) {
  var data = _ref.data,
      className = _ref.className,
      classes = _ref.classes,
      SovosListClasses = _ref.SovosListClasses,
      listProps = _objectWithoutProperties(_ref, ["data", "className", "classes", "SovosListClasses"]);

  return _react.default.createElement(_index.SovosList, _extends({}, listProps, {
    className: (0, _classnames.default)('sovosCommentList', className),
    classes: _objectSpread({}, SovosListClasses, {
      row: classes.row
    }),
    data: data,
    rowRenderer: getRowRenderer(classes)
  }));
};

SovosCommentsList.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Array of entries to be rendered. Each entry should contain document, documentLink, timestamp and optional time label and avatar.
   */
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    comment: _propTypes.default.string.isRequired,
    name: _propTypes.default.string.isRequired,
    surname: _propTypes.default.string.isRequired,
    formattedDate: _propTypes.default.string.isRequired
  })).isRequired,
  sortFunction: _propTypes.default.func,
  className: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired,
  SovosListClasses: _propTypes.default.object
} : {};
SovosCommentsList.defaultProps = {
  className: undefined,
  sortFunction: undefined,
  SovosListClasses: undefined
};
SovosCommentsList.displayName = 'CommentsList';

var _default = (0, _styles.withStyles)(styles)(SovosCommentsList);

exports.default = _default;