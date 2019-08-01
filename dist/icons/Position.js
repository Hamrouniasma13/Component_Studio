"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPosition = function SvgPosition(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 18 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "position_svg__a",
    d: "M19.984 9.057c-3.897 0-7.927 2.965-7.927 7.927 0 4.846 6.309 11.804 7.927 13.508 1.618-1.705 7.927-8.666 7.927-13.508 0-4.962-4.03-7.927-7.927-7.927zm0 22.943l-.374-.374c-.352-.351-8.61-8.679-8.61-14.642C11 11.361 15.568 8 19.984 8s8.984 3.36 8.984 8.984c0 5.963-8.259 14.29-8.61 14.642l-.374.374zm0-17.13a2.116 2.116 0 0 0-2.114 2.114c0 1.166.948 2.114 2.114 2.114a2.116 2.116 0 0 0 2.114-2.114 2.116 2.116 0 0 0-2.114-2.114zm0 5.285a3.174 3.174 0 0 1-3.17-3.171 3.174 3.174 0 0 1 3.17-3.17 3.174 3.174 0 0 1 3.17 3.17 3.174 3.174 0 0 1-3.17 3.17z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    transform: "translate(-11 -8)",
    xlinkHref: "#position_svg__a"
  }));
};

var _default = SvgPosition;
exports["default"] = _default;