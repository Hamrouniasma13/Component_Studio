"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _useMedia = _interopRequireDefault(require("react-use/lib/useMedia"));

var _typos = _interopRequireDefault(require("../../typos"));

var _Icon = _interopRequireDefault(require("../../components/Icon"));

var _Link = _interopRequireDefault(require("../../components/Link"));

var _Container = _interopRequireDefault(require("../../components/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Footer = function Footer(_ref) {
  var link = _ref.link,
      socials = _ref.socials,
      copyright = _ref.copyright,
      className = _ref.className;

  var _React$useContext = _react["default"].useContext(_core.ThemeContext),
      colors = _React$useContext.colors,
      breakpoints = _React$useContext.breakpoints,
      media = _React$useContext.media;

  var isMobile = (0, _useMedia["default"])("(max-width: ".concat(breakpoints.tablet, "px)"));
  var styles = {
    footer: _defineProperty({
      padding: '22px 0',
      height: 85,
      width: '100%',
      backgroundColor: colors.darkerGray,
      color: colors.lighterGray
    }, media.tablet, {
      padding: '0',
      height: 40
    }),
    li: _objectSpread({}, _typos["default"].link, {
      listStyle: 'none'
    }),
    left: {},
    wrapper: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }, isMobile ? {} : {
      height: 40
    })
  };
  var childs = isMobile ? (0, _core.jsx)(_react["default"].Fragment, null, (0, _core.jsx)("div", null, link && (0, _core.jsx)(FooterLeftLink, {
    isMobile: isMobile,
    link: link
  }), copyright && (0, _core.jsx)("li", {
    css: styles.li
  }, copyright)), socials && socials.length > 0 && (0, _core.jsx)(FooterSocials, {
    socials: socials
  })) : (0, _core.jsx)(_react["default"].Fragment, null, link && (0, _core.jsx)(FooterLeftLink, {
    link: link
  }), copyright && (0, _core.jsx)("li", {
    key: 3,
    css: styles.li
  }, copyright), socials && socials.length > 0 && (0, _core.jsx)(FooterSocials, {
    socials: socials
  }));
  return (0, _core.jsx)("footer", {
    className: className,
    css: styles.footer
  }, (0, _core.jsx)(_Container["default"], null, (0, _core.jsx)("div", {
    css: styles.wrapper
  }, childs)));
};

var FooterLeftLink = function FooterLeftLink(_ref2) {
  var link = _ref2.link,
      isMobile = _ref2.isMobile;
  return (0, _core.jsx)(_Link["default"], {
    css: _objectSpread({
      textDecoration: 'underline',
      display: 'block'
    }, isMobile ? {
      marginBottom: 10
    } : {}),
    href: link.url
  }, link.label);
};

var FooterSocials = function FooterSocials(_ref3) {
  var socials = _ref3.socials;
  var styles = {
    socials: {},
    item: {
      display: 'block'
    },
    li: _objectSpread({}, _typos["default"].link, {
      listStyle: 'none',
      "float": 'right',
      marginRight: 10,
      '&:first-child': {
        marginRight: 0
      }
    })
  };
  return (0, _core.jsx)("nav", {
    css: styles.socials
  }, socials.map(function (s, i) {
    return (0, _core.jsx)(_Link["default"], {
      key: i,
      href: s.url,
      css: styles.li
    }, (0, _core.jsx)(_Icon["default"], {
      css: styles.item,
      name: s.icon,
      size: "20"
    }));
  }));
};

var _default = Footer;
exports["default"] = _default;
Footer.propTypes = {
  legal: _propTypes["default"].string,
  link: _propTypes["default"].shape({
    label: _propTypes["default"].string,
    url: _propTypes["default"].string
  }),
  socials: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    icon: _propTypes["default"].string,
    url: _propTypes["default"].string
  })),
  copyright: _propTypes["default"].string
};
Footer.defaultProps = {
  link: {},
  legal: '',
  socials: [{
    icon: 'adduser',
    url: 'http://wwww.twitter.com'
  }, {
    icon: 'file',
    url: 'http://wwww.twitter.com'
  }],
  copyright: ''
};