"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgName = function SvgName(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 18"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "name_svg__a",
    d: "M14.857 19.571a2.571 2.571 0 1 1 0-5.143 2.571 2.571 0 0 1 0 5.143zm0-4.143a1.577 1.577 0 1 0 .001 3.155 1.577 1.577 0 0 0 0-3.155zm.429 5.858a3.856 3.856 0 0 1 2.73 1.092c.729.711 1.127 1.678 1.127 2.729a.477.477 0 0 1-.486.464h-6.743a.477.477 0 0 1-.485-.464c0-1.05.398-2.018 1.127-2.729a3.856 3.856 0 0 1 2.73-1.092zm-2.852 3.356h5.703a2.81 2.81 0 0 0-.816-1.613 2.928 2.928 0 0 0-2.035-.814c-.765 0-1.498.293-2.036.814a2.796 2.796 0 0 0-.816 1.613zM29.5 11c1.38 0 2.5 1.138 2.5 2.542v12.916c0 1.404-1.12 2.541-2.5 2.542h-19C9.12 29 8 27.862 8 26.458V13.542c0-1.404 1.12-2.541 2.5-2.542h19zM31 26.458V13.542a1.517 1.517 0 0 0-1.5-1.525h-19A1.517 1.517 0 0 0 9 13.542v12.916a1.517 1.517 0 0 0 1.5 1.525h19a1.517 1.517 0 0 0 1.5-1.525zm-2.93-6.887c.277 0 .501.192.501.429s-.224.429-.502.429h-5.852c-.278 0-.503-.192-.503-.429s.225-.429.503-.429h5.852zm0 3.429c.277 0 .501.192.501.429 0 .236-.224.428-.502.428h-5.852c-.278 0-.503-.192-.503-.428 0-.237.225-.429.503-.429h5.852zm0-6.857c.277 0 .501.192.501.428 0 .237-.224.429-.502.429h-5.852c-.278 0-.503-.192-.503-.429 0-.236.225-.428.503-.428h5.852z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -11)",
    xlinkHref: "#name_svg__a"
  }));
};

var _default = SvgName;
exports["default"] = _default;