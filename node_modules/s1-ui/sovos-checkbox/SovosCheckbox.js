"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnstyledSovosCheckbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _CheckBox = _interopRequireDefault(require("@material-ui/icons/CheckBox"));

var _CheckBoxOutlineBlank = _interopRequireDefault(require("@material-ui/icons/CheckBoxOutlineBlank"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'none',
    position: 'relative',
    '&:hover': {
      // Disable the hover effect for the IconButton.
      backgroundColor: 'transparent'
    }
  },
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0
  }
};

var UnstyledSovosCheckbox = function UnstyledSovosCheckbox(_ref) {
  var checked = _ref.checked,
      color = _ref.color,
      classes = _ref.classes,
      value = _ref.value,
      name = _ref.name,
      readOnly = _ref.readOnly,
      disabled = _ref.disabled,
      theme = _ref.theme,
      onChange = _ref.onChange,
      className = _ref.className;
  var boxColor;

  if (disabled === true) {
    boxColor = theme.palette.action.disabled;
  } else if (!checked) {
    boxColor = theme.palette.text.secondary;
  } else if (color.toLowerCase() === 'primary') {
    boxColor = theme.palette.primary.main;
  } else if (color.toLowerCase() === 'secondary') {
    boxColor = theme.palette.secondary.main;
  } else if (color.toLowerCase() === 'default') {
    boxColor = theme.palette.primary.main;
  } else {
    boxColor = color;
  }

  return _react.default.createElement("div", {
    className: (0, _classnames.default)('SovosCheckbox', classes.root, className)
  }, _react.default.createElement(checked ? _CheckBox.default : _CheckBoxOutlineBlank.default, {
    style: {
      color: boxColor
    }
  }), _react.default.createElement("input", {
    disabled: disabled,
    readOnly: readOnly,
    name: name,
    value: value,
    type: "checkbox",
    onChange: onChange,
    className: classes.input
  }));
};

exports.UnstyledSovosCheckbox = UnstyledSovosCheckbox;
UnstyledSovosCheckbox.propTypes = process.env.NODE_ENV !== "production" ? {
  checked: _propTypes.default.bool,
  color: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  value: _propTypes.default.string,
  name: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  theme: _propTypes.default.object.isRequired,
  onChange: _propTypes.default.func.isRequired
} : {};
UnstyledSovosCheckbox.defaultProps = {
  checked: false,
  color: 'primary',
  value: undefined,
  name: undefined,
  readOnly: false,
  disabled: false,
  className: undefined
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(UnstyledSovosCheckbox);

exports.default = _default;