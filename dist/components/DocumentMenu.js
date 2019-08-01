"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var DocumentMenu = function DocumentMenu(_ref) {
  var sections = _ref.sections;
  var theme = (0, _react.useContext)(_core.ThemeContext);
  var styles = {
    wrapper: {
      position: 'sticky',
      top: '50px',
      width: '100%',
      maxWidth: '250px',
      padding: '5px'
    },
    button: {
      width: '100%',
      padding: '10px 20px',
      borderBottom: "1px solid ".concat(theme.colors.gray),
      backgroundColor: theme.colors.white,
      '&:hover': {
        cursor: 'pointer'
      },
      '&:last-child': {
        borderBottom: 'transparent'
      }
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, sections && sections.length > 0 && sections.map(function (item) {
    return (0, _core.jsx)("div", {
      key: item.title,
      css: styles.button
    }, (0, _core.jsx)("a", {
      href: "#".concat(item.title)
    }, (0, _core.jsx)(_Text["default"], {
      tag: "p"
    }, item.title)));
  }));
};

var _default = DocumentMenu;
exports["default"] = _default;