"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textColor = textColor;
exports.darken = darken;
exports.lighten = lighten;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function textColor(color, theme) {
  try {
    return (0, _color["default"])(color).isDark() ? theme && theme.colors && theme.colors.white || '#fff' : theme && theme.colors && theme.colors.text || '#000';
  } catch (err) {
    return color;
  }
}

function darken(color) {
  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  try {
    return (0, _color["default"])(color).darken(percent / 100).hex();
  } catch (err) {
    return color;
  }
}

function lighten(color) {
  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  try {
    return (0, _color["default"])(color).lighten(percent / 100).hex();
  } catch (err) {
    return color;
  }
}