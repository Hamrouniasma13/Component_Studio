"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ArticleList;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("../components/Container"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _Link = _interopRequireDefault(require("../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Article(_ref) {
  var _main;

  var date = _ref.date,
      title = _ref.title,
      category = _ref.category,
      link = _ref.link;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: _defineProperty({
      padding: '30px 0',
      borderBottom: "1px solid ".concat(theme.colors.lightGray),
      ':last-child': {
        borderBottom: '0'
      }
    }, theme.media.tablet, {
      padding: '40px 0'
    }),
    date: _defineProperty({
      textTransform: 'uppercase',
      marginBottom: '15px'
    }, theme.media.tablet, {
      "float": 'left',
      width: '130px'
    }),
    main: (_main = {}, _defineProperty(_main, theme.media.tablet, {
      marginLeft: '160px'
    }), _defineProperty(_main, theme.media.desktop, {
      marginLeft: '200px'
    }), _main),
    category: {
      color: theme.colors.darkGray,
      textTransform: 'uppercase',
      display: 'block'
    }
  };
  return (0, _core.jsx)("li", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Text["default"], {
    tag: "div",
    css: styles.date
  }, date), (0, _core.jsx)("div", {
    css: styles.main
  }, (0, _core.jsx)(_Link["default"], {
    href: link.url
  }, (0, _core.jsx)(_Text["default"], {
    tag: "div",
    size: "typo3",
    mb: 10
  }, title)), category && (0, _core.jsx)(_Text["default"], {
    size: "typo6",
    css: styles.category
  }, category)));
}

Article.propTypes = {
  date: _propTypes["default"].string,
  title: _propTypes["default"].string.isRequired,
  category: _propTypes["default"].string,
  link: _propTypes["default"].shape({
    url: _propTypes["default"].string.isRequired
  }).isRequired
};

function ArticleList(_ref2) {
  var items = _ref2.items;
  if (!items || items.length < 1) return null;
  var styles = {
    list: {
      margin: 0,
      padding: 0,
      listStyleType: 'none'
    }
  };
  return (0, _core.jsx)(_Container["default"], {
    article: true
  }, (0, _core.jsx)("ul", {
    css: styles.list
  }, items.map(function (item, i) {
    return (0, _core.jsx)(Article, _extends({}, item, {
      key: i
    }));
  })));
}

ArticleList.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape(Article.propTypes))
};