"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _InsertDriveFile = _interopRequireDefault(require("@material-ui/icons/InsertDriveFile"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _index = require("../index");

var _sovosAvatar = _interopRequireDefault(require("../sovos-avatar"));

var _sovosIconMenu = _interopRequireDefault(require("../sovos-icon-menu"));

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  documentName: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: '1 1 auto',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  documentLink: {
    textDecoration: 'none',
    color: 'inherit'
  },
  iconMenu: {
    display: 'flex !important',
    flex: '0 0 28px'
  },
  timestamp: {
    marginLeft: 'auto'
  },
  fileIcon: {
    color: (0, _colorManipulator.fade)(_sovosColors.buttonOrange, 0.8),
    marginLeft: 8,
    width: 18,
    height: 18,
    flex: '0 0 18px'
  },
  info: {
    marginLeft: 'auto',
    flex: '0 0 160px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 12,
    color: (0, _colorManipulator.fade)(_sovosColors.black, 0.5)
  },
  menuItem: {
    lineHeight: '25px',
    minHeight: '25px',
    fontSize: '13px'
  }
};

var _ref =
/*#__PURE__*/
_react.default.createElement(_MoreVert.default, null);

var getRowRenderer = function getRowRenderer(onDownload, onDelete, classes) {
  return function (entry) {
    var document = entry.document,
        documentLink = entry.documentLink,
        timestamp = entry.timestamp,
        timeLabel = entry.timeLabel,
        name = entry.name,
        surname = entry.surname;
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_InsertDriveFile.default, {
      classes: {
        root: classes.fileIcon
      }
    }), _react.default.createElement("span", {
      className: (0, _classnames.default)('sovosAttachmentsListRow__document', classes.documentName)
    }, _react.default.createElement("a", {
      className: classes.documentLink,
      rel: "noopener noreferrer",
      target: "_blank",
      href: documentLink
    }, document)), _react.default.createElement("div", {
      className: classes.info
    }, name && _react.default.createElement(_sovosAvatar.default, {
      name: name,
      surname: surname,
      size: "large",
      className: "sovosAttachmentsListRow__avatar"
    }), _react.default.createElement("span", {
      className: (0, _classnames.default)('sovosAttachmentsListRow__timestamp', classes.timestamp)
    }, timeLabel || timestamp)), _react.default.createElement(_sovosIconMenu.default, {
      className: "sovosAttachmentsListRow__menu",
      iconElement: _ref,
      IconButtonProps: {
        className: classes.iconMenu
      }
    }, _react.default.createElement(_MenuItem.default, {
      className: (0, _classnames.default)('sovosAttachmentsListRow__menuItem--download', classes.menuItem),
      onClick: function onClick() {
        return onDownload(entry);
      }
    }, "Download"), _react.default.createElement(_MenuItem.default, {
      className: (0, _classnames.default)('sovosAttachmentsListRow__menuItem--delete', classes.menuItem),
      onClick: function onClick() {
        return onDelete(entry);
      }
    }, "Delete")));
  };
};

var SovosAttachmentsList = function SovosAttachmentsList(_ref2) {
  var data = _ref2.data,
      classes = _ref2.classes,
      className = _ref2.className,
      onDownload = _ref2.onDownload,
      onDelete = _ref2.onDelete,
      SovosListClasses = _ref2.SovosListClasses,
      listProps = _objectWithoutProperties(_ref2, ["data", "classes", "className", "onDownload", "onDelete", "SovosListClasses"]);

  return _react.default.createElement(_index.SovosList, _extends({}, listProps, {
    className: (0, _classnames.default)('sovosAttachmentList', className),
    classes: SovosListClasses,
    data: data,
    rowRenderer: getRowRenderer(onDownload, onDelete, classes)
  }));
};

SovosAttachmentsList.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Array of entries to be rendered. Each entry should contain document, documentLink, timestamp and optional time label and avatar.
   */
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.number,
    document: _propTypes.default.string.isRequired,
    documentLink: _propTypes.default.string.isRequired,
    avatar: _propTypes.default.string,
    timestamp: _propTypes.default.number,
    timeLabel: _propTypes.default.string
  })).isRequired,

  /**
   * Callback to be invoked when `delete` is pressed from the menu. Takes id of the document as an argument.
   */
  onDelete: _propTypes.default.func.isRequired,

  /**
   * Callback to be invoked when `download` is pressed from the menu. Takes id of the document as an argument.
   */
  onDownload: _propTypes.default.func.isRequired,

  /**
   * Function used to sort provided data.
   */
  sortFunction: _propTypes.default.func,
  className: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired,
  SovosListClasses: _propTypes.default.object
} : {};
SovosAttachmentsList.defaultProps = {
  className: undefined,
  sortFunction: undefined,
  SovosListClasses: undefined
};
SovosAttachmentsList.displayName = 'AttachmentsList';

var _default = (0, _styles.withStyles)(styles)(SovosAttachmentsList);

exports.default = _default;