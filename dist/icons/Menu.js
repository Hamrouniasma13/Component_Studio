"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMenu = function SvgMenu(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 16"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "menu_svg__a",
    d: "M8 20.348v-1.044h24v1.044H8zm0-7.305V12h24v1.043H8zm0 14.61v-1.044h24v1.043H8z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    transform: "translate(-8 -12)",
    xlinkHref: "#menu_svg__a"
  }));
};

var _default = SvgMenu;
exports["default"] = _default;