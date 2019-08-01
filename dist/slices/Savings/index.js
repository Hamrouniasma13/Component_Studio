"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Savings;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Slice = _interopRequireDefault(require("../Slice"));

var _Card = _interopRequireDefault(require("./Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Savings(_ref) {
  var title = _ref.title,
      card1 = _ref.card1,
      card2 = _ref.card2;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    cards: _defineProperty({}, theme.media.tablet, {
      display: 'flex',
      justifyContent: 'space-between'
    })
  };
  return (0, _core.jsx)(_Slice["default"], {
    title: title
  }, (0, _core.jsx)("div", {
    css: styles.cards
  }, card1 ? (0, _core.jsx)(_Card["default"], card1) : null, card2 ? (0, _core.jsx)(_Card["default"], card2) : null));
}

Savings.propTypes = {
  title: _Slice["default"].propTypes.title,
  card1: _propTypes["default"].shape(_Card["default"].propTypes),
  card2: _propTypes["default"].shape(_Card["default"].propTypes)
};