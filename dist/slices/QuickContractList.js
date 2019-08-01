"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = QuickContractList;

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Slice = _interopRequireDefault(require("./Slice"));

var _ContractItem = _interopRequireDefault(require("../components/ContractItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function QuickContractList(_ref) {
  var title = _ref.title,
      actions = _ref.actions,
      items = _ref.items;
  if (!Array.isArray(items)) return null;
  return (0, _core.jsx)(_Slice["default"], {
    title: title,
    actions: actions
  }, items && items.length > 0 && items.slice(0, 3).map(function (contract, key) {
    return (0, _core.jsx)(_ContractItem["default"], _extends({}, contract, {
      key: key
    }));
  }));
}

QuickContractList.propTypes = {
  title: _Slice["default"].propTypes.title,
  listLink: _Slice["default"].propTypes.actions,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape(_ContractItem["default"].propTypes))
};