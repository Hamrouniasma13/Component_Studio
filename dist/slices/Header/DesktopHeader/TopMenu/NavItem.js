"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _core = require("@emotion/core");

var _utils = require("../../../../theme/utils");

var _Link = _interopRequireDefault(require("../../../../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NavItem(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  var _useContext = (0, _react.useContext)(_core.ThemeContext),
      colors = _useContext.colors;

  return (0, _core.jsx)(_Link["default"], _extends({
    css: {
      textDecoration: 'none'
    }
  }, rest), (0, _core.jsx)("div", {
    css: {
      height: 40,
      lineHeight: '40px',
      color: '#d8d8d8',
      alignItems: 'center',
      position: 'relative',
      paddingLeft: 20,
      paddingRight: 20,
      transition: 'background-color 0.2s',
      textDecoration: 'none',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: (0, _utils.lighten)(colors.darkerGray, 40),
        color: colors.lighterGray
      }
    }
  }, children));
}

var _default = NavItem;
exports["default"] = _default;