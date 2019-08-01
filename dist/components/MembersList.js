"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MembersList;

var _core = require("@emotion/core");

var _TableV = _interopRequireDefault(require("./TableV2"));

var _Container = _interopRequireDefault(require("./Container"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function MembersList(_ref) {
  var title = _ref.title,
      head = _ref.head,
      rows = _ref.rows;
  return (0, _core.jsx)("div", {
    css: {
      margin: '50px 0'
    }
  }, (0, _core.jsx)(_Container["default"], null, (0, _core.jsx)(_Text["default"].h2, {
    mb: 30
  }, title)), (0, _core.jsx)(_TableV["default"], {
    head: head,
    rows: rows
  }));
}

MembersList.propTypes = {
  head: _TableV["default"].propTypes.head,
  rows: _TableV["default"].propTypes.rows
};