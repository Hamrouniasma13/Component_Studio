"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.breakpoints = void 0;
var breakpoints = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200
};
exports.breakpoints = breakpoints;
var _default = {
  mobile: "@media only screen and (min-width : ".concat(breakpoints.mobile, "px)"),
  tablet: "@media only screen and (min-width : ".concat(breakpoints.tablet, "px)"),
  laptop: "@media only screen and (min-width : ".concat(breakpoints.laptop, "px)"),
  desktop: "@media only screen and (min-width : ".concat(breakpoints.desktop, "px)")
};
exports["default"] = _default;