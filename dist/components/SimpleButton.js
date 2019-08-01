"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SimpleButton;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Link = _interopRequireDefault(require("./Link"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _utils = require("../theme/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SimpleButton(_ref) {
  var icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      children = _ref.children,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, ["icon", "iconPosition", "children", "color"]);

  var theme = _react["default"].useContext(_core.ThemeContext);

  var mainColor = theme.colors[color];
  var styles = {
    icon: {
      marginLeft: iconPosition !== 'left' && children ? 10 : 0,
      marginRight: iconPosition === 'left' && children ? 10 : 0,
      verticalAlign: 'middle'
    },
    button: {
      cursor: 'pointer',
      outline: 'none',
      textDecoration: 'underline',
      color: mainColor,
      fontFamily: 'Source Sans Pro, Arial, Helvetica, sans-serif',
      padding: 0,
      border: 0,
      backgroundColor: 'transparent',
      fontSize: '14px',
      transition: 'color 0.3s',
      display: 'inline-block',
      '&:hover': {
        color: (0, _utils.darken)(mainColor, 50)
      }
    }
  };
  var content = [icon && iconPosition === 'left' ? (0, _core.jsx)(_Icon["default"], {
    css: styles.icon,
    name: icon,
    size: 14,
    key: "left-icon"
  }) : null, children ? (0, _core.jsx)("span", {
    css: {
      lineHeight: '20px'
    },
    key: "label"
  }, children) : null, icon && iconPosition !== 'left' ? (0, _core.jsx)(_Icon["default"], {
    css: styles.icon,
    name: icon,
    size: 20,
    key: "right-icon"
  }) : null];
  return (0, _core.jsx)(_Link["default"], _extends({
    css: styles.button
  }, props), content);
}

SimpleButton.propTypes = {
  icon: _propTypes["default"].string,
  iconPosition: _propTypes["default"].oneOf(['left', 'right'])
};
SimpleButton.defaultProps = {
  color: 'primary'
};