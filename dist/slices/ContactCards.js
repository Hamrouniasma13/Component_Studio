"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ContactCards;

var _core = require("@emotion/core");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Slice = _interopRequireDefault(require("./Slice"));

var _ContactCard = _interopRequireDefault(require("../components/ContactCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ContactCards(_ref) {
  var title = _ref.title,
      contacts = _ref.contacts;
  var theme = (0, _react.useContext)(_core.ThemeContext);
  var styles = {
    contacts: _defineProperty({
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      justifyContent: 'center'
    }, theme.media.laptop, {
      justifyContent: 'flex-start'
    }),
    contact: {
      width: 350,
      marginBottom: 20,
      marginRight: 20
    }
  };
  return (0, _core.jsx)(_Slice["default"], {
    title: title
  }, contacts && contacts.length > 0 && (0, _core.jsx)("ul", {
    css: styles.contacts
  }, contacts.map(function (contact, key) {
    return (0, _core.jsx)("li", {
      css: styles.contact,
      key: key
    }, (0, _core.jsx)(_ContactCard["default"], contact));
  })));
}

ContactCards.propTypes = {
  title: _propTypes["default"].string.isRequired,
  contacts: _propTypes["default"].arrayOf(_propTypes["default"].shape(_ContactCard["default"].propTypes))
};