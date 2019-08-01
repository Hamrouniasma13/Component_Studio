"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BenefitsTable;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _DataTable = _interopRequireDefault(require("../components/DataTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BenefitsTable(_ref) {
  var title = _ref.title,
      refunds = _ref.refunds,
      amount = _ref.amount;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: _defineProperty({
      border: '1px solid #e5e5e5',
      padding: '0',
      backgroundColor: '#fff',
      '&:not(:last-of-type)': {
        marginBottom: 30
      }
    }, theme.media.laptop, {
      maxWidth: '785px',
      display: 'flex'
    }),
    left: _defineProperty({
      padding: 20
    }, theme.media.laptop, {
      flex: 1,
      marginRight: '30px'
    }),
    right: _defineProperty({
      padding: '20px'
    }, theme.media.laptop, {
      width: '404px',
      borderLeft: '1px solid #e5e5e5'
    }),
    amount: _defineProperty({
      display: 'block',
      textAlign: 'center',
      marginTop: 20
    }, theme.media.laptop, {
      textAlign: 'left',
      marginTop: 35
    })
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.left
  }, (0, _core.jsx)(_Text["default"], {
    size: "typo5"
  }, title), (0, _core.jsx)(_Text["default"], {
    size: "typo8",
    css: styles.amount
  }, amount)), (0, _core.jsx)("div", {
    css: styles.right
  }, (0, _core.jsx)(_DataTable["default"], {
    rows: refunds
  })));
}

BenefitsTable.propTypes = {
  title: _propTypes["default"].string.isRequired,
  amount: _propTypes["default"].any,
  refunds: _DataTable["default"].propTypes.rows
};