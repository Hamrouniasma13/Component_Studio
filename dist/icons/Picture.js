"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPicture = function SvgPicture(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "picture_svg__a",
    d: "M23.478 0c.313 0 .522.209.522.522v22.956c0 .313-.209.522-.522.522H.522C.209 24 0 23.791 0 23.478V.522C0 .209.209 0 .522 0h22.956zm-.521 22.957V1.043H1.043v21.914h21.914zm-19.305-3.13a.564.564 0 0 1-.365-.157c-.209-.157-.26-.522-.052-.73l5.217-6.262a.495.495 0 0 1 .678-.104l4.853 2.922 6.052-5.948a.504.504 0 0 1 .73 0 .504.504 0 0 1 0 .73l-6.26 6.261c-.157.209-.418.209-.627.104l-4.852-2.921-4.956 5.895a.475.475 0 0 1-.418.21zM9.913 9.39a2.583 2.583 0 0 1-2.609-2.608 2.583 2.583 0 0 1 2.609-2.61 2.583 2.583 0 0 1 2.609 2.61A2.583 2.583 0 0 1 9.913 9.39zm0-4.174c-.887 0-1.565.679-1.565 1.566s.678 1.565 1.565 1.565c.887 0 1.565-.678 1.565-1.565 0-.887-.678-1.566-1.565-1.566z"
  })), _react["default"].createElement("use", {
    xlinkHref: "#picture_svg__a"
  }));
};

var _default = SvgPicture;
exports["default"] = _default;