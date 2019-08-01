"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBook = function SvgBook(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 20 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "book_svg__a",
    d: "M13.632 8h6.225a.52.52 0 0 1 .519.522v8.87a.522.522 0 0 1-.519.521c-.1 0-.2-.03-.288-.088l-2.825-1.894-2.825 1.894a.517.517 0 0 1-.806-.434v-8.87A.52.52 0 0 1 13.632 8zm5.706 8.417V9.043H14.15v7.374l2.306-1.547a.517.517 0 0 1 .576 0l2.306 1.547zM10 31.478V8.522A.52.52 0 0 1 10.519 8a.52.52 0 0 1 .519.522v22.435h17.639V9.043H22.97a.52.52 0 0 1-.519-.521A.52.52 0 0 1 22.97 8h6.225a.52.52 0 0 1 .52.522v22.956a.52.52 0 0 1-.52.522H10.52a.52.52 0 0 1-.519-.522z"
  })), _react["default"].createElement("use", {
    transform: "translate(-10 -8)",
    xlinkHref: "#book_svg__a"
  }));
};

var _default = SvgBook;
exports["default"] = _default;