"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _media = require("../theme/media");

var _Button = _interopRequireDefault(require("../components/Button"));

var _Container = _interopRequireDefault(require("../components/Container"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CardWrapper = (0, _styled["default"])('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {
    backgroundColor: '#f5f5f5',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 1px 0',
    width: '290px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1px',
    // space for shadow
    alignItems: 'center',
    padding: '0 20px 40px',
    minHeight: '540px',
    marginTop: '31px',
    // space for image
    marginLeft: '15px',
    color: theme.colors.text
  }, _defineProperty(_ref2, theme.media.tablet, {
    width: '315px',
    marginLeft: '1px',
    marginRight: '15px',
    marginTop: '25px' // space for image,

  }), _defineProperty(_ref2, theme.media.laptop, {
    width: '350px'
  }), _ref2;
});
var Image = (0, _styled["default"])('img')(function (_ref3) {
  var theme = _ref3.theme;
  return _defineProperty({
    width: '110px',
    height: '110px',
    borderRadius: '100px',
    border: '2px solid #fff',
    display: 'block',
    position: 'relative',
    top: '-31px'
  }, theme.media.tablet, {
    width: '200px',
    height: '200px',
    top: '-25px'
  });
});
var Title = (0, _styled["default"])(_Text["default"])(function (_ref5) {
  var theme = _ref5.theme;
  return _defineProperty({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '60px'
  }, theme.media.tablet, {
    marginBottom: '20px'
  });
});
var StyledText = (0, _styled["default"])(_Text["default"])({
  marginBottom: '40px',
  flex: 1
});

function Card(_ref7) {
  var image = _ref7.image,
      title = _ref7.title,
      text = _ref7.text,
      action = _ref7.action;
  return _react["default"].createElement(CardWrapper, null, _react["default"].createElement(Image, {
    src: image.src,
    alt: image.alt
  }), _react["default"].createElement(Title, {
    size: "typo3"
  }, title), _react["default"].createElement(StyledText, null, text), action ? _react["default"].createElement("div", null, _react["default"].createElement(_Button["default"], {
    href: action.url,
    color: "white"
  }, action.label)) : null);
}

Card.propTypes = {
  image: _propTypes["default"].shape({
    src: _propTypes["default"].string.isRequired,
    alt: _propTypes["default"].string.isRequired
  }).isRequired,
  title: _propTypes["default"].string.isRequired,
  text: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string]).isRequired,
  action: _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  })
};
var IconWrapper = (0, _styled["default"])('div')(function (_ref8) {
  var prev = _ref8.prev;
  return _objectSpread({
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)'
  }, prev ? {
    left: '-50px'
  } : {
    right: '-50px'
  }, {
    width: '40px',
    height: '40px',
    borderRadius: '40px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0 0 1px 0',
    backgroundColor: 'white',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  });
});

function SliderArrow(_ref9) {
  var prev = _ref9.prev,
      onClick = _ref9.onClick;
  return _react["default"].createElement(IconWrapper, {
    prev: prev,
    onClick: onClick
  }, _react["default"].createElement(_Icon["default"], {
    size: 32,
    name: prev ? 'left' : 'right'
  }));
}

var Background = (0, _styled["default"])('div')({
  padding: '30px 0',
  background: 'white'
});
var Cards = (0, _styled["default"])('div')(function (_ref10) {
  var theme = _ref10.theme;
  return _defineProperty({
    margin: '20px -15px',
    paddingBottom: '30px'
  }, theme.media.tablet, {
    margin: '30px 0'
  });
});
var sliderSettings = {
  dots: true,
  infinite: false,
  slidesToShow: 3,
  nextArrow: _react["default"].createElement(SliderArrow, {
    next: true
  }),
  prevArrow: _react["default"].createElement(SliderArrow, {
    prev: true
  }),
  responsive: [{
    breakpoint: _media.breakpoints.desktop - 1,
    settings: {
      slidesToShow: 2,
      arrows: false,
      variableWidth: true
    }
  }, {
    breakpoint: _media.breakpoints.laptop - 1,
    settings: {
      slidesToShow: 2,
      variableWidth: true,
      arrows: false
    }
  }, {
    breakpoint: _media.breakpoints.tablet - 1,
    settings: {
      slidesToShow: 1,
      variableWidth: true,
      arrows: false
    }
  }]
};
var Action = (0, _styled["default"])('div')({
  textAlign: 'center'
});

function RoundedCards(_ref12) {
  var title = _ref12.title,
      cards = _ref12.cards,
      action = _ref12.action;
  return _react["default"].createElement(Background, null, _react["default"].createElement(_Container["default"], null, _react["default"].createElement(_Text["default"], {
    size: "typo2"
  }, title, "/"), _react["default"].createElement(Cards, null, _react["default"].createElement(_reactSlick["default"], sliderSettings, cards.map(function (card, i) {
    return _react["default"].createElement(Card, _extends({}, card, {
      key: i
    }));
  }))), action ? _react["default"].createElement(Action, null, _react["default"].createElement(_Button["default"], {
    href: action.url
  }, action.label)) : null));
}

RoundedCards.propTypes = {
  title: _propTypes["default"].string,
  cards: _propTypes["default"].arrayOf(_propTypes["default"].object),
  action: _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  })
};
RoundedCards.defaultProps = {
  cards: []
};
var _default = RoundedCards;
exports["default"] = _default;