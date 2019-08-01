"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBell = function SvgBell(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 22 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "bell_svg__a",
    d: "M19.957 8c-4.389 0-7.827 3.438-7.827 7.826v3.13c0 1.784-.894 2.766-1.76 3.714-.704.773-1.37 1.503-1.37 2.547 0 1.783 2.78 3.057 7.323 3.49A3.657 3.657 0 0 0 19.957 32a3.657 3.657 0 0 0 3.633-3.294c4.543-.432 7.323-1.706 7.323-3.489 0-1.044-.666-1.774-1.37-2.547-.866-.948-1.76-1.93-1.76-3.713v-3.13c0-4.39-3.438-7.827-7.826-7.827zm0 22.957a2.606 2.606 0 0 1-2.564-2.167 41.047 41.047 0 0 0 5.128 0 2.608 2.608 0 0 1-2.564 2.167zm8.815-7.583c.613.672 1.098 1.203 1.098 1.843 0 .902-2.144 2.109-6.81 2.488l-.007-.002c-.004 0-.007.003-.011.003-.93.075-1.952.12-3.085.12-6.838 0-9.914-1.525-9.914-2.609 0-.64.485-1.17 1.098-1.843.906-.994 2.033-2.23 2.033-4.417v-3.13c0-3.804 2.979-6.784 6.783-6.784 3.803 0 6.782 2.98 6.782 6.783v3.13c0 2.189 1.127 3.424 2.033 4.418z"
  })), _react["default"].createElement("use", {
    transform: "translate(-9 -8)",
    xlinkHref: "#bell_svg__a"
  }));
};

var _default = SvgBell;
exports["default"] = _default;