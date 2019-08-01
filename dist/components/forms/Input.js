"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Input(_ref) {
  var _objectSpread2;

  var name = _ref.name,
      disabled = _ref.disabled,
      error = _ref.error,
      big = _ref.big,
      css = _ref.css,
      iconName = _ref.iconName,
      iconPosition = _ref.iconPosition,
      textarea = _ref.textarea,
      rest = _objectWithoutProperties(_ref, ["name", "disabled", "error", "big", "css", "iconName", "iconPosition", "textarea"]);

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = _objectSpread((_objectSpread2 = {
    width: '100%',
    height: textarea ? '200px' : '45px',
    border: "1px solid ".concat(error ? theme.colors.error : theme.colors.lightGray),
    resize: 'none',
    borderRadius: '3px',
    padding: "".concat(textarea ? '8px' : '0', " ").concat(function () {
      if (iconName && iconPosition === 'right') {
        if (big) return '60px';else return '45px';
      }

      return '15px';
    }(), " 0 ").concat(function () {
      if (iconName && iconPosition === 'left') {
        if (big) return '60px';else return '45px';
      }

      return '15px';
    }()),
    fontSize: '16px',
    color: disabled ? theme.colors.darkGray : theme.colors.text,
    outline: 'none',
    '::placeholder': {
      color: theme.colors.darkGray
    }
  }, _defineProperty(_objectSpread2, theme.media.tablet, {
    height: textarea ? big ? '200px' : '80px' : big ? '60px' : '45px'
  }), _defineProperty(_objectSpread2, '&[disabled]', {
    '::placeholder': {
      color: theme.colors.gray
    },
    background: theme.colors.lighterGray
  }), _objectSpread2), css);

  if (textarea) {
    return (0, _core.jsx)("textarea", _extends({
      css: styles,
      name: name,
      id: name,
      disabled: disabled
    }, rest));
  }

  return (0, _core.jsx)("input", _extends({
    css: styles,
    name: name,
    id: name,
    disabled: disabled
  }, rest));
}

var _default = Input;
exports["default"] = _default;
Input.defaultProps = {
  textarea: false
};