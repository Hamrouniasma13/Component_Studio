"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHealth = function SvgHealth(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 23"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "health_svg__a",
    d: "M25.217 9A6.77 6.77 0 0 1 32 15.783c0 1.356-.522 2.87-1.409 4.382-2.974 5.583-9.965 11.374-10.33 11.687-.104.052-.209.105-.313.105-.105 0-.209 0-.313-.105-.365-.313-7.357-6.104-10.33-11.687C8.521 18.652 8 17.14 8 15.783A6.77 6.77 0 0 1 14.783 9c2.034 0 3.913.887 5.217 2.452A6.738 6.738 0 0 1 25.217 9zM20 30.757c1.357-1.148 6.626-5.792 9.287-10.279h-5.896l-1.93 2.922c-.104.104-.261.209-.418.209a.475.475 0 0 1-.417-.209l-3.756-5.635-1.67 2.505c-.104.104-.26.208-.417.208H10.66c2.713 4.487 7.982 9.13 9.339 10.279zm9.913-11.322c.626-1.305 1.044-2.505 1.044-3.652a5.723 5.723 0 0 0-5.74-5.74c-1.93 0-3.704.94-4.747 2.557a.536.536 0 0 1-.887 0 5.758 5.758 0 0 0-4.8-2.557 5.723 5.723 0 0 0-5.74 5.74c0 1.147.366 2.347 1.044 3.652h4.435l1.878-2.922a.536.536 0 0 1 .887 0l3.756 5.635 1.67-2.505c.104-.104.26-.208.417-.208h6.783z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -9)",
    xlinkHref: "#health_svg__a"
  }));
};

var _default = SvgHealth;
exports["default"] = _default;