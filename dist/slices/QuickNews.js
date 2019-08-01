"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _media = require("../theme/media");

var _Container = _interopRequireDefault(require("../components/Container"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _Link = _interopRequireDefault(require("../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getCategory(category) {
  if (category && category.url && category.label) return _react["default"].createElement(StyledLink, {
    href: category.url
  }, _react["default"].createElement(StyledCategory, {
    tag: "span",
    size: "typo6"
  }, category.label));
  if (category && category.label) return _react["default"].createElement(StyledCategory, {
    tag: "span",
    size: "typo6"
  }, category.label);
  if (category) return _react["default"].createElement(StyledCategory, {
    tag: "span",
    size: "typo6"
  }, category);
  return null;
}

var NewsWrapper = (0, _styled["default"])('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme,
      lastItem = _ref.lastItem;
  return _ref2 = {
    width: '270px',
    marginRight: lastItem ? 0 : 15,
    marginBottom: 20
  }, _defineProperty(_ref2, theme.media.tablet, {
    marginRight: lastItem ? 0 : 30
  }), _defineProperty(_ref2, theme.media.laptop, {
    width: '290px'
  }), _defineProperty(_ref2, theme.media.desktop, {
    width: '342px',
    marginRight: lastItem ? 0 : 40
  }), _ref2;
});
var NewsTitle = (0, _styled["default"])(_Text["default"])({
  marginBottom: '20px',
  '&:hover': {
    textDecoration: 'underline'
  }
});
var StyledCategory = (0, _styled["default"])(_Text["default"])({
  display: 'inline-block',
  textTransform: 'uppercase',
  marginBottom: '10px'
});
var StyledImage = (0, _styled["default"])('img')({
  width: '100%',
  marginBottom: 15
});
var StyledLink = (0, _styled["default"])(_Link["default"])({});

function News(_ref3) {
  var title = _ref3.title,
      content = _ref3.content,
      url = _ref3.url,
      image = _ref3.image,
      category = _ref3.category,
      lastItem = _ref3.lastItem;
  return _react["default"].createElement(NewsWrapper, {
    lastItem: lastItem
  }, image && image.url && _react["default"].createElement(_Link["default"], {
    href: url
  }, _react["default"].createElement(StyledImage, {
    src: image.url,
    alt: image.alt
  })), getCategory(category), _react["default"].createElement(_Link["default"], {
    href: url
  }, _react["default"].createElement(NewsTitle, {
    tag: "h4",
    size: "typo2",
    className: "news-title"
  }, title)), _react["default"].createElement(_Text["default"], {
    tag: "p"
  }, content));
}

News.propTypes = {
  category: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  })]),

  /**
   * News title
   */
  title: _propTypes["default"].string.isRequired,

  /**
   * News small content
   */
  content: _propTypes["default"].string.isRequired,

  /**
   * News url
   */
  url: _propTypes["default"].string.isRequired
};
var Wrapper = (0, _styled["default"])('div')(function (_ref4) {
  var theme = _ref4.theme;
  return _defineProperty({
    paddingTop: '40px',
    paddingBottom: '60px'
  }, theme.media.laptop, {
    paddingTop: '60px',
    paddingBottom: '50px'
  });
});
var TitleWrapper = (0, _styled["default"])('div')(function (_ref6) {
  var theme = _ref6.theme;
  return _defineProperty({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 40
  }, theme.media.tablet, {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 60
  });
});
var Title = (0, _styled["default"])(_Text["default"])(function (_ref8) {
  var theme = _ref8.theme;
  return _defineProperty({
    marginBottom: 15
  }, theme.media.tablet, {
    marginBottom: 0
  });
});
var SlickWrapper = (0, _styled["default"])('div')(function (_ref10) {
  var theme = _ref10.theme;
  return _defineProperty({
    paddingBottom: '65px'
  }, theme.media.tablet, {
    margin: 0,
    marginBottom: '15px'
  });
});
var sliderSettings = {
  dots: true,
  infinite: false,
  slidesToShow: 3,
  arrows: false,
  variableWidth: true,
  responsive: [{
    breakpoint: _media.breakpoints.laptop - 1,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: _media.breakpoints.tablet - 1,
    settings: {
      slidesToShow: 1
    }
  }]
};

function QuickNews(_ref12) {
  var title = _ref12.title,
      news = _ref12.news,
      action = _ref12.action;
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(_Container["default"], null, _react["default"].createElement(TitleWrapper, null, _react["default"].createElement(Title, {
    tag: "h3",
    size: "typo1"
  }, title), action && action.url ? _react["default"].createElement(_Button["default"], {
    href: action.url,
    color: "secondary"
  }, action.label) : null), _react["default"].createElement(SlickWrapper, null, _react["default"].createElement(_reactSlick["default"], sliderSettings, news && news.map(function (news, i) {
    return _react["default"].createElement(News, _extends({}, news, {
      key: i,
      lastItem: (i + 1) % 3 === 0
    }));
  })))));
}

QuickNews.propTypes = {
  /**
   * Component title
   */
  title: _propTypes["default"].string.isRequired,

  /**
   * Array of news
   */
  news: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,

  /**
   * Action
   */
  action: _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  })
};
QuickNews.defaultProps = {
  news: []
};
var _default = QuickNews;
exports["default"] = _default;