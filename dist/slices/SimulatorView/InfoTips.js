"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("../../components/Link"));

var _Text = _interopRequireDefault(require("../../components/Text"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Wrapper = (0, _styled["default"])('div')({
  marginTop: '10px'
});

var InfoTips = function InfoTips(_ref) {
  var label = _ref.label,
      link = _ref.link;
  return _react["default"].createElement(Wrapper, null, link ? _react["default"].createElement(_Link["default"], link, _react["default"].createElement(_Text["default"], {
    size: "typo6"
  }, label)) : _react["default"].createElement(_Text["default"], {
    size: "typo6"
  }, label));
};

var _default = InfoTips;
exports["default"] = _default;