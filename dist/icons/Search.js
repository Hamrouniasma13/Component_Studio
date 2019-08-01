"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSearch = function SvgSearch(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "search_svg__a",
    d: "M16.683 18l.772-.771 5.68 5.68-.771.771-5.68-5.68zm-7.41 1.09C4.16 19.09 0 14.932 0 9.819S4.16.545 9.273.545c5.113 0 9.272 4.16 9.272 9.273 0 5.113-4.16 9.273-9.272 9.273zm0-17.454c-4.512 0-8.182 3.67-8.182 8.182C1.09 14.33 4.76 18 9.273 18c4.511 0 8.182-3.67 8.182-8.182 0-4.511-3.67-8.182-8.182-8.182zm-4.91 8.182h-1.09c0-3.308 2.692-6 6-6V4.91a4.915 4.915 0 0 0-4.91 4.91z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    xlinkHref: "#search_svg__a"
  }));
};

var _default = SvgSearch;
exports["default"] = _default;