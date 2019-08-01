"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCalendar = function SvgCalendar(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "calendar_svg__a",
    d: "M8.387 32h23.226a.387.387 0 0 0 .387-.387V10.71a.387.387 0 0 0-.387-.387H26.58V8.387a.387.387 0 1 0-.775 0v1.936h-5.419V8.387a.387.387 0 1 0-.774 0v1.936h-5.42V8.387a.387.387 0 1 0-.774 0v1.936H8.387A.387.387 0 0 0 8 10.71v20.903c0 .214.173.387.387.387zm.387-.774v-14.71h22.452v14.71H8.774zm4.645-20.13v1.936a.387.387 0 1 0 .775 0v-1.935h5.419v1.935a.387.387 0 1 0 .774 0v-1.935h5.42v1.935a.387.387 0 1 0 .774 0v-1.935h4.645v4.645H8.774v-4.645h4.645z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -8)",
    xlinkHref: "#calendar_svg__a"
  }));
};

var _default = SvgCalendar;
exports["default"] = _default;