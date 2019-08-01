"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDocuments = function SvgDocuments(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 20 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "documents_svg__a",
    d: "M0 24V0h19.826v24H0zm1.043-1.043h17.74V1.043H1.043v21.914zM4.173 8.87h11.48V4.174H4.172V8.87zM3.13 9.913V3.13h13.566v6.783H3.13zm0 3.652v-1.043h13.566v1.043H3.13zm0 3.652v-1.043h13.566v1.043H3.13zm0 3.653v-1.044h6.783v1.044H3.13z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    xlinkHref: "#documents_svg__a"
  }));
};

var _default = SvgDocuments;
exports["default"] = _default;