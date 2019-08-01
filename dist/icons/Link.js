"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLink = function SvgLink(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 25"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "link_svg__a",
    d: "M5.997 24.547a5.96 5.96 0 0 1-4.242-1.757 6.006 6.006 0 0 1 0-8.486l4.09-4.09.772.77-4.091 4.092a4.915 4.915 0 0 0 0 6.942 4.877 4.877 0 0 0 3.471 1.438c1.311 0 2.544-.51 3.471-1.438l3.706-3.705a4.877 4.877 0 0 0 1.437-3.471c0-1.312-.51-2.544-1.437-3.472a4.858 4.858 0 0 0-1.678-1.1l-.507-.198.398-1.016.508.2a5.954 5.954 0 0 1 2.05 1.343 5.961 5.961 0 0 1 1.757 4.243c0 1.603-.624 3.11-1.757 4.242L10.24 22.79a5.96 5.96 0 0 1-4.243 1.757zm6.611-8.514l-.508-.199a6.007 6.007 0 0 1-2.05-9.83l3.705-3.704a6.006 6.006 0 0 1 8.485 0 6.006 6.006 0 0 1 0 8.485l-4.091 4.091-.772-.77 4.091-4.092a4.876 4.876 0 0 0 1.438-3.471c0-1.312-.51-2.544-1.438-3.472a4.916 4.916 0 0 0-6.942 0L10.82 6.776a4.915 4.915 0 0 0 1.677 8.043l.508.199-.398 1.015z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    xlinkHref: "#link_svg__a"
  }));
};

var _default = SvgLink;
exports["default"] = _default;