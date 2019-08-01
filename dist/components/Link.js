"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Link;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * LinkContext allow users of this library to use the component they want as a link. By defaut we use 'a', but
 * they could use 'button', or Link from react-router, or add some function on the click, like analytics tracking.
 */
var LinkContext = _react["default"].createContext('a');

var LinkProvider = function LinkProvider(_ref) {
  var _ref$element = _ref.element,
      element = _ref$element === void 0 ? 'a' : _ref$element,
      children = _ref.children;
  return (0, _core.jsx)(LinkContext.Provider, {
    value: element
  }, children);
};

LinkProvider.propTypes = {
  element: _propTypes["default"].any
};

function Link(_ref2) {
  var css = _ref2.css,
      props = _objectWithoutProperties(_ref2, ["css"]);

  // Retrieve the custom html tag we'll use
  var Element = _react["default"].useContext(LinkContext); // Remove browser default style


  var resetStyle = {
    color: 'inherit',
    textDecoration: 'none'
  };
  return (0, _core.jsx)(Element, _extends({
    css: _objectSpread({}, resetStyle, {}, css)
  }, props));
}

Link.ContextProvider = LinkProvider;