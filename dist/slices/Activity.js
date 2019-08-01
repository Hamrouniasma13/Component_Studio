"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Activity;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PieChart = _interopRequireDefault(require("../components/PieChart"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _Tip = _interopRequireDefault(require("../components/Tip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Card(_ref) {
  var _ref$percent = _ref.percent,
      percent = _ref$percent === void 0 ? 0 : _ref$percent,
      title = _ref.title,
      subtitle = _ref.subtitle,
      noteTitle = _ref.noteTitle,
      noteContent = _ref.noteContent;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: _defineProperty({
      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.15)',
      backgroundColor: '#fff',
      padding: 20,
      marginBottom: 30
    }, theme.media.tablet, {
      marginBottom: 0,
      '&:first-of-type': {
        marginRight: 40
      },
      '&:last-of-type': {
        marginRight: 0
      },
      width: '50%'
    }),
    top: _defineProperty({}, theme.media.tablet, {
      flex: 1,
      display: 'flex',
      alignItems: 'center'
    }),
    pie: _defineProperty({
      marginBottom: 20,
      '& > div': {
        margin: '0 auto'
      }
    }, theme.media.tablet, {
      marginBottom: 0,
      marginRight: 20
    }),
    right: {
      marginBottom: 30
    },
    title: _defineProperty({
      marginBottom: 10
    }, theme.media.desktop, {
      marginBottom: 20
    }),
    bottom: _defineProperty({
      marginTop: 30
    }, theme.media.desktop, {
      marginTop: 20
    })
  };
  return (0, _core.jsx)("li", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.top
  }, (0, _core.jsx)("div", {
    css: styles.pie
  }, (0, _core.jsx)(_PieChart["default"], {
    "data-cy": title,
    value: percent + ' %',
    values: [{
      value: 100 - percent,
      color: '#e5e5e5'
    }, {
      value: percent,
      color: 'fifth'
    }]
  })), (0, _core.jsx)("div", {
    css: styles.right
  }, (0, _core.jsx)(_Text["default"].h3, {
    css: styles.title
  }, title), subtitle)), (0, _core.jsx)("div", {
    css: styles.bottom
  }, (0, _core.jsx)(_Tip["default"], {
    title: noteTitle
  }, noteContent)));
}

Card.propTypes = {
  percent: _propTypes["default"].number,
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]).isRequired,
  subtitle: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  noteTitle: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  noteContent: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element])
};

function Activity(_ref2) {
  var _ref2$cards = _ref2.cards,
      cards = _ref2$cards === void 0 ? [] : _ref2$cards;

  var theme = _react["default"].useContext(_core.ThemeContext);

  if (!cards || cards.length < 1) return null;
  var styles = {
    cards: _defineProperty({
      margin: 0,
      paddingLeft: 0,
      listStyleType: 'none'
    }, theme.media.desktop, {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'space-between'
    })
  };
  return (0, _core.jsx)("ul", {
    css: styles.cards
  }, cards.map(function (card, key) {
    return (0, _core.jsx)(Card, _extends({}, card, {
      key: key
    }));
  }));
}

Activity.propTypes = {
  cards: _propTypes["default"].arrayOf(_propTypes["default"].shape(Card.propTypes))
};