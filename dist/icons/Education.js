"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEducation = function SvgEducation(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 20"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "education_svg__a",
    d: "M31.714 16.927l-11.428-6.841a.52.52 0 0 0-.572 0L8.286 16.927A.598.598 0 0 0 8 17.44c0 .171.057.4.229.513l4.342 3.022v4.59c0 2.223 3.258 3.99 7.429 3.99s7.429-1.767 7.429-3.99v-4.647l2.285-1.596v7.24c0 .342.229.57.572.57.343 0 .571-.228.571-.57v-8.039l.914-.627c.172-.114.229-.285.229-.513 0-.17-.114-.342-.286-.456zM20 11.283l10.4 6.214-10.4 7.24-10.4-7.24L20 11.283zm6.286 14.282c0 1.368-2.572 2.85-6.286 2.85-3.714 0-6.286-1.482-6.286-2.85v-3.849l5.943 4.162c.114.057.229.114.343.114.114 0 .229-.057.343-.114l5.943-4.162v3.849z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -10)",
    xlinkHref: "#education_svg__a"
  }));
};

var _default = SvgEducation;
exports["default"] = _default;