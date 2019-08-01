"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEdit = function SvgEdit(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 20 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "edit_svg__a",
    d: "M15.587 26.977c.148 0 .29-.059.395-.164l13.41-13.395a.557.557 0 0 0 0-.79l-4.47-4.464a.559.559 0 0 0-.79 0l-13.41 13.395a.555.555 0 0 0-.163.395v4.465c0 .308.25.558.558.558h4.47zm8.94-17.63l3.68 3.676-2.004 2.002-3.68-3.676 2.004-2.002zm-12.85 12.838l10.056-10.047 3.68 3.676-10.057 10.047h-3.68v-3.676zM10 31.442c0-.309.25-.558.559-.558h17.879a.558.558 0 1 1 0 1.116h-17.88a.558.558 0 0 1-.558-.558z"
  })), _react["default"].createElement("use", {
    transform: "translate(-10 -8)",
    xlinkHref: "#edit_svg__a"
  }));
};

var _default = SvgEdit;
exports["default"] = _default;