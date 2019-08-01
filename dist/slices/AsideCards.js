"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AsideCards;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _Text = _interopRequireDefault(require("../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Card(_ref) {
  var _imageWrapper, _action;

  var image = _ref.image,
      title = _ref.title,
      text = _ref.text,
      action = _ref.action;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: _defineProperty({
      textAlign: 'center',
      '&:not(:last-of-type)': _defineProperty({
        marginBottom: '70px'
      }, theme.media.tablet, {
        marginBottom: '60px'
      })
    }, theme.media.laptop, {
      display: 'flex',
      textAlign: 'left',
      '&:nth-of-type(odd) > :first-of-type': {
        marginLeft: '60px'
      },
      '&:nth-of-type(even) > :first-of-type': {
        marginRight: '60px'
      },
      '&:nth-of-type(odd)': {
        flexDirection: 'row-reverse'
      }
    }),
    imageWrapper: (_imageWrapper = {
      position: 'relative',
      marginBottom: '20px',
      minHeight: '200px'
    }, _defineProperty(_imageWrapper, theme.media.tablet, {
      marginBottom: '50px'
    }), _defineProperty(_imageWrapper, theme.media.laptop, {
      width: '50%',
      marginBottom: 0
    }), _imageWrapper),
    image: {
      width: '100%'
    },
    content: _defineProperty({
      textAlign: 'center',
      padding: '0 15px 15px',
      color: theme.colors.text
    }, theme.media.laptop, {
      maxWidth: '47%',
      padding: 0,
      display: 'table'
    }),
    innerContent: {
      display: 'table-cell'
    },
    title: _defineProperty({
      marginBottom: '30px'
    }, theme.media.laptop, {
      marginBottom: '40px',
      textAlign: ' left'
    }),
    text: {
      textAlign: 'justify'
    },
    action: (_action = {
      marginTop: '25px'
    }, _defineProperty(_action, theme.media.tablet, {
      marginTop: '30px'
    }), _defineProperty(_action, theme.media.laptop, {
      marginTop: '40px',
      textAlign: 'left'
    }), _action)
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.imageWrapper
  }, (0, _core.jsx)("img", {
    css: styles.image,
    src: image.src,
    alt: image.alt
  })), (0, _core.jsx)("div", {
    css: styles.content
  }, (0, _core.jsx)("div", {
    css: styles.innerContent
  }, (0, _core.jsx)(_Text["default"].h3, {
    size: "typo2",
    css: styles.title
  }, title), (0, _core.jsx)(_Text["default"], {
    tag: "div",
    css: styles.text
  }, text), action && action.url && (0, _core.jsx)("div", {
    css: styles.action
  }, (0, _core.jsx)(_Button["default"], {
    href: action.url
  }, action.label)))));
}

Card.propTypes = {
  image: _propTypes["default"].shape({
    src: _propTypes["default"].string.isRequired,
    alt: _propTypes["default"].string
  }),
  title: _propTypes["default"].string.isRequired,
  text: _propTypes["default"].any,
  action: _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  })
};

function AsideCards(_ref2) {
  var cards = _ref2.cards;
  if (!cards || cards.length < 1) return null;
  return cards.map(function (card, key) {
    return (0, _core.jsx)(Card, _extends({}, card, {
      key: key
    }));
  });
}

AsideCards.propTypes = {
  cards: _propTypes["default"].arrayOf(_propTypes["default"].shape(Card.propTypes))
};