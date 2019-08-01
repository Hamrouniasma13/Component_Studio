"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InfoBox;

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Slice = _interopRequireDefault(require("./Slice"));

var _Text = _interopRequireDefault(require("../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function InfoBox(_ref) {
  var title = _ref.title,
      infos = _ref.infos;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: _defineProperty({}, theme.media.desktop, {
      width: '60%',
      padding: 30,
      boxShadow: '0 0.5px 5px 0 rgba(0, 0, 0, 0.04)',
      border: 'solid 0.5px #f3f3f3'
    }),
    list: {
      padding: 0,
      margin: 0
    },
    info: {
      display: 'flex',
      paddingTop: 15,
      paddingBottom: 15,
      borderTop: '1px solid #e5e5e5',
      '&:last-child': {
        borderBottom: 0
      }
    },
    label: {
      minWidth: '40%'
    }
  };
  return (0, _core.jsx)(_Slice["default"], null, (0, _core.jsx)("div", {
    css: styles.wrapper
  }, title && (0, _core.jsx)(_Text["default"].h3, {
    size: "typo2",
    mb: 20,
    css: styles.title
  }, title), infos && infos.length > 0 ? (0, _core.jsx)("ul", {
    css: styles.list
  }, infos.map(function (_ref2, key) {
    var label = _ref2.label,
        value = _ref2.value;
    return (0, _core.jsx)("li", {
      css: styles.info,
      key: key
    }, (0, _core.jsx)(_Text["default"], {
      css: styles.label,
      size: "typo4"
    }, label), (0, _core.jsx)(_Text["default"], {
      size: "typo5"
    }, value));
  })) : null));
}

InfoBox.propTypes = {
  title: _propTypes["default"].string,
  infos: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    value: _propTypes["default"].string
  }))
};