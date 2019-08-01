"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CompaniesLikeMe;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _Slice = _interopRequireDefault(require("./Slice"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _Tip = _interopRequireDefault(require("../components/Tip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Box(_ref) {
  var _wrapper;

  var title = _ref.title,
      value = _ref.value;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: (_wrapper = {
      backgroundColor: '#fff',
      border: 'solid 1px #f5f5f5',
      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.15)',
      padding: '25px 30px',
      marginBottom: '30px'
    }, _defineProperty(_wrapper, theme.media.tablet, {
      width: '46%',
      marginRight: '20px'
    }), _defineProperty(_wrapper, theme.media.desktop, {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginRight: 0,
      marginBottom: '0',
      height: '180px',
      width: '260px'
    }), _wrapper),
    value: {
      color: theme.colors.primary,
      textAlign: 'right'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Text["default"].h3, {
    size: "typo2",
    mb: 15
  }, title), (0, _core.jsx)(_Text["default"], {
    tag: "p",
    mb: 5,
    size: "typo1",
    "data-cy": title,
    css: styles.value
  }, value));
}

function CompaniesLikeMe(_ref2) {
  var title = _ref2.title,
      figures = _ref2.figures,
      informationBoxTitle = _ref2.informationBoxTitle,
      informationBoxContent = _ref2.informationBoxContent;

  var theme = _react["default"].useContext(_core.ThemeContext);

  if (!Array.isArray(figures) || figures.length < 1) return null;
  var styles = {
    wrapper: _defineProperty({}, theme.media.tablet, {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      margin: '30px 0'
    })
  };
  return (0, _core.jsx)(_Slice["default"], {
    title: title
  }, (0, _core.jsx)("div", {
    css: styles.wrapper
  }, figures.map(function (figure, key) {
    return (0, _core.jsx)(Box, {
      key: key,
      title: figure.label,
      value: figure.value
    });
  })), (0, _core.jsx)(_Tip["default"], {
    title: informationBoxTitle,
    color: "sixth"
  }, informationBoxContent));
}