"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLock = function SvgLock(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 40 40"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "lock_svg__a",
    d: "M5.685 9.37V5.966A5.974 5.974 0 0 1 11.65 0a5.973 5.973 0 0 1 5.966 5.966V9.37h2.622c1.137 0 2.063.925 2.063 2.062v10.93a2.064 2.064 0 0 1-2.063 2.063H3.061A2.064 2.064 0 0 1 1 22.363V11.432c0-1.137.925-2.062 2.062-2.062h2.623zm1 0h9.932V5.966A4.972 4.972 0 0 0 11.65 1a4.972 4.972 0 0 0-4.966 4.966V9.37zm-3.623 1c-.585 0-1.062.477-1.062 1.062v10.93c0 .586.477 1.063 1.062 1.063H20.24c.585 0 1.062-.477 1.062-1.062V11.432c0-.585-.477-1.062-1.063-1.062H3.061zm8.589 9.37a2.846 2.846 0 0 1-2.842-2.843 2.845 2.845 0 0 1 2.842-2.842 2.846 2.846 0 0 1 2.843 2.842 2.847 2.847 0 0 1-2.843 2.843zm0-4.685a1.844 1.844 0 0 0 0 3.685 1.846 1.846 0 0 0 1.843-1.843 1.845 1.845 0 0 0-1.843-1.842z"
  })), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(9 8)"
  }, _react["default"].createElement("mask", {
    id: "lock_svg__b",
    fill: "#fff"
  }, _react["default"].createElement("use", {
    xlinkHref: "#lock_svg__a"
  })), _react["default"].createElement("use", {
    fill: "#444",
    xlinkHref: "#lock_svg__a"
  }), _react["default"].createElement("g", {
    fill: "#000",
    mask: "url(#lock_svg__b)"
  }, _react["default"].createElement("path", {
    d: "M-9-8h40v40H-9z"
  }))));
};

var _default = SvgLock;
exports["default"] = _default;