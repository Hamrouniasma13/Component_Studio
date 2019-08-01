"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FourCards;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Slice = _interopRequireDefault(require("./Slice"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _Button = _interopRequireDefault(require("../components/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Card(_ref) {
  var _innerWrapper, _content;

  var image = _ref.image,
      title = _ref.title,
      text = _ref.text,
      actions = _ref.actions;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: _defineProperty({
      backgroundColor: 'white',
      borderRadius: 5,
      overflow: 'hidden',
      border: "1px solid ".concat(theme.colors.lightGray),
      marginBottom: 30
    }, theme.media.desktop, {
      flex: '0 1 48%'
    }),
    innerWrapper: (_innerWrapper = {
      minHeight: 150,
      height: '100%'
    }, _defineProperty(_innerWrapper, theme.media.laptop, {
      minHeight: 200
    }), _defineProperty(_innerWrapper, theme.media.desktop, {
      display: 'flex'
    }), _innerWrapper),
    image: _defineProperty({
      backgroundImage: "url(".concat(image, ")"),
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '45%',
      display: 'none'
    }, theme.media.desktop, {
      display: 'block'
    }),
    content: (_content = {
      padding: 15
    }, _defineProperty(_content, theme.media.tablet, {
      padding: 30
    }), _defineProperty(_content, theme.media.desktop, {
      width: '55%'
    }), _content),
    action: {
      marginTop: 20
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.innerWrapper
  }, (0, _core.jsx)("div", {
    css: styles.image
  }), (0, _core.jsx)("div", {
    css: styles.content
  }, title && (0, _core.jsx)(_Text["default"].h3, {
    mb: 15
  }, title), text && (0, _core.jsx)(_Text["default"], {
    tag: "div",
    mb: 30
  }, text), actions && actions.length > 0 ? actions.map(function (_ref2, key) {
    var url = _ref2.url,
        label = _ref2.label;
    return url && label ? (0, _core.jsx)("div", {
      css: styles.action,
      key: key
    }, (0, _core.jsx)(_Button["default"], {
      href: url
    }, label)) : null;
  }) : null)));
}

Card.propTypes = {
  image: _propTypes["default"].string,
  title: _propTypes["default"].string,
  text: _propTypes["default"].any,
  actions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  }))
};

function FourCards(_ref3) {
  var title = _ref3.title,
      cards = _ref3.cards,
      actions = _ref3.actions;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    cards: _defineProperty({}, theme.media.desktop, {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    })
  };
  return (0, _core.jsx)(_Slice["default"], {
    title: title,
    actions: actions
  }, cards && cards.length > 0 ? (0, _core.jsx)("div", {
    css: styles.cards
  }, cards.map(function (card, key) {
    return (0, _core.jsx)(Card, _extends({
      key: key
    }, card));
  })) : null);
}

FourCards.propTypes = {
  title: _Slice["default"].propTypes.title,
  cards: _propTypes["default"].arrayOf(_propTypes["default"].shape(Card.propTypes)),
  actions: _Slice["default"].propTypes.actions
};