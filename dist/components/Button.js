"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Button;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Link = _interopRequireDefault(require("./Link"));

var _utils = require("../theme/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Calculate padding from size
 * @param {string} size
 */
var getPadding = function getPadding(size) {
  return size === 'big' ? 15 : size === 'small' ? 7 : 10;
};

function StyledButton(_ref) {
  var button = _ref.button,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      padding = _ref.padding,
      ghost = _ref.ghost,
      css = _ref.css,
      props = _objectWithoutProperties(_ref, ["button", "color", "padding", "ghost", "css"]);

  var theme = _react["default"].useContext(_core.ThemeContext);

  var mainColor = theme.colors[color];
  var Tag = button ? 'button' : _Link["default"];
  return (0, _core.jsx)(Tag, _extends({}, props, {
    css: _objectSpread(_defineProperty({
      // Block
      display: 'inline-block',
      position: 'relative',
      verticalAlign: 'middle',
      maxWidth: '700px',
      overflow: 'hidden',
      backgroundColor: ghost ? 'white' : mainColor,
      boxSizing: 'border-box',
      // Border
      padding: padding,
      borderRadius: '4px',
      borderColor: ghost ? '#f3f3f3' : 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      // Text
      textAlign: 'center',
      fontFamily: 'Source Sans Pro, Arial, Helvetica, sans-serif',
      fontWeight: '600',
      fontSize: '14px',
      letterSpacing: '1.1px',
      lineHeight: 1,
      color: ghost ? 'black' : (0, _utils.textColor)((0, _utils.darken)(mainColor, 50), theme),
      // Reset
      outline: 'none',
      textDecoration: 'none',
      zIndex: 0,
      // Optimisation
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      // Other
      cursor: 'pointer',
      // Animation
      transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
      '&:hover': {
        backgroundColor: ghost ? (0, _utils.darken)('white', 5) : (0, _utils.darken)(mainColor, 10),
        color: ghost ? '#555555' : (0, _utils.textColor)((0, _utils.darken)(mainColor, 50), theme)
      }
    }, theme.media.tablet, {
      width: 'auto'
    }), css)
  }));
}

function StyledIcon(_ref2) {
  var name = _ref2.name,
      left = _ref2.left,
      right = _ref2.right;
  return (0, _core.jsx)(_Icon["default"], {
    name: name,
    size: 20,
    css: {
      verticalAlign: 'bottom',
      marginLeft: right ? 15 : 0,
      marginRight: left ? 15 : 0
    }
  });
}

function Label(_ref3) {
  var children = _ref3.children;
  return (0, _core.jsx)("span", {
    css: {
      lineHeight: '20px'
    }
  }, children);
}

function Button(_ref4) {
  var label = _ref4.label,
      children = _ref4.children,
      icon = _ref4.icon,
      iconPosition = _ref4.iconPosition,
      size = _ref4.size,
      props = _objectWithoutProperties(_ref4, ["label", "children", "icon", "iconPosition", "size"]);

  // deprecate label prop
  var iconOnly = !(children || label); // Get content order from icon, children, iconPosition

  var content = [icon && iconPosition === 'left' ? (0, _core.jsx)(StyledIcon, {
    name: icon,
    left: !iconOnly,
    key: "left-icon"
  }) : null, !iconOnly ? (0, _core.jsx)(Label, {
    key: "label"
  }, children || label) : null, icon && iconPosition !== 'left' ? (0, _core.jsx)(StyledIcon, {
    name: icon,
    right: !iconOnly,
    key: "right-icon"
  }) : null]; // Calculate padding from size

  var padding = !iconOnly ? "".concat(getPadding(size), "px 20px") : getPadding(size);
  return (0, _core.jsx)(StyledButton, _extends({
    button: !props.href,
    padding: padding
  }, props), content);
}

Button.defaultProps = {
  iconPosition: 'right',
  size: 'normal'
};
Button.propTypes = {
  /** salut descrip */
  icon: _propTypes["default"].string,
  iconPosition: _propTypes["default"].oneOf(['right', 'left']),
  label: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['small', 'normal', 'big'])
};