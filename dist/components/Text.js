"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Text;

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typos = _interopRequireDefault(require("../typos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Text(_ref) {
  var Tag = _ref.tag,
      size = _ref.size,
      css = _ref.css,
      mb = _ref.mb,
      props = _objectWithoutProperties(_ref, ["tag", "size", "css", "mb"]);

  return (0, _core.jsx)(Tag, _extends({
    css: _objectSpread({
      fontFamily: 'Source Sans Pro, Arial, Helvetica, sans-serif',
      marginTop: 0,
      marginBottom: mb
    }, _typos["default"][size || Tag], {}, css)
  }, props));
}

Text.propTypes = {
  tag: _propTypes["default"].oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span']),
  size: _propTypes["default"].oneOf(Object.keys(_typos["default"])),
  mb: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
Text.defaultProps = {
  tag: 'span',
  mb: 0
};

Text.h1 = function (props) {
  return (0, _core.jsx)(Text, _extends({
    tag: "h1"
  }, props));
};

Text.h2 = function (props) {
  return (0, _core.jsx)(Text, _extends({
    tag: "h2"
  }, props));
};

Text.h3 = function (props) {
  return (0, _core.jsx)(Text, _extends({
    tag: "h3"
  }, props));
};

Text.h4 = function (props) {
  return (0, _core.jsx)(Text, _extends({
    tag: "h4"
  }, props));
};

Text.h5 = function (props) {
  return (0, _core.jsx)(Text, _extends({
    tag: "h5"
  }, props));
};

Text.h6 = function (props) {
  return (0, _core.jsx)(Text, _extends({
    tag: "h6"
  }, props));
};

Text.p = function (props) {
  return (0, _core.jsx)(Text, _extends({
    tag: "p"
  }, props));
};