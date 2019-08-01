"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@emotion/core");

var _reactPose = _interopRequireDefault(require("react-pose"));

var _utils = require("../../../../theme/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

/** @jsx jsx */
var Sidebar = _reactPose["default"].ul({
  open: {
    opacity: 1,
    delayChildren: 50,
    staggerChildren: 50
  },
  closed: {
    opacity: 0
  }
});

var Item = _reactPose["default"].li({
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: -10,
    opacity: 0
  }
});

function SwitcherList(_ref) {
  var available = _ref.available,
      onChange = _ref.onChange,
      isOpen = _ref.isOpen,
      setOpen = _ref.setOpen;

  var _useContext = (0, _react.useContext)(_core.ThemeContext),
      colors = _useContext.colors;

  var styles = {
    listWrapper: {
      background: colors.darkerGray,
      color: colors.lightGray,
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      zIndex: 20,
      pointerEvents: isOpen ? 'auto' : 'none',
      listStyle: 'none',
      margin: '0px',
      padding: '0px'
    },
    wrapperLabel: {
      padding: '0px 20px',
      transition: 'background-color 0.2s',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: (0, _utils.lighten)(colors.darkerGray, 40)
      }
    }
  };
  return (0, _core.jsx)(Sidebar, {
    css: styles.listWrapper,
    pose: isOpen ? 'open' : 'closed'
  }, available.map(function (_ref2, i) {
    var label = _ref2.label,
        id = _ref2.id;
    return (0, _core.jsx)(Item, {
      css: styles.wrapperLabel,
      key: i,
      onClick: function onClick() {
        setOpen(!isOpen);
        onChange(id);
      }
    }, label);
  }));
}

var _default = SwitcherList;
exports["default"] = _default;