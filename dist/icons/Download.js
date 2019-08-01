"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDownload = function SvgDownload(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "download_svg__a",
    d: "M23.283 26.935a.521.521 0 1 1 .738.738l-3.652 3.652a.522.522 0 0 1-.738 0l-3.652-3.652a.521.521 0 1 1 .738-.738l2.761 2.762V17.913a.522.522 0 1 1 1.044 0v11.784l2.761-2.762zm4.472-11.61A4.702 4.702 0 0 1 32 20a4.701 4.701 0 0 1-4.696 4.696h-3.13a.522.522 0 1 1 0-1.044h3.13A3.657 3.657 0 0 0 30.957 20a3.656 3.656 0 0 0-3.63-3.652.522.522 0 0 1-.57-.485c-.25-3.824-3.449-6.82-7.279-6.82a7.29 7.29 0 0 0-7.285 6.95.522.522 0 0 1-.393.48A3.641 3.641 0 0 0 9.043 20a3.657 3.657 0 0 0 3.653 3.652h3.13a.522.522 0 1 1 0 1.044h-3.13A4.701 4.701 0 0 1 8 20a4.682 4.682 0 0 1 3.176-4.429A8.331 8.331 0 0 1 19.478 8c4.22 0 7.769 3.182 8.277 7.326z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -8)",
    xlinkHref: "#download_svg__a"
  }));
};

var _default = SvgDownload;
exports["default"] = _default;