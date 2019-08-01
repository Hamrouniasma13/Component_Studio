"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Card;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("../../components/Text"));

var _SimpleButton = _interopRequireDefault(require("../../components/SimpleButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Card(_ref) {
  var title = _ref.title,
      pie = _ref.pie,
      table = _ref.table,
      actions = _ref.actions;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: _defineProperty({
      backgroundColor: theme.colors.white,
      border: '1px solid #f3f3f3',
      boxShadow: 'rgba(0, 0, 0, 0.04) 0 1px 10px 0',
      padding: '15px 20px',
      width: '100%',
      maxWidth: '500px',
      marginLeft: 'auto',
      marginRight: 'auto',
      '&:not(:last-child)': {
        marginBottom: '30px'
      }
    }, theme.media.tablet, {
      marginLeft: 0,
      marginRight: 0,
      padding: '30px 40px',
      '&:not(:last-child)': {
        marginRight: '30px',
        marginBottom: 0
      }
    }),
    pieChart: {
      display: 'flex',
      justifyContent: 'center',
      margin: '50px 0 50px'
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '30px'
    }
  };
  var actionsNode = actions && actions.length > 0 ? (0, _core.jsx)("div", {
    css: styles.actions
  }, actions.map(function (action, i) {
    return (0, _core.jsx)(_SimpleButton["default"], {
      href: action.url,
      key: i
    }, action.label);
  })) : null;
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Text["default"].h3, null, title), (0, _core.jsx)("div", {
    css: styles.pieChart
  }, pie), table, actionsNode);
}

Card.propTypes = {
  title: _propTypes["default"].string.isRequired,
  pie: _propTypes["default"].element.isRequired,
  table: _propTypes["default"].element.isRequired,
  actions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  }))
};