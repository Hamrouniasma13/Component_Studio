"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _Button = _interopRequireDefault(require("../../components/Button"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _QuestionRadio = _interopRequireDefault(require("./QuestionRadio"));

var _QuestionInput = _interopRequireDefault(require("./QuestionInput"));

var _QuestionWrapper = _interopRequireDefault(require("./QuestionWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SimulatorWrapper = (0, _styled["default"])('div')(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({
    label: 'SimulatorWrapper',
    width: '100%',
    margin: '60px 0'
  }, theme.media.desktop, {
    width: '768px'
  });
});
var StyledButton = (0, _styled["default"])(_Button["default"])(function (_ref3) {
  var theme = _ref3.theme;
  return _defineProperty({}, theme.media.tablet, {
    marginLeft: '60px'
  });
});

var getNextQuestionForAnswer = function getNextQuestionForAnswer(question, answer) {
  // Check for the checkbox
  var q = (0, _lodash.get)(question, 'options') && question.options.find(function (option) {
    return option.value === answer;
  });
  if (q && q.next) return q.next; // check for classic input
  else if (question.next) return question.next;else return false;
};
/**
 * Check weather or not ta question has been answered
 * @param {Object} question Question type
 * @param {Object} answers all answers
 */


var isAnswered = function isAnswered(question, answers) {
  return question && answers[question.name];
};
/**
 * Get all the question that has need responded yet
 * @param {Array} questions Array of question to display
 * @param {Object} answers all answers
 */


var getLastAnsweredQuestions = function getLastAnsweredQuestions(questions, answers) {
  var currentQ = questions[questions.length - 1];
  var isNext = isAnswered(currentQ, answers) && getNextQuestionForAnswer(currentQ, answers[currentQ.name]);

  if (isNext) {
    questions.push(isNext);
    return getLastAnsweredQuestions(questions, answers);
  } else return questions;
};
/**
 * Get the all the question to display
 * @param {Object} questions displayed questions
 * @param {Object} answers all answers
 */


var getQuestionsToDisplay = function getQuestionsToDisplay(questions, answers) {
  var defaultQuestion = [questions];
  return getLastAnsweredQuestions(defaultQuestion, answers).filter(function (q) {
    return q;
  });
};

var SimulatorView = function SimulatorView(_ref5) {
  var questions = _ref5.questions,
      defaultAnswers = _ref5.answers,
      onUpdate = _ref5.onUpdate,
      onSubmit = _ref5.onSubmit;
  if (!questions) return null;

  var _useState = (0, _react.useState)(defaultAnswers || {}),
      _useState2 = _slicedToArray(_useState, 2),
      answers = _useState2[0],
      setAnswers = _useState2[1];

  var displayedQuestions = getQuestionsToDisplay(questions, answers);

  var onAnswer = function onAnswer(_ref6) {
    var name = _ref6.name,
        value = _ref6.value;
    var nextQuestions = getQuestionsToDisplay(questions, _objectSpread({}, answers, _defineProperty({}, name, value)));
    var validAnswers = nextQuestions.reduce(function (out, question) {
      return _objectSpread({}, out, {}, answers[question.name] ? _defineProperty({}, question.name, answers[question.name]) : {});
    }, {});

    var newAnswers = _objectSpread({}, validAnswers, _defineProperty({}, name, value));

    onUpdate && onUpdate(newAnswers);
    setAnswers(newAnswers);
  };

  return _react["default"].createElement(SimulatorWrapper, null, displayedQuestions.map(function (question, i) {
    var hasNext = getNextQuestionForAnswer(question, answers[question.name]) && answers[question.name];

    if (question.type === 'radio') {
      return _react["default"].createElement(_QuestionWrapper["default"], {
        key: question.name,
        number: i + 1,
        hasNext: hasNext
      }, _react["default"].createElement(_QuestionRadio["default"], _extends({
        color: "secondary"
      }, question, {
        value: answers[question.name],
        onChange: onAnswer
      })));
    } else if (question.type === 'number' || question.type === 'email' || question.type === 'text') {
      return _react["default"].createElement(_QuestionWrapper["default"], {
        key: question.name,
        number: i + 1,
        hasNext: hasNext
      }, _react["default"].createElement(_QuestionInput["default"], _extends({}, question, {
        value: answers[question.name],
        onChange: onAnswer
      })));
    }

    return null;
  }), !displayedQuestions[displayedQuestions.length - 1].next && answers[displayedQuestions[displayedQuestions.length - 1].name] ? _react["default"].createElement(StyledButton, {
    color: "secondary",
    onClick: function onClick() {
      return onSubmit && onSubmit(answers);
    }
  }, "Calculer") : null);
};

var _default = SimulatorView;
exports["default"] = _default;