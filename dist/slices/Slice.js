"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Slice;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _Container = _interopRequireDefault(require("../components/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Actions(_ref) {
  var actions = _ref.actions;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    list: _defineProperty({
      margin: '40px 0 0',
      listStyleType: 'none',
      padding: 0
    }, theme.media.tablet, {
      display: 'flex',
      justifyContent: 'flex-end',
      // right align
      alignItems: 'center' // align button and simple button

    }),
    item: {
      '&:not(:first-of-type)': _defineProperty({
        margin: '15px 0 0',
        textAlign: 'center'
      }, theme.media.tablet, {
        margin: '0 0 0 15px'
      })
    }
  };
  return (0, _core.jsx)("ul", {
    css: styles.list
  }, actions.map(function (action, key) {
    return (0, _core.jsx)("li", {
      css: styles.item,
      key: key
    }, action);
  }));
}

function Slice(_ref2) {
  var title = _ref2.title,
      actions = _ref2.actions,
      children = _ref2.children;
  return (0, _core.jsx)("div", {
    css: {
      padding: '60px 0 60px'
    }
  }, (0, _core.jsx)(_Container["default"], null, title && (0, _core.jsx)(_Text["default"].h2, {
    mb: 50
  }, title), children, actions && actions.length > 0 && (0, _core.jsx)(Actions, {
    actions: actions
  })));
}

Slice.propTypes = {
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  actions: _propTypes["default"].array
};