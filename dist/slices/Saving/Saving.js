"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Saving;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("../../components/Text"));

var _SimpleButton = _interopRequireDefault(require("../../components/SimpleButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Saving(_ref) {
  var _innerWrapper;

  var title = _ref.title,
      pie = _ref.pie,
      tables = _ref.tables,
      actions = _ref.actions;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: {
      backgroundColor: theme.colors.white,
      boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.04)',
      border: "1px solid ".concat(theme.colors.lighterGray),
      padding: '20px'
    },
    title: {
      borderBottom: '1px solid #e5e5e5',
      paddingBottom: '24px'
    },
    innerWrapper: (_innerWrapper = {}, _defineProperty(_innerWrapper, theme.media.tablet, {
      paddingBottom: '30px'
    }), _defineProperty(_innerWrapper, theme.media.laptop, {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px'
    }), _innerWrapper),
    pieChart: _defineProperty({
      marginTop: '30px',
      marginBottom: '50px'
    }, theme.media.laptop, {
      margin: '0 100px'
    }),
    tables: _defineProperty({}, theme.media.laptop, {
      flex: 1
    }),
    table: {
      '&:not(:last-child)': _defineProperty({
        marginBottom: '20px'
      }, theme.media.tablet, {
        marginBottom: '30px'
      })
    },
    actions: _defineProperty({}, theme.media.tablet, {
      display: 'flex',
      justifyContent: 'space-between'
    })
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, title && (0, _core.jsx)(_Text["default"].h3, {
    css: styles.title
  }, title), (0, _core.jsx)("div", {
    css: styles.innerWrapper
  }, (0, _core.jsx)("div", {
    css: styles.pieChart
  }, pie), (0, _core.jsx)("div", {
    css: styles.tables
  }, tables.map(function (table, key) {
    return (0, _core.jsx)("div", {
      css: styles.table,
      key: key
    }, table);
  }), actions && actions.length > 0 && (0, _core.jsx)("div", {
    css: styles.actions
  }, actions.map(function (_ref2, i) {
    var url = _ref2.url,
        label = _ref2.label;
    return (0, _core.jsx)(_SimpleButton["default"], {
      href: url,
      key: i
    }, label);
  })))));
}

Saving.propTypes = {
  title: _propTypes["default"].string,
  pie: _propTypes["default"].element,
  tables: _propTypes["default"].arrayOf(_propTypes["default"].element),
  actions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  }))
};