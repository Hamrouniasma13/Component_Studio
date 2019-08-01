"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SavingSlice;

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Slice = _interopRequireDefault(require("../Slice"));

var _Saving = _interopRequireDefault(require("./Saving"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
function SavingSlice(_ref) {
  var title = _ref.title,
      actions = _ref.actions,
      savingProps = _ref.savingProps;
  return (0, _core.jsx)(_Slice["default"], {
    title: title,
    actions: actions
  }, (0, _core.jsx)(_Saving["default"], savingProps));
}

SavingSlice.propTypes = {
  title: _Slice["default"].propTypes.title,
  actions: _Slice["default"].propTypes.actions,
  savingProps: _propTypes["default"].shape(_Saving["default"].propTypes)
};