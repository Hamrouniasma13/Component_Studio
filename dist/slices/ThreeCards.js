"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ThreeCards;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _reactProgressiveImage = _interopRequireDefault(require("react-progressive-image"));

var _Slice = _interopRequireDefault(require("./Slice"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _Button = _interopRequireDefault(require("../components/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Card(_ref) {
  var _wrapper;

  var image = _ref.image,
      title = _ref.title,
      text = _ref.text,
      action = _ref.action;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: (_wrapper = {
      backgroundColor: '#fff',
      border: "1px solid ".concat(theme.colors.lightGray),
      height: '600px',
      overflow: 'hidden',
      width: '320px',
      margin: '0 auto',
      padding: '30px',
      textAlign: 'center',
      display: 'flex',
      color: theme.colors.text,
      flexDirection: 'column'
    }, _defineProperty(_wrapper, theme.media.tablet, {
      width: '333px',
      // let space for boxShadow
      marginLeft: '10px'
    }), _defineProperty(_wrapper, theme.media.laptop, {
      width: '350px',
      marginLeft: 'auto'
    }), _wrapper),
    image: {
      willChange: 'opacity',
      transition: 'opacity 0.5s',
      maxHeight: '200px',
      minHeight: '140px',
      margin: '20px auto'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: {
      marginBottom: 30
    }
  }, (0, _core.jsx)(_reactProgressiveImage["default"], {
    src: image.src
  }, function (src, loading) {
    return (0, _core.jsx)("img", {
      css: _objectSpread({}, styles.image, {
        opacity: loading ? 0 : 1
      }),
      src: src,
      alt: image.alt
    });
  })), (0, _core.jsx)(_Text["default"].h3, {
    mb: 30
  }, title), (0, _core.jsx)(_Text["default"], {
    css: {
      textAlign: 'center',
      flex: 1
    }
  }, text), action ? (0, _core.jsx)("div", null, (0, _core.jsx)(_Button["default"], {
    href: action.url,
    color: "secondary"
  }, action.label)) : null);
}

Card.propTypes = {
  image: _propTypes["default"].shape({
    src: _propTypes["default"].string.isRequired,
    alt: _propTypes["default"].string
  }),
  title: _propTypes["default"].string,
  text: _propTypes["default"].any,
  action: _propTypes["default"].shape({
    label: _propTypes["default"].string,
    url: _propTypes["default"].string
  })
};

function ThreeCards(_ref2) {
  var title = _ref2.title,
      cards = _ref2.cards;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: _defineProperty({
      marginLeft: '-15px',
      marginRight: '-15px',
      paddingBottom: '30px'
    }, theme.media.tablet, {
      marginLeft: 0,
      marginRight: 0
    })
  };
  var sliderSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    responsive: [{
      breakpoint: theme.breakpoints.desktop - 1,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: theme.breakpoints.tablet - 1,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  return (0, _core.jsx)(_Slice["default"], {
    title: title
  }, (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_reactSlick["default"], sliderSettings, cards && cards.map(function (card, key) {
    return (0, _core.jsx)(Card, _extends({}, card, {
      key: key
    }));
  }))));
}

ThreeCards.propTypes = {
  title: _Slice["default"].propTypes.title,
  cards: _propTypes["default"].arrayOf(_propTypes["default"].shape(Card.propTypes)).isRequired
};