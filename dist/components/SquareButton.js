"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SquareButton;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Link = _interopRequireDefault(require("./Link"));

var _utils = require("../theme/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SquareButton(_ref) {
  var icon = _ref.icon,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["icon", "children"]);

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    button: {
      // Box borders
      border: 'solid 1px #cfcfcf',
      borderRadius: 4,
      boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.15)',
      padding: 12,
      // Flex
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // Size
      width: 120,
      height: 120,
      overflow: 'hidden',
      verticalAlign: 'middle',
      cursor: 'pointer',
      outline: 'none',
      textAlign: 'center',
      transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
      backgroundColor: '#fff',
      color: '#000',
      '&:hover': {
        backgroundColor: theme.colors.secondary,
        borderColor: theme.colors.secondary,
        color: (0, _utils.textColor)((0, _utils.darken)(theme.colors.secondary, 30), theme)
      }
    },
    label: {
      fontFamily: 'Source Sans Pro, Arial, Helvetica, sans-serif',
      textDecoration: 'none',
      textRendering: 'optimizeLegibility',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      lineHeight: '20px',
      letterSpacing: '0.7px',
      fontSize: 14,
      marginTop: icon ? 7 : 0
    }
  };
  return (0, _core.jsx)(_Link["default"], _extends({
    css: styles.button
  }, props), icon && (0, _core.jsx)(_Icon["default"], {
    name: icon,
    size: 26
  }), children && (0, _core.jsx)("span", {
    css: styles.label
  }, children));
}

SquareButton.propTypes = {
  icon: _Icon["default"].propTypes.name
};