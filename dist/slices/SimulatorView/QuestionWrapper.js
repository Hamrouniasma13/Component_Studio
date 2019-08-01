"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Text = _interopRequireDefault(require("./../../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Wrapper = (0, _styled["default"])('div')({
  position: 'relative',
  marginBottom: '50px',
  paddingLeft: '60px'
});
var NumberWrapper = (0, _styled["default"])('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    position: 'absolute',
    left: '0',
    top: '-5px',
    backgroundColor: 'white',
    borderRadius: '50%',
    border: "1px solid ".concat(theme.colors.lightGray),
    width: '40px',
    height: '40px',
    lineHeight: '41px',
    textAlign: 'center',
    fontWeight: 600
  };
});
var Number = (0, _styled["default"])(_Text["default"])(function (_ref2) {
  var theme = _ref2.theme;
  return {
    label: 'Number',
    color: theme.colors.darkGray
  };
});
var Line = (0, _styled["default"])('div')(function (_ref3) {
  var theme = _ref3.theme,
      hasNext = _ref3.hasNext;
  return {
    position: 'absolute',
    top: '0',
    bottom: hasNext ? '-70px' : '100%',
    width: '1px',
    background: theme.colors.gray,
    transition: 'bottom 0.6s',
    left: '19px'
  };
});

var QuestionWrapper = function QuestionWrapper(_ref4) {
  var number = _ref4.number,
      children = _ref4.children,
      hasNext = _ref4.hasNext;
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(Line, {
    hasNext: hasNext
  }), _react["default"].createElement(NumberWrapper, null, _react["default"].createElement(Number, {
    size: "typo2"
  }, number)), children);
};

var _default = QuestionWrapper;
exports["default"] = _default;