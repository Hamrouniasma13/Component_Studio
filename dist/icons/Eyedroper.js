"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEyedroper = function SvgEyedroper(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 21 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "eyedroper_svg__a",
    d: "M13.871 30.064A1.938 1.938 0 0 1 11.936 32 1.938 1.938 0 0 1 10 30.064c0-1.234 1.488-2.804 1.658-2.979a.386.386 0 0 1 .274-.118h.004c.102 0 .2.041.273.114.17.17 1.662 1.699 1.662 2.983zm-3.097 0a1.163 1.163 0 0 0 2.323 0c0-.669-.687-1.599-1.158-2.137-.472.551-1.165 1.499-1.165 2.137zm18.601-21.31a2.58 2.58 0 0 1 0 3.644l-1.794 1.795 2.049 2.049a.387.387 0 0 1 0 .547l-1.936 1.936a.386.386 0 0 1-.547 0l-2.05-2.05-3.597 3.598-4.645 4.645a.387.387 0 0 1-.231.112l-3.484.387a.387.387 0 0 1-.428-.427l.387-3.484a.387.387 0 0 1 .111-.231l1.548-1.549 6.695-6.695-2.049-2.049a.387.387 0 0 1 0-.547l1.936-1.936a.387.387 0 0 1 .547 0l2.05 2.05 1.794-1.795a2.58 2.58 0 0 1 3.644 0zM16.403 24.275l3.889-3.889h-5.1l-1.338 1.34-.319 2.868 2.868-.319zm4.663-4.663l3.484-3.484-2.55-2.55-6.033 6.034h5.1zm7.762-7.761a1.805 1.805 0 0 0 0-2.55 1.805 1.805 0 0 0-2.55 0l-2.068 2.068a.387.387 0 0 1-.547 0l-2.05-2.049-1.388 1.389 7.195 7.194 1.389-1.388-2.05-2.049a.387.387 0 0 1 0-.547l2.069-2.068z"
  })), _react["default"].createElement("use", {
    transform: "translate(-10 -8)",
    xlinkHref: "#eyedroper_svg__a"
  }));
};

var _default = SvgEyedroper;
exports["default"] = _default;