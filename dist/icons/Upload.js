"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUpload = function SvgUpload(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 17"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "upload_svg__a",
    d: "M23.5 21.544a.521.521 0 1 1-.738.738l-2.24-2.24v7.088a.521.521 0 1 1-1.044 0v-7.088l-2.24 2.24a.521.521 0 1 1-.738-.738l3.13-3.13a.525.525 0 0 1 .74 0l3.13 3.13zm4.255-2.218A4.703 4.703 0 0 1 32 24a4.7 4.7 0 0 1-4.696 4.696h-3.13a.521.521 0 1 1 0-1.044h3.13A3.657 3.657 0 0 0 30.957 24a3.656 3.656 0 0 0-3.63-3.652.522.522 0 0 1-.57-.485c-.25-3.824-3.449-6.82-7.279-6.82a7.288 7.288 0 0 0-7.285 6.95.522.522 0 0 1-.393.48A3.642 3.642 0 0 0 9.043 24a3.657 3.657 0 0 0 3.653 3.652h3.13a.521.521 0 1 1 0 1.044h-3.13A4.7 4.7 0 0 1 8 24a4.682 4.682 0 0 1 3.176-4.429A8.33 8.33 0 0 1 19.478 12c4.22 0 7.77 3.182 8.277 7.326z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -12)",
    xlinkHref: "#upload_svg__a"
  }));
};

var _default = SvgUpload;
exports["default"] = _default;