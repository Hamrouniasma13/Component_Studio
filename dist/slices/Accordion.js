"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Accordion;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _Button = _interopRequireDefault(require("../components/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AccordionItem(_ref) {
  var title = _ref.title,
      content = _ref.content,
      onSelect = _ref.onSelect,
      selected = _ref.selected;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: {
      '&:last-child > div': {
        borderBottomWidth: 1
      }
    },
    label: {
      padding: '15px 0',
      borderWidth: '1px 0',
      borderTopWidth: '1px',
      borderBottomWidth: selected ? 1 : 0,
      borderColor: theme.colors.lightGray,
      borderStyle: 'solid',
      position: 'relative',
      cursor: 'pointer',
      ':hover': {
        textDecoration: 'underline'
      }
    },
    button: {
      position: 'absolute',
      width: 'auto',
      right: '0',
      top: '7px',
      border: '0',
      transition: 'transform 0.2s',
      transform: "rotate(".concat(selected ? '0' : '180deg', ")")
    },
    content: {
      transition: 'padding-top 0.2s, padding-bottom 0.2s, maxHeight 0.3s, opacity 0.1s',
      paddingTop: selected ? 30 : 0,
      paddingBottom: selected ? 20 : 0,
      paddingLeft: 20,
      paddingRight: 20,
      // TODO: animate a better way (resizeObserver to animate the height ?)
      maxHeight: selected ? 1000 : 0,
      opacity: selected ? 1 : 0
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    onClick: onSelect,
    css: styles.label
  }, (0, _core.jsx)(_Text["default"], {
    size: "typo5"
  }, title), (0, _core.jsx)(_Button["default"], {
    css: styles.button,
    icon: "up",
    ghost: true
  })), (0, _core.jsx)("div", {
    css: styles.content
  }, content));
}

function Accordion(_ref2) {
  var description = _ref2.description,
      items = _ref2.items;

  var _React$useState = _react["default"].useState(-1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedGroup = _React$useState2[0],
      setSelectedGroup = _React$useState2[1];

  return (0, _core.jsx)("div", null, description && (0, _core.jsx)(_Text["default"], {
    tag: "div",
    mb: 40
  }, description), items && items.map && items.map(function (item, i) {
    return (0, _core.jsx)(AccordionItem, {
      key: i,
      title: item.title,
      content: item.content,
      onSelect: function onSelect() {
        return setSelectedGroup(selectedGroup === i ? -1 : i);
      },
      selected: selectedGroup === i
    });
  }));
}