"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _InputText = _interopRequireDefault(require("../../components/InputText"));

var _InfoTips = _interopRequireDefault(require("./InfoTips"));

var _QuestionHeading = _interopRequireDefault(require("./QuestionHeading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InputWrapper = (0, _styled["default"])('div')({
  label: 'InputWrapper',
  display: 'flex',
  alignItems: 'center'
});
var QuestionInputText = (0, _styled["default"])(_InputText["default"])({
  minWidth: 180
});
var SuffixWrapper = (0, _styled["default"])('div')({
  fontWeight: 'bold',
  fontSize: '28px',
  paddingLeft: '16px',
  lineHeight: '22px'
});

var QuestionInput = function QuestionInput(_ref) {
  var label = _ref.label,
      name = _ref.name,
      info = _ref.info,
      value = _ref.value,
      type = _ref.type,
      step = _ref.step,
      _onChange = _ref.onChange,
      suffix = _ref.suffix;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_QuestionHeading["default"], {
    label: label
  }), _react["default"].createElement(InputWrapper, null, _react["default"].createElement(QuestionInputText, {
    value: value,
    id: name,
    type: type,
    step: step,
    onChange: function onChange(value) {
      _onChange({
        name: name,
        value: value
      });
    }
  }), suffix ? _react["default"].createElement(SuffixWrapper, null, suffix) : null), info ? _react["default"].createElement(_InfoTips["default"], {
    label: info.label,
    link: info.link
  }) : null);
};

var _default = QuestionInput;
exports["default"] = _default;