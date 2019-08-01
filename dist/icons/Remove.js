"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRemove = function SvgRemove(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 14 2"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "remove_svg__a",
    d: "M13 20.636h14v-1.272H13z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    transform: "translate(-13 -19)",
    xlinkHref: "#remove_svg__a"
  }));
};

var _default = SvgRemove;
exports["default"] = _default;