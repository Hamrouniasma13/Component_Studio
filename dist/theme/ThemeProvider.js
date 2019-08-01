"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ThemeProvider;
exports.ThemeContextProvider = exports.ThemeContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _theme = _interopRequireDefault(require("../theme"));

var _emotionTheming = require("emotion-theming");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThemeContext = _react["default"].createContext(_theme["default"]); // Used in Admin portal, for color selector


exports.ThemeContext = ThemeContext;

var ThemeContextProvider = function ThemeContextProvider(_ref) {
  var children = _ref.children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme;
  return _react["default"].createElement(ThemeContext.Provider, {
    value: (0, _lodash.merge)({}, _theme["default"], theme || {})
  }, children);
}; // Main theme provider, used in all portals and website studio


exports.ThemeContextProvider = ThemeContextProvider;

function ThemeProvider(_ref2) {
  var children = _ref2.children,
      theme = _ref2.theme;
  return _react["default"].createElement(_emotionTheming.ThemeProvider, {
    theme: (0, _lodash.merge)({}, _theme["default"], theme || {})
  }, children);
}