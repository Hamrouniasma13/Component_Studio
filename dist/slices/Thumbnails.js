"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Container = _interopRequireDefault(require("../components/Container"));

var _Link = _interopRequireDefault(require("../components/Link"));

var _Text = _interopRequireDefault(require("../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Cover = (0, _styled["default"])(_Link["default"])(function (_ref) {
  var _ref3;

  var cover = _ref.cover,
      to = _ref.to,
      theme = _ref.theme;
  return _ref3 = {
    display: 'block',
    position: 'relative',
    height: '190px',
    width: '100%',
    backgroundImage: "url(".concat(cover, ")"),
    // trick
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundOrigin: 'border-box',
    marginBottom: '20px',
    borderBottomLeftRadius: '10px',
    borderTopRightRadius: '10px',
    boxShadow: 'rgba(0,0,0,0.3) 1px 1px 15px 0px',
    ':last-child': {
      marginBottom: 0
    }
  }, _defineProperty(_ref3, theme.media.tablet, {
    height: '400px',
    marginBottom: '40px'
  }), _defineProperty(_ref3, theme.media.laptop, {
    height: '290px',
    width: '290px'
  }), _defineProperty(_ref3, theme.media.desktop, {
    height: '350px',
    width: '350px'
  }), _defineProperty(_ref3, '&:hover .caption', to ? _defineProperty({
    paddingBottom: '30px'
  }, theme.media.tablet, {
    paddingBottom: '40px'
  }) : {}), _ref3;
});
var ContentWrapper = (0, _styled["default"])('div')(function (_ref4) {
  var theme = _ref4.theme;
  return _defineProperty({
    position: 'absolute',
    bottom: '0',
    width: '100%',
    backgroundColor: 'rgba(51, 51, 51, 0.4)',
    borderBottomLeftRadius: '10px',
    color: theme.colors.white,
    padding: '20px',
    transition: 'padding-bottom 0.3s ease',
    willChange: 'padding-bottom'
  }, theme.media.tablet, {
    padding: '30px'
  });
});
var CardTitleWrapper = (0, _styled["default"])(_Text["default"])({
  marginBottom: '5px'
});

var Card = function Card(_ref6) {
  var cover = _ref6.cover,
      title = _ref6.title,
      text = _ref6.text,
      target = _ref6.target;
  return _react["default"].createElement(Cover, {
    cover: cover,
    href: target
  }, _react["default"].createElement(ContentWrapper, {
    className: "caption"
  }, _react["default"].createElement(CardTitleWrapper, {
    size: "typo3",
    tag: "h3"
  }, title), _react["default"].createElement(_Text["default"], null, text)));
};

Card.propTypes = {
  cover: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string.isRequired,
  text: _propTypes["default"].string.isRequired,
  target: _propTypes["default"].string
};
var Wrapper = (0, _styled["default"])('div')(function (_ref7) {
  var theme = _ref7.theme;
  return _defineProperty({
    paddingTop: '50px',
    paddingBottom: '50px'
  }, theme.media.tablet, {
    paddingTop: '80px',
    paddingBottom: '80px'
  });
});
var TitleWrapper = (0, _styled["default"])(_Text["default"])(function (_ref9) {
  var theme = _ref9.theme;
  return _defineProperty({
    marginBottom: '40px',
    textAlign: 'center'
  }, theme.media.tablet, {
    marginBottom: '60px'
  });
});
var CardsWrapper = (0, _styled["default"])('div')(function (_ref11) {
  var _ref12;

  var theme = _ref11.theme;
  return _ref12 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    paddingLeft: '15px',
    paddingRight: '15px'
  }, _defineProperty(_ref12, theme.media.tablet, {
    paddingLeft: '30px',
    paddingRight: '30px'
  }), _defineProperty(_ref12, theme.media.laptop, {
    flexDirection: 'row',
    padding: '0'
  }), _ref12;
});

var Thumbnails = function Thumbnails(_ref13) {
  var title = _ref13.title,
      cards = _ref13.cards;
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(_Container["default"], null, title && _react["default"].createElement(TitleWrapper, {
    size: "typo1"
  }, title), _react["default"].createElement(CardsWrapper, null, cards.map(function (card, i) {
    return _react["default"].createElement(Card, _extends({}, card, {
      key: i
    }));
  }))));
};

Thumbnails.propTypes = {
  /**
   * Optionnal title of this slice, element or string
   */
  title: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string]),

  /**
   * Array of card that will be displayed
   */
  cards: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    cover: _propTypes["default"].string.isRequired,
    title: _propTypes["default"].string.isRequired,
    text: _propTypes["default"].string.isRequired,
    target: _propTypes["default"].string
  })).isRequired
};
Thumbnails.defaultProps = {
  cards: []
};
var _default = Thumbnails;
exports["default"] = _default;