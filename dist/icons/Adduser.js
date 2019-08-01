"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAdduser = function SvgAdduser(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 23 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "adduser_svg__a",
    d: "M1.483 14.82h10.716v-1.494c0-.838-.498-1.586-1.268-1.904-1.157-.48-2.533-.723-4.09-.723s-2.934.243-4.09.723a2.052 2.052 0 0 0-1.268 1.904v1.494zm11.54.824H.659v-2.318c0-1.173.696-2.219 1.775-2.666 1.258-.521 2.74-.786 4.407-.786 1.666 0 3.148.265 4.406.786a2.874 2.874 0 0 1 1.776 2.666v2.318zM6.84 1.22a2.888 2.888 0 0 0-2.885 2.885c0 1.525 1.26 3.297 2.885 3.297 1.624 0 2.885-1.772 2.885-3.297A2.888 2.888 0 0 0 6.84 1.22zm0 7.007c-2.123 0-3.71-2.176-3.71-4.122A3.714 3.714 0 0 1 6.841.395a3.714 3.714 0 0 1 3.709 3.71c0 1.945-1.586 4.12-3.71 4.12zm15.195 10.77a.364.364 0 1 1 0 .728h-3.272v3.272a.364.364 0 1 1-.728 0v-3.272h-3.272a.364.364 0 1 1 0-.728h3.272v-3.272a.364.364 0 1 1 .728 0v3.272h3.272z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    xlinkHref: "#adduser_svg__a"
  }));
};

var _default = SvgAdduser;
exports["default"] = _default;