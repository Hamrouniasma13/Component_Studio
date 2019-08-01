"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Container;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Container(_ref) {
  var _ref2;

  var article = _ref.article,
      props = _objectWithoutProperties(_ref, ["article"]);

  var theme = _react["default"].useContext(_core.ThemeContext);

  return (0, _core.jsx)("div", _extends({
    css: (_ref2 = {
      margin: '0px auto',
      maxWidth: '100%',
      paddingLeft: '15px',
      paddingRight: '15px',
      position: 'relative',
      // in case of float children
      '&:after': {
        display: 'block',
        content: '""',
        clear: 'both'
      }
    }, _defineProperty(_ref2, theme.media.tablet, {
      width: '720px'
    }), _defineProperty(_ref2, theme.media.laptop, {
      width: article ? '798px' : '960px'
    }), _defineProperty(_ref2, theme.media.desktop, {
      width: article ? '798px' : '1140px'
    }), _ref2)
  }, props));
}