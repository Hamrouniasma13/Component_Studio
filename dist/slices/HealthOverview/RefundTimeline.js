"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RefundTimeline;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SimpleButton = _interopRequireDefault(require("../../components/SimpleButton"));

var _Text = _interopRequireDefault(require("../../components/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function LineContent(_ref) {
  var isHover = _ref.isHover,
      label = _ref.label,
      value = _ref.value,
      items = _ref.items;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    line: _defineProperty({
      backgroundColor: theme.colors.smallLightGray,
      position: 'relative',
      padding: 10
    }, theme.media.laptop, {
      margin: '15px 0'
    }),
    inner: {
      opacity: isHover ? 0 : 1,
      transition: 'opacity 0.2s'
    },
    amount: _defineProperty({
      display: 'block'
    }, theme.media.laptop, {
      "float": 'right',
      textAlign: 'right',
      width: '19%',
      borderLeft: '1px solid #e5e5e5'
    }),
    details: {
      transition: 'opacity 0.2s',
      opacity: isHover ? 1 : 0,
      position: 'absolute',
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
      overflow: 'hidden'
    },
    section: {
      "float": 'left',
      width: '33%',
      textAlign: 'center',
      ':not(:first-of-type)': {
        borderLeft: '1px solid #E5E5E5'
      }
    },
    fromLabel: _defineProperty({
      display: 'block'
    }, theme.media.laptop, {
      display: 'inline',
      marginRight: 30
    })
  };
  return (0, _core.jsx)("div", {
    css: styles.line
  }, (0, _core.jsx)("div", {
    css: styles.inner
  }, (0, _core.jsx)(_Text["default"], {
    size: "typo4"
  }, label), (0, _core.jsx)(_Text["default"], {
    css: styles.amount,
    size: "typo3"
  }, value)), (0, _core.jsx)("div", {
    css: styles.details
  }, items && items.length > 0 ? items.map(function (item, key) {
    return (0, _core.jsx)("div", {
      css: styles.section,
      key: key
    }, (0, _core.jsx)(_Text["default"], {
      css: styles.fromLabel,
      size: "typo4"
    }, item.label), (0, _core.jsx)(_Text["default"], {
      size: "typo3"
    }, item.value));
  }) : null));
}

LineContent.propTypes = {
  isHover: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  amount: _propTypes["default"].any,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    value: _propTypes["default"].any
  }))
};

function RefundLine(_ref2) {
  var date = _ref2.date,
      label = _ref2.label,
      value = _ref2.value,
      items = _ref2.items;

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isHover = _React$useState2[0],
      setIsHover = _React$useState2[1];

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    line: {
      display: 'flex',
      alignItems: 'center',
      ':first-of-type:not(:last-of-type) .dot:after': {
        height: '50%',
        top: '50%'
      },
      ':last-of-type:not(:first-of-type) .dot:after': {
        height: '50%',
        bottom: '50%'
      },
      ':not(:first-of-type):not(:last-of-type) .dot:after': {
        height: '100%'
      }
    },
    desktopDate: _defineProperty({
      textTransform: 'uppercase',
      display: 'none'
    }, theme.media.laptop, {
      display: 'block',
      width: '80px'
    }),
    dot: _defineProperty({
      marginRight: '8px',
      width: '22px',
      position: 'relative',
      alignSelf: 'stretch',
      '&:before': {
        content: '""',
        width: '20px',
        height: '20px',
        zIndex: '2',
        backgroundColor: theme.colors.primary,
        borderRadius: '15px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transition: 'transform 0.2s',
        transform: "translate(-50%, -50%) scale(".concat(isHover ? '1.25' : '1', ")")
      },
      '&:after': {
        content: '""',
        width: '2px',
        opacity: '0.6',
        left: '50%',
        position: 'absolute',
        backgroundColor: theme.colors.primary,
        transform: 'translate(-50%, 0)'
      }
    }, theme.media.laptop, {
      margin: '0 30px'
    }),
    container: {
      flex: 1
    },
    mobileDate: _defineProperty({
      color: theme.colors.label,
      display: 'block',
      margin: '5px 0'
    }, theme.media.laptop, {
      display: 'none'
    })
  };
  return (0, _core.jsx)("div", {
    css: styles.line,
    onMouseEnter: function onMouseEnter() {
      return setIsHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHover(false);
    },
    onClick: function onClick() {
      return setIsHover(!isHover);
    }
  }, (0, _core.jsx)(_Text["default"], {
    css: styles.desktopDate,
    size: "typo6"
  }, date), (0, _core.jsx)("div", {
    css: styles.dot,
    className: "dot"
  }), (0, _core.jsx)("div", {
    css: styles.container
  }, (0, _core.jsx)(_Text["default"], {
    css: styles.mobileDate,
    size: "typo6"
  }, date), (0, _core.jsx)(LineContent, {
    isHover: isHover,
    label: label,
    value: value,
    items: items
  })));
}

RefundLine.propTypes = {
  date: _propTypes["default"].string,
  label: _propTypes["default"].string,
  value: _propTypes["default"].any,
  items: LineContent.propTypes.items
};

function RefundTimeline(_ref3) {
  var title = _ref3.title,
      refunds = _ref3.refunds,
      actions = _ref3.actions;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: {
      boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.04)',
      border: "1px solid ".concat(theme.colors.lighterGray),
      padding: '20px',
      backgroundColor: '#fff'
    },
    title: {
      color: theme.colors.text,
      paddingBottom: '20px',
      borderBottom: "2px solid ".concat(theme.colors.lighterGray),
      marginTop: 0,
      marginBottom: '24px'
    },
    refunds: _defineProperty({
      marginBottom: '30px'
    }, theme.media.laptop, {
      padding: '0 20px',
      marginBottom: '40px'
    }),
    actions: _defineProperty({
      marginBottom: '20px',
      marginLeft: '30px'
    }, theme.media.laptop, {
      marginLeft: 0,
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-around'
    }),
    action: {
      display: 'block',
      '&:not(:last-child)': _defineProperty({
        marginBottom: '10px'
      }, theme.media.laptop, {
        marginBottom: 0
      })
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Text["default"].h3, {
    css: styles.title
  }, title), (0, _core.jsx)("div", {
    css: styles.refunds
  }, refunds && refunds.length > 0 ? refunds.map(function (item, key) {
    return (0, _core.jsx)(RefundLine, _extends({}, item, {
      key: key
    }));
  }) : null), actions && actions.length > 0 ? (0, _core.jsx)("div", {
    css: styles.actions
  }, actions.map(function (_ref4, key) {
    var url = _ref4.url,
        label = _ref4.label;
    return (0, _core.jsx)(_SimpleButton["default"], {
      key: key,
      href: url,
      css: styles.action
    }, label);
  })) : null);
}

RefundTimeline.propTypes = {
  title: _propTypes["default"].string,
  refunds: _propTypes["default"].arrayOf(_propTypes["default"].shape(RefundLine.propTypes)),
  actions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    url: _propTypes["default"].string,
    label: _propTypes["default"].string
  }))
};