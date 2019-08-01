"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled8 = _interopRequireDefault(require("@emotion/styled"));

var _Link = _interopRequireDefault(require("./Link"));

var _Container = _interopRequireDefault(require("./Container"));

var _media = _interopRequireDefault(require("../theme/media"));

var _styled;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CardWrapper = (0, _styled8["default"])('div')((_styled = {
  backgroundColor: 'white',
  width: '290px',
  boxShadow: 'rgba(0, 0, 0, 0.04) 0px 1px 10px 0px',
  margin: '0 auto 30px',
  borderRadius: '4px',
  border: '1px solid #fafafa'
}, _defineProperty(_styled, _media["default"].tablet, {
  width: '335px',
  margin: 0,
  '&:nth-of-type(2)': {
    marginLeft: '20px'
  }
}), _defineProperty(_styled, _media["default"].desktop, {
  margin: '0',
  width: '540px',
  '&:nth-of-type(2)': {
    marginLeft: '30px'
  }
}), _styled));

var getCardLink = function getCardLink(url) {
  return (0, _styled8["default"])(url ? _Link["default"] : 'div')(_defineProperty({
    cursor: url ? 'pointer' : 'auto'
  }, _media["default"].desktop, {
    display: 'flex'
  }));
};

var PictureWrapper = (0, _styled8["default"])('div')(_defineProperty({}, _media["default"].desktop, {
  minWidth: '260px'
}));
var Picture = (0, _styled8["default"])('img')({
  maxWidth: '100%'
});
var ContentWrapper = (0, _styled8["default"])('div')(_defineProperty({
  padding: '20px'
}, _media["default"].desktop, {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '300px'
}));
var TitleWrapper = (0, _styled8["default"])('div')({
  marginBottom: '15px',
  fontSize: '18px',
  fontWeight: 'bold'
});
var TextWrapper = (0, _styled8["default"])('div')(_defineProperty({
  '&:not(:last-child)': {
    marginBottom: '20px'
  },
  fontSize: '18px',
  lineHeight: '1.56'
}, _media["default"].desktop, {
  flex: 1
}));
var ActionWrapper = (0, _styled8["default"])('div')({});
var FakeAction = (0, _styled8["default"])('div')({
  textTransform: 'uppercase',
  fontSize: '13px',
  fontWeight: 'bold',
  letterSpacing: '0.9px',
  color: '#00008f'
});

var Card = function Card(_ref) {
  var image = _ref.image,
      title = _ref.title,
      text = _ref.text,
      action = _ref.action;
  var CardLink = getCardLink(action.url);
  return _react["default"].createElement(CardWrapper, null, _react["default"].createElement(CardLink, {
    href: action.url
  }, _react["default"].createElement(PictureWrapper, null, _react["default"].createElement(Picture, {
    src: image.src,
    alt: image.alt
  })), _react["default"].createElement(ContentWrapper, null, _react["default"].createElement(TitleWrapper, null, title), _react["default"].createElement(TextWrapper, null, text), action.label ? _react["default"].createElement(ActionWrapper, null, _react["default"].createElement(FakeAction, null, action.label)) : null)));
};

Card.propTypes = {
  image: _propTypes["default"].shape({
    src: _propTypes["default"].string.isRequired,
    alt: _propTypes["default"].string.isRequired
  }).isRequired,
  title: _propTypes["default"].string.isRequired,
  text: _propTypes["default"].element.isRequired,
  action: _propTypes["default"].shape({
    label: _propTypes["default"].string,
    url: _propTypes["default"].string
  })
};
Card.defaultProps = {
  image: {},
  action: {}
};
var CardsWrapper = (0, _styled8["default"])('div')(_defineProperty({}, _media["default"].desktop, {
  marginBottom: '30px'
}));
var CardsContainer = (0, _styled8["default"])('div')(_defineProperty({}, _media["default"].tablet, {
  display: 'flex',
  justifyContent: 'flex-start'
}));

var TwoCards = function TwoCards(_ref2) {
  var cards = _ref2.cards;
  return _react["default"].createElement(CardsWrapper, null, _react["default"].createElement(_Container["default"], null, _react["default"].createElement(CardsContainer, null, cards.map(function (card, i) {
    return _react["default"].createElement(Card, _extends({}, card, {
      key: i
    }));
  }))));
};

TwoCards.propTypes = {
  cards: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired
};
TwoCards.defaultProps = {
  cards: []
};
var _default = TwoCards;
exports["default"] = _default;