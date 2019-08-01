"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgShare = function SvgShare(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 23"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "share_svg__a",
    d: "M.522 22.957A.522.522 0 0 1 0 22.435V7.826c0-.288.233-.522.522-.522h5.217a.522.522 0 1 1 0 1.044H1.043v13.565h15.653V15.13a.522.522 0 1 1 1.043 0v7.305a.522.522 0 0 1-.522.522H.522zm7.826-7.827c0-6.041 4.915-10.956 10.956-10.956h2.393L18.414.89a.521.521 0 1 1 .737-.738l4.174 4.173a.522.522 0 0 1 0 .739L19.15 9.238a.52.52 0 0 1-.737 0 .521.521 0 0 1 0-.737l3.283-3.284h-2.393c-5.466 0-9.913 4.447-9.913 9.913a.522.522 0 1 1-1.043 0z"
  })), _react["default"].createElement("use", {
    fill: "#222221",
    xlinkHref: "#share_svg__a"
  }));
};

var _default = SvgShare;
exports["default"] = _default;