"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Radios = _interopRequireDefault(require("../../components/forms/Radios"));

var _InfoTips = _interopRequireDefault(require("./InfoTips"));

var _QuestionHeading = _interopRequireDefault(require("./QuestionHeading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var QuestionRadio = function QuestionRadio(_ref) {
  var label = _ref.label,
      color = _ref.color,
      name = _ref.name,
      options = _ref.options,
      info = _ref.info,
      onChange = _ref.onChange,
      value = _ref.value;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_QuestionHeading["default"], {
    label: label
  }), _react["default"].createElement(_Radios["default"], {
    big: true,
    color: color,
    name: name,
    value: value,
    options: options,
    onChange: onChange
  }), info ? _react["default"].createElement(_InfoTips["default"], {
    label: info.label,
    link: info.link
  }) : null);
};

var _default = QuestionRadio;
exports["default"] = _default;