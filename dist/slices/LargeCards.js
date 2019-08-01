"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LargeCards;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Slice = _interopRequireDefault(require("./Slice"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _Link = _interopRequireDefault(require("../components/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function LargeCard(_ref) {
  var _wrapper;

  var url = _ref.url,
      image = _ref.image,
      title = _ref.title,
      content = _ref.content;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: (_wrapper = {
      display: 'block',
      border: '1px solid #e5e5e5',
      borderRadius: '4px',
      backgroundColor: '#fff',
      maxWidth: '885px'
    }, _defineProperty(_wrapper, theme.media.tablet, {
      display: 'flex'
    }), _defineProperty(_wrapper, '&:hover .content', url ? {
      padding: '30px 25px 30px 35px'
    } : {}), _wrapper),
    image: _defineProperty({
      display: 'none',
      maxWidth: '100%'
    }, theme.media.tablet, {
      display: 'block',
      width: '268px',
      height: '290px'
    }),
    content: {
      padding: 30,
      transition: 'padding 0.2s ease'
    }
  };
  var WrappingTag = url ? _Link["default"] : 'div';
  return (0, _core.jsx)(WrappingTag, {
    href: url,
    css: styles.wrapper
  }, image && (0, _core.jsx)("img", {
    css: styles.image,
    src: image.src,
    alt: image.alt
  }), (0, _core.jsx)("div", {
    css: styles.content,
    className: "content"
  }, (0, _core.jsx)(_Text["default"].h3, {
    mb: 20
  }, title), (0, _core.jsx)(_Text["default"], null, content)));
}

LargeCard.propTypes = {
  url: _propTypes["default"].string,
  image: _propTypes["default"].shape({
    src: _propTypes["default"].string.isRequired,
    alt: _propTypes["default"].string
  }),
  title: _propTypes["default"].string.isRequired,
  content: _propTypes["default"].any.isRequired
};

function LargeCards(_ref2) {
  var title = _ref2.title,
      content = _ref2.content,
      cards = _ref2.cards;
  return (0, _core.jsx)(_Slice["default"], {
    title: title
  }, content, cards.map(function (card, key) {
    return (0, _core.jsx)("div", {
      key: key,
      css: {
        marginTop: 50
      }
    }, (0, _core.jsx)(LargeCard, card));
  }));
}

LargeCards.propTypes = {
  title: _Slice["default"].propTypes.title,
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  cards: _propTypes["default"].arrayOf(_propTypes["default"].shape(LargeCard.propTypes))
};