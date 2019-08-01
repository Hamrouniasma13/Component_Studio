"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGlasses = function SvgGlasses(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 20"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "glasses_svg__a",
    d: "M18.957 21.478h11.776L26.94 11.043h-2.765V10h3.496L32 21.908v5.31a2.612 2.612 0 0 1-2.609 2.608h-5.739a2.612 2.612 0 0 1-2.609-2.609v-4.695h-2.086v4.695a2.612 2.612 0 0 1-2.61 2.61H10.61A2.612 2.612 0 0 1 8 27.216v-5.309L12.33 10h3.496v1.043h-2.765L9.267 21.478h9.69zm-9.914 1.044v4.695c0 .863.703 1.566 1.566 1.566h5.739c.863 0 1.565-.703 1.565-1.566v-4.695h-8.87zm13.044 0v4.695c0 .863.702 1.566 1.565 1.566h5.74c.862 0 1.565-.703 1.565-1.566v-4.695h-8.87z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    transform: "translate(-8 -10)",
    xlinkHref: "#glasses_svg__a"
  }));
};

var _default = SvgGlasses;
exports["default"] = _default;