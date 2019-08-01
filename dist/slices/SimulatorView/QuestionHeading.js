"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Text = _interopRequireDefault(require("../../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledHeading = (0, _styled["default"])(_Text["default"])({
  marginBottom: '20px'
});

var QuestionHeading = function QuestionHeading(_ref) {
  var label = _ref.label;
  return _react["default"].createElement(StyledHeading, {
    tag: "h2"
  }, label);
};

var _default = QuestionHeading;
exports["default"] = _default;