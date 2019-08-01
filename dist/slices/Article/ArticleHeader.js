"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ArticleHeader;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("../../components/Container"));

var _Text = _interopRequireDefault(require("../../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ArticleHeader(_ref) {
  var title = _ref.title,
      date = _ref.date,
      category = _ref.category,
      image = _ref.image;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: {
      backgroundColor: '#fff',
      marginTop: 40
    },
    subline: {
      marginBottom: 30,
      overflow: 'hidden',
      textTransform: 'uppercase'
    },
    date: {
      paddingRight: '10px'
    },
    category: {
      color: theme.colors.label,
      '&:not(:first-of-type)': {
        paddingLeft: '10px',
        borderLeft: "2px solid ".concat(theme.colors.label)
      }
    },
    image: _defineProperty({
      marginBottom: 30,
      width: '100%'
    }, theme.media.tablet, {
      marginBottom: 40
    })
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Container["default"], {
    article: true
  }, (0, _core.jsx)(_Text["default"].h1, {
    mb: 30
  }, title), date || category ? (0, _core.jsx)("div", {
    css: styles.subline
  }, date && (0, _core.jsx)(_Text["default"], {
    css: styles.date
  }, date), category && (0, _core.jsx)(_Text["default"], {
    css: styles.category
  }, category)) : null, image && image.src && (0, _core.jsx)("img", {
    src: image.src,
    alt: image.alt,
    css: styles.image
  })));
}

ArticleHeader.propTypes = {
  title: _propTypes["default"].string.isRequired,
  date: _propTypes["default"].string,
  category: _propTypes["default"].string,
  image: _propTypes["default"].shape({
    src: _propTypes["default"].string,
    alt: _propTypes["default"].string
  })
};