"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _Container = _interopRequireDefault(require("../../components/Container"));

var _FooterLang = _interopRequireDefault(require("./FooterLang"));

var _utils = require("../../theme/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BottomFooter(_ref) {
  var _legal;

  var langs = _ref.langs,
      lang = _ref.lang,
      langTitle = _ref.langTitle,
      onLangChange = _ref.onLangChange,
      legal = _ref.legal;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: {
      color: (0, _utils.textColor)((0, _utils.darken)(theme.colors.primary, 20), theme),
      backgroundColor: (0, _utils.darken)(theme.colors.primary, 30)
    },
    legal: (_legal = {
      fontSize: '12px',
      textAlign: 'center',
      padding: '10px 0'
    }, _defineProperty(_legal, theme.media.tablet, {
      flex: 1,
      fontSize: '14px',
      '&:not(:first-child)': {
        textAlign: 'right'
      }
    }), _defineProperty(_legal, theme.media.laptop, {
      textAlign: 'right'
    }), _legal),
    bottom: _defineProperty({
      label: 'BottomWrapper',
      marginLeft: '-15px',
      marginRight: '-15px'
    }, theme.media.tablet, {
      marginLeft: 0,
      marginRight: 0,
      display: 'flex',
      alignItems: 'center',
      minHeight: '40px'
    })
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Container["default"], null, (0, _core.jsx)("div", {
    css: styles.bottom
  }, langs && langs.length > 0 ? (0, _core.jsx)(_FooterLang["default"], {
    langs: langs,
    lang: lang,
    title: langTitle,
    onLangChange: onLangChange
  }) : null, legal && (0, _core.jsx)("div", {
    css: styles.legal
  }, legal))));
}

BottomFooter.propTypes = {
  langs: _propTypes["default"].arrayOf(_propTypes["default"].object),
  legal: _propTypes["default"].string,
  lang: _propTypes["default"].shape({
    ID: _propTypes["default"].string,
    label: _propTypes["default"].string
  }),
  langTitle: _propTypes["default"].string,
  onLangChange: _propTypes["default"].func
};
var _default = BottomFooter;
exports["default"] = _default;