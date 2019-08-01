"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Absenteeism;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _SimpleButton = _interopRequireDefault(require("../components/SimpleButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Item(_ref) {
  var value = _ref.value,
      label = _ref.label;
  var styles = {
    item: {
      '&:not(:last-child)': {
        marginBottom: 30
      }
    },
    value: {
      fontSize: 48,
      fontWeight: 600,
      letterSpacing: '1.2px',
      marginRight: 10
    },
    label: {
      fontSize: 16,
      lineHeight: 1.56
    }
  };
  return (0, _core.jsx)("li", {
    css: styles.item
  }, (0, _core.jsx)("span", {
    "data-cy": label,
    css: styles.value
  }, value), (0, _core.jsx)("span", {
    css: styles.label
  }, label));
}

function Absenteeism(_ref2) {
  var title = _ref2.title,
      color = _ref2.color,
      image = _ref2.image,
      items = _ref2.items,
      link = _ref2.link;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: {
      backgroundColor: '#fff',
      boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.04)',
      display: 'flex'
    },
    left: {
      flex: '1 0 53%',
      padding: 30,
      boxSizing: 'border-box'
    },
    list: {
      listStyleType: 'none',
      margin: 0,
      paddingLeft: 0
    },
    right: _defineProperty({
      flex: '1 0 47%',
      backgroundColor: theme.colors[color] || 'transparent',
      padding: 30,
      position: 'relative',
      display: 'none',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }, theme.media.tablet, {
      display: 'block'
    }),
    image: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: 330,
      maxHeight: 300
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.left
  }, title && (0, _core.jsx)(_Text["default"].h3, {
    mb: 40
  }, title), items && items.length > 0 && (0, _core.jsx)("ul", {
    css: styles.list
  }, items.map(function (item, key) {
    return (0, _core.jsx)(Item, _extends({
      key: key
    }, item));
  })), link && link.url && (0, _core.jsx)("div", {
    css: {
      marginTop: 50
    }
  }, (0, _core.jsx)(_SimpleButton["default"], {
    href: link.url
  }, link.label))), (0, _core.jsx)("div", {
    css: styles.right
  }, image && (0, _core.jsx)("img", {
    src: image,
    alt: "Abseiteeism icon",
    css: styles.image
  })));
}

Absenteeism.propTypes = {
  title: _propTypes["default"].string,
  color: _propTypes["default"].string,
  image: _propTypes["default"].string,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].any,
    label: _propTypes["default"].any
  })),
  link: _propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  })
};