"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgInfo = function SvgInfo(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "info_svg__a",
    d: "M20 8c6.626 0 12 5.374 12 12s-5.374 12-12 12S8 26.626 8 20 13.374 8 20 8zm0 22.957c6.052 0 10.957-4.905 10.957-10.957 0-6.052-4.905-10.957-10.957-10.957-6.052 0-10.957 4.905-10.957 10.957 0 6.052 4.905 10.957 10.957 10.957zm2.087-6.261c.313 0 .522.208.522.521 0 .313-.209.522-.522.522h-4.174c-.313 0-.522-.209-.522-.522 0-.313.209-.521.522-.521h1.565v-5.218h-1.565c-.313 0-.522-.208-.522-.521 0-.314.209-.522.522-.522H20c.313 0 .522.208.522.522v5.739h1.565zM20 16.348c-.313 0-.522-.209-.522-.522v-1.043c0-.313.209-.522.522-.522.313 0 .522.209.522.522v1.043c0 .313-.209.522-.522.522z"
  })), _react["default"].createElement("use", {
    fill: props.fill,
    transform: "translate(-8 -8)",
    xlinkHref: "#info_svg__a"
  }));
};

var _default = SvgInfo;
exports["default"] = _default;
SvgInfo.propTypes = {
  fill: _propTypes["default"].string
};
SvgInfo.defaultProps = {
  fill: '#231F20'
};