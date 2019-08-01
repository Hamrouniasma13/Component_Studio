"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HealthDashboard;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _Slice = _interopRequireDefault(require("../Slice"));

var _Saving = _interopRequireDefault(require("../Saving/Saving"));

var _RefundTimeline = _interopRequireDefault(require("./RefundTimeline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function HealthDashboard(_ref) {
  var title = _ref.title,
      actions = _ref.actions,
      children = _ref.children;
  return (0, _core.jsx)(_Slice["default"], {
    title: title,
    actions: actions
  }, _react["default"].Children.map(children, function (child) {
    return (0, _core.jsx)("div", {
      css: {
        marginBottom: 40
      }
    }, child);
  }));
}

HealthDashboard.propTypes = {
  title: _Slice["default"].propTypes.title,
  actions: _Slice["default"].propTypes.actions
};
HealthDashboard.Expenses = _Saving["default"];
HealthDashboard.Refunds = _RefundTimeline["default"];