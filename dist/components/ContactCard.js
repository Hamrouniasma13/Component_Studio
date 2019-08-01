"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ContactCard;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ContactInfo(_ref) {
  var label = _ref.label,
      value = _ref.value;
  var isPhoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  var isEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
  var isPhoneNumber = value.match(isPhoneNumberRegex) && value.match(isPhoneNumberRegex).length > 0;
  var isEmail = value.match(isEmailRegex) && value.match(isEmailRegex).length > 0;
  var styles = {
    wrapper: {
      '& + &': {
        marginTop: 5
      }
    },
    label: {
      color: '#616161',
      display: 'inline-block'
    },
    value: {
      display: 'inline-block',
      textDecoration: isPhoneNumber || isEmail ? 'underline' : 'none'
    }
  };
  return (0, _core.jsx)("li", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Text["default"], {
    css: styles.label
  }, label), ' ', (0, _core.jsx)("a", {
    css: styles.value,
    href: isPhoneNumber ? "tel: ".concat(value) : isEmail ? "mailto: ".concat(value) : ''
  }, value));
}

ContactInfo.propTypes = {
  label: _propTypes["default"].string,
  value: _propTypes["default"].string
};

function ContactCard(_ref2) {
  var _wrapper;

  var color = _ref2.color,
      card_category_title = _ref2.card_category_title,
      title = _ref2.title,
      description = _ref2.description,
      items = _ref2.items;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: (_wrapper = {
      border: 'solid 1px #e5e5e5',
      padding: 20,
      paddingTop: 25,
      // add place for the top border
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      minHeight: 300,
      height: '100%',
      maxWidth: '350px'
    }, _defineProperty(_wrapper, theme.media.tablet, {
      minHeight: 364
    }), _defineProperty(_wrapper, '&:before', {
      content: '""',
      position: 'absolute',
      top: -1,
      left: -1,
      right: -1,
      height: 6,
      backgroundColor: theme.colors[color] || color
    }), _wrapper),
    card_category_title_wrapper: {
      marginBottom: 25
    },
    card_category_title: {
      color: theme.colors[color] || color,
      borderBottom: "1px solid ".concat(theme.colors[color] || color),
      paddingBottom: 10,
      borderBottomWidth: 3
    },
    description: {
      flex: 1
    },
    phones: {
      margin: 0,
      marginTop: 20,
      padding: 0,
      listStyleType: 'none'
    },
    action: {
      marginTop: 20,
      textAlign: 'center'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, card_category_title && (0, _core.jsx)("div", {
    css: styles.card_category_title_wrapper
  }, (0, _core.jsx)(_Text["default"], {
    size: "p",
    css: styles.card_category_title
  }, card_category_title)), title && (0, _core.jsx)(_Text["default"], {
    size: "typo2",
    mb: 20
  }, title), description && (0, _core.jsx)(_Text["default"], {
    tag: "div",
    css: styles.description
  }, description), items && items.length > 0 && (0, _core.jsx)("ul", {
    css: styles.phones
  }, items.map(function (_ref3, key) {
    var label = _ref3.label,
        value = _ref3.value;
    return (0, _core.jsx)(ContactInfo, {
      key: key,
      label: label,
      value: value
    });
  })));
}

ContactCard.propTypes = {
  color: _propTypes["default"].string,
  card_category_title: _propTypes["default"].string,
  title: _propTypes["default"].string,
  description: _propTypes["default"].any,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    value: _propTypes["default"].any
  }))
};