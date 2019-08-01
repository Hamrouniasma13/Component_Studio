"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var STYLES = {
  '*, *:after, *:before': {
    boxSizing: 'border-box'
  },
  'body, input, textarea, select, button': {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontSize: '16px',
    // OK
    fontWeight: 400 // OK

  },
  'h1, h2, h3, h4, h5, h6, a, p, span, div, input, textarea, button, select': {
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },
  body: {
    color: '#333',
    margin: 0,
    padding: 0
  },
  '*, *:before, *:after': {
    boxSizing: 'border-box'
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    outline: 'none'
  },
  img: {
    maxWidth: '100%'
  }
};

var _default = function _default() {
  return _react["default"].createElement(_core.Global, {
    styles: STYLES
  });
};

exports["default"] = _default;