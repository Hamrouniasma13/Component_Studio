"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Input = _interopRequireDefault(require("./Input"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputWrapper = (0, _styled["default"])('div')(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({
    display: 'inline-block',
    width: '100%',
    minWidth: '240px'
  }, theme.media.tablet, {
    maxWidth: '330px'
  });
});

var TextInputWrapper = _styled["default"].div({
  position: 'relative'
});

var IconWrapper = _styled["default"].div(function (_ref3) {
  var iconPosition = _ref3.iconPosition,
      big = _ref3.big;
  var css = {
    position: 'absolute',
    height: big ? '60px' : '45px',
    width: big ? '60px' : '45px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  if (iconPosition === 'right') css.right = '0px';
  return css;
});

var StyledIcon = (0, _styled["default"])(_Icon["default"])({
  height: '25px'
});
var Label = (0, _styled["default"])('label')(function (_ref4) {
  var error = _ref4.error,
      colors = _ref4.theme.colors;
  return {
    display: 'block',
    margin: '0 0 15px 1px',
    fontSize: '15px',
    color: error ? colors.error : colors.text
  };
});

var InputText = function InputText(_ref5) {
  var name = _ref5.name,
      error = _ref5.error,
      placeholder = _ref5.placeholder,
      id = _ref5.id,
      label = _ref5.label,
      disabled = _ref5.disabled,
      big = _ref5.big,
      step = _ref5.step,
      type = _ref5.type,
      value = _ref5.value,
      onBlur = _ref5.onBlur,
      onChange = _ref5.onChange,
      onFocus = _ref5.onFocus,
      className = _ref5.className,
      iconName = _ref5.iconName,
      iconPosition = _ref5.iconPosition,
      textarea = _ref5.textarea,
      css = _ref5.css,
      props = _objectWithoutProperties(_ref5, ["name", "error", "placeholder", "id", "label", "disabled", "big", "step", "type", "value", "onBlur", "onChange", "onFocus", "className", "iconName", "iconPosition", "textarea", "css"]);

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  var handleChange = function handleChange(e) {
    setVal(e.target.value);
    if (onChange) onChange({
      type: type,
      name: name,
      value: e.target.value
    });
  };

  var handleFocus = function handleFocus(e) {
    setVal(e.target.value);
    if (onFocus) onFocus(e.target.value);
  };

  var handleBlur = function handleBlur(e) {
    setVal(e.target.value);
    if (onBlur) onBlur(e.target.value);
  };

  (0, _react.useEffect)(function () {
    setVal(value);
  }, [value]);
  return (0, _core.jsx)(InputWrapper, {
    className: className,
    style: css
  }, label && (0, _core.jsx)(Label, {
    htmlFor: id,
    error: error
  }, label), (0, _core.jsx)(TextInputWrapper, null, iconName && (0, _core.jsx)(IconWrapper, {
    iconPosition: iconPosition,
    big: big
  }, (0, _core.jsx)(StyledIcon, {
    name: iconName,
    big: big,
    color: 'darkGray'
  })), (0, _core.jsx)(_Input["default"], _extends({
    big: big,
    error: error,
    id: id,
    disabled: disabled,
    type: type,
    step: step,
    placeholder: placeholder,
    value: val,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    iconName: iconName,
    iconPosition: iconPosition,
    textarea: textarea
  }, props))));
};

InputText.propTypes = {
  /**
   * input value
   */
  value: _propTypes["default"].string,

  /**
   * input ID
   */
  id: _propTypes["default"].string,

  /**
   * error
   */
  error: _propTypes["default"].bool,

  /**
   * onChange function
   */
  onChange: _propTypes["default"].func,

  /**
   * placeholder
   */
  placeholder: _propTypes["default"].string,

  /**
   * label
   */
  label: _propTypes["default"].string,

  /**
   * disabled input
   */
  disabled: _propTypes["default"].bool,

  /**
   * className
   */
  className: _propTypes["default"].string,

  /**
   * big
   */
  big: _propTypes["default"].bool,

  /**
   * iconName
   */
  iconName: _propTypes["default"].string,

  /**
   * iconPosition
   */
  iconPosition: _propTypes["default"].oneOf(['left', 'right']),

  /**
   * css to overwrite the Input Wrapper
   */
  css: _propTypes["default"].shape({}),

  /**
   * is a textarea
   */
  textarea: _propTypes["default"].bool
};
InputText.defaultProps = {
  big: false,
  type: 'text',
  iconName: null,
  iconPosition: 'left',
  textarea: false,
  css: {}
};
var _default = InputText;
exports["default"] = _default;