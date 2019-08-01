"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ProfilInfoList;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Slice = _interopRequireDefault(require("./Slice"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _Container = _interopRequireDefault(require("../components/Container"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _FormInfos = _interopRequireDefault(require("../components/FormInfos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Wrapper(_ref) {
  var slice = _ref.slice,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["slice", "children"]);

  var style = {
    padding: 0,
    marginTop: 30,
    marginBottom: 50
  };
  if (slice) return (0, _core.jsx)(_Slice["default"], props, children);
  return (0, _core.jsx)(_Container["default"], _extends({
    css: style
  }, props), children);
}

function Infos(_ref2) {
  var infos = _ref2.infos;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    list: {
      padding: 0,
      margin: 0,
      listStyleType: 'none'
    },
    item: _defineProperty({
      padding: '15px 0',
      borderTop: "1px solid ".concat(theme.colors.lightGray)
    }, theme.media.tablet, {
      display: 'flex'
    }),
    label: _defineProperty({
      display: 'block',
      marginBottom: 5
    }, theme.media.tablet, {
      marginBottom: 0,
      flex: '0 0 45%'
    })
  };
  return (0, _core.jsx)("ul", {
    css: styles.list
  }, infos.map(function (_ref3, key) {
    var label = _ref3.label,
        value = _ref3.value;
    return (0, _core.jsx)("li", {
      css: styles.item,
      key: key
    }, (0, _core.jsx)(_Text["default"], {
      css: styles.label,
      size: "typo4"
    }, label), (0, _core.jsx)(_Text["default"], {
      size: "typo5"
    }, value));
  }));
}

function Actions(_ref4) {
  var _actions;

  var actions = _ref4.actions;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    actions: (_actions = {
      marginTop: 30
    }, _defineProperty(_actions, theme.media.tablet, {
      display: 'flex',
      justifyContent: 'space-between'
    }), _defineProperty(_actions, theme.media.desktop, {
      width: '55%'
    }), _actions),
    action: _defineProperty({
      marginBottom: 20
    }, theme.media.tablet, {
      marginBottom: 0
    })
  };
  return (0, _core.jsx)("div", {
    css: styles.actions
  }, actions.map(function (_ref5, key) {
    var link = _ref5.link,
        label = _ref5.label;
    return (0, _core.jsx)(_Button["default"], {
      key: key,
      href: link,
      css: styles.action
    }, label);
  }));
}

function ProfilInfoList(_ref6) {
  var title = _ref6.title,
      tableTitle = _ref6.tableTitle,
      infos = _ref6.infos,
      actions = _ref6.actions,
      image = _ref6.image,
      slice = _ref6.slice;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    table: _defineProperty({}, theme.media.laptop, {
      display: 'flex'
    }),
    infosContainer: _defineProperty({}, theme.media.laptop, {
      width: '55%',
      boxSizing: 'border-box'
    }),
    title: {
      marginBottom: 20
    },
    image: _defineProperty({
      display: 'none',
      backgroundSize: 'cover',
      backgroundImage: "url(\"".concat(image, "\")"),
      backgroundPosition: 'center center '
    }, theme.media.laptop, {
      display: 'block',
      width: '45%'
    })
  };
  return (0, _core.jsx)(Wrapper, {
    slice: slice,
    title: title
  }, (0, _core.jsx)("div", {
    css: styles.table
  }, (0, _core.jsx)("div", {
    css: styles.infosContainer
  }, (0, _core.jsx)(_FormInfos["default"], {
    title: tableTitle,
    infos: infos
  })), image && (0, _core.jsx)("div", {
    css: styles.image,
    image: image
  })), actions && actions.length > 0 && (0, _core.jsx)(Actions, {
    actions: actions
  }));
}

ProfilInfoList.propTypes = {
  slice: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  tableTitle: _propTypes["default"].string,
  infos: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    value: _propTypes["default"].string
  })).isRequired,
  actions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    link: _propTypes["default"].string,
    label: _propTypes["default"].string
  })),
  image: _propTypes["default"].string
};
ProfilInfoList.defaultProps = {
  slice: true,
  tableTitle: 'Informations'
};