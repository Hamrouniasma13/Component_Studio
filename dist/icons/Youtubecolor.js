"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgYoutubecolor = function SvgYoutubecolor(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 40 40"
  }, props), _react["default"].createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, _react["default"].createElement("path", {
    d: "M31.76 15.701s-.234-1.653-.954-2.382c-.912-.956-1.935-.96-2.404-1.016-3.359-.243-8.397-.243-8.397-.243h-.01s-5.038 0-8.397.243c-.469.056-1.491.06-2.404 1.016-.72.729-.954 2.382-.954 2.382S8 17.644 8 19.586v1.82c0 1.943.24 3.885.24 3.885s.234 1.654.954 2.382c.913.956 2.112.926 2.646 1.026 1.92.184 8.16.241 8.16.241s5.043-.008 8.402-.25c.469-.056 1.492-.061 2.404-1.017.72-.728.954-2.382.954-2.382s.24-1.942.24-3.884v-1.821c0-1.942-.24-3.885-.24-3.885z",
    fill: "#DC2217"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M17.522 23.613V16.87l6.484 3.383z"
  })));
};

var _default = SvgYoutubecolor;
exports["default"] = _default;