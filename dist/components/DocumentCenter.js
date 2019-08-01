"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _Slice = _interopRequireDefault(require("../slices/Slice"));

var _DocumentSection = _interopRequireDefault(require("../slices/DocumentSection"));

var _DocumentMenu = _interopRequireDefault(require("./DocumentMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DocumentCenter(_ref) {
  var _documentWrapper;

  var _ref$sections = _ref.sections,
      sections = _ref$sections === void 0 ? [] : _ref$sections,
      _ref$showMenu = _ref.showMenu,
      showMenu = _ref$showMenu === void 0 ? true : _ref$showMenu;
  var theme = (0, _react.useContext)(_core.ThemeContext);
  var styles = {
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row'
    },
    menuWrapper: _defineProperty({
      display: 'none'
    }, theme.media.tablet, {
      display: 'block',
      width: 400
    }),
    documentWrapper: (_documentWrapper = {
      width: '100%'
    }, _defineProperty(_documentWrapper, theme.media.tablet, {
      padding: '0 0 0 50px'
    }), _defineProperty(_documentWrapper, theme.media.laptop, {
      padding: '0 50px'
    }), _documentWrapper)
  };
  return (0, _core.jsx)(_Slice["default"], null, (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.menuWrapper
  }, showMenu && (0, _core.jsx)(_DocumentMenu["default"], {
    sections: sections
  })), sections && sections.length > 0 && (0, _core.jsx)("div", {
    css: styles.documentWrapper
  }, sections.map(function (section, key) {
    if (section.items.length === 0) return null;
    return (0, _core.jsx)(_DocumentSection["default"], _extends({
      key: key
    }, section));
  }))));
}

var _default = DocumentCenter;
exports["default"] = _default;