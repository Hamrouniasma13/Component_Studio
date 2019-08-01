"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactUse = require("react-use");

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var useChartWidth = function useChartWidth() {
  var padding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;

  var _React$useContext = _react["default"].useContext(_core.ThemeContext),
      breakpoints = _React$useContext.breakpoints;

  var _useWindowSize = (0, _reactUse.useWindowSize)(),
      width = _useWindowSize.width;

  var isTablet = (0, _reactUse.useMedia)("(max-width : ".concat(breakpoints.tablet, "px)"));
  var isLaptop = (0, _reactUse.useMedia)("(min-width : ".concat(breakpoints.tablet, "px) and (max-width : ").concat(breakpoints.laptop, "px)"));
  var newWidth = 320;

  if (isTablet) {
    newWidth = width - padding * 2;
  } else if (isLaptop) {
    newWidth = 720 - padding * 2;
  }

  return newWidth;
};

var _default = useChartWidth;
exports["default"] = _default;