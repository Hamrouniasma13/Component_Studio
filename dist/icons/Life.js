"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLife = function SvgLife(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 22 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "life_svg__a",
    d: "M.522 12.522c-.157 0-.313-.052-.365-.157A.592.592 0 0 1 0 11.948c.522-5.426 4.957-9.6 10.383-9.861V.522c0-.313.208-.522.521-.522.313 0 .522.209.522.522v1.565c5.426.26 9.861 4.435 10.383 9.86a.592.592 0 0 1-.157.418c-.052.105-.209.157-.365.157h-9.86v7.826a2.583 2.583 0 0 0 2.608 2.609 2.583 2.583 0 0 0 2.608-2.61c0-.312.21-.52.522-.52.313 0 .522.208.522.52A3.63 3.63 0 0 1 14.035 24a3.63 3.63 0 0 1-3.652-3.652v-7.826H.522zm5.687-1.044h4.174V3.443a8.796 8.796 0 0 0-4.174 7.514v.521zm5.217-8.035v8.035H15.6v-.521a8.796 8.796 0 0 0-4.174-7.514zm9.287 8.035a9.919 9.919 0 0 0-7.617-8.087c2.243 1.826 3.547 4.592 3.547 7.566v.521h4.07zm-12-8.087a9.919 9.919 0 0 0-7.617 8.087h4.07v-.521c0-2.974 1.304-5.74 3.547-7.566z"
  })), _react["default"].createElement("use", {
    xlinkHref: "#life_svg__a"
  }));
};

var _default = SvgLife;
exports["default"] = _default;