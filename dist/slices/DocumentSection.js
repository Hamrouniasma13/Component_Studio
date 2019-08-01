"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _Text = _interopRequireDefault(require("../components/Text"));

var _DocumentItem = _interopRequireDefault(require("../components/DocumentItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DocumentsSection(_ref) {
  var title = _ref.title,
      items = _ref.items;
  var theme = (0, _react.useContext)(_core.ThemeContext);
  var styles = {
    wrapper: _defineProperty({
      marginBottom: 30,
      width: '100%',
      maxWidth: '700px'
    }, theme.media.desktop, {
      '&:last-child': {
        marginBottom: 0
      }
    }),
    title: {
      marginTop: 40
    },
    documents: _defineProperty({
      width: '100%',
      paddingLeft: '0px'
    }, theme.media.laptop, {
      paddingLeft: '40px'
    })
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper,
    id: title
  }, title && (0, _core.jsx)(_Text["default"].h3, {
    mb: 20,
    css: styles.title
  }, title), items && items.length > 0 && (0, _core.jsx)("div", {
    css: styles.documents,
    id: "ok"
  }, items.map(function (document, key) {
    return (0, _core.jsx)(_DocumentItem["default"], _extends({}, document, {
      key: key
    }));
  })));
}

var _default = DocumentsSection;
exports["default"] = _default;