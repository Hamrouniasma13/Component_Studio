"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ContractItem;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSpring = require("react-spring");

var _Button = _interopRequireDefault(require("./Button"));

var _Link = _interopRequireDefault(require("./Link"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Actions(_ref) {
  var actions = _ref.actions;
  var styles = {
    list: {
      listStyleType: 'none',
      padding: 0,
      margin: 0
    },
    item: {
      marginLeft: 10,
      display: 'inline-block'
    }
  };
  return (0, _core.jsx)("ul", {
    css: styles.list
  }, actions.map(function (action, key) {
    return (0, _core.jsx)("li", {
      key: key,
      css: styles.item
    }, (0, _core.jsx)(_Button["default"], _extends({}, action, {
      ghost: true
    })));
  }));
}

Actions.propTypes = {
  actions: _propTypes["default"].arrayOf(_propTypes["default"].shape(_Button["default"].propTypes))
};

function TopLine(_ref2) {
  var title = _ref2.title,
      url = _ref2.url,
      actions = _ref2.actions;
  var styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      minHeight: 40
    },
    title: {
      textTransform: 'uppercase'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)(_Link["default"], {
    href: url
  }, (0, _core.jsx)(_Text["default"].h3, {
    css: styles.title
  }, title)), actions && actions.length > 0 && (0, _core.jsx)(Actions, {
    actions: actions
  }));
}

TopLine.propTypes = {
  title: _propTypes["default"].any,
  url: _propTypes["default"].string,
  actions: Actions.propTypes.actions
};

function Items(_ref3) {
  var items = _ref3.items;
  var styles = {
    list: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      display: 'flex'
    },
    item: {
      flex: 1,
      '&:not(:last-of-type)': {
        marginRight: 30
      }
    },
    label: {
      display: 'block',
      marginBottom: 5,
      minHeight: 45
    },
    value: {
      fontWeight: 'normal'
    }
  };
  return (0, _core.jsx)("ul", {
    css: styles.list
  }, items.map(function (item, key) {
    return (0, _core.jsx)("li", {
      key: key,
      css: styles.item
    }, (0, _core.jsx)(_Text["default"], {
      "data-cy-info": item.label,
      css: styles.label,
      size: "smallText"
    }, item.label), (0, _core.jsx)(_Text["default"], {
      size: "typo4",
      css: styles.value
    }, item.value));
  }));
}

Items.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].any,
    value: _propTypes["default"].any
  }))
};

function ContractItem(_ref4) {
  var title = _ref4.title,
      link = _ref4.link,
      actions = _ref4.actions,
      items = _ref4.items,
      color = _ref4.color,
      icon = _ref4.icon,
      style = _ref4.style;

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    wrapper: {
      position: 'relative',
      background: theme.colors.white,
      border: "1px solid ".concat(theme.colors.lightGray),
      padding: '10px 10px 20px 80px',
      '&:not(:last-of-type)': {
        marginBottom: 20
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        top: -1,
        left: -1,
        bottom: -1,
        width: 6,
        background: theme.colors[color]
      }
    },
    icon: {
      position: 'absolute',
      top: 15,
      left: 25
    }
  };
  return (0, _core.jsx)(_reactSpring.animated.div, {
    style: style,
    css: styles.wrapper,
    "data-cy": "ContractBlock"
  }, (0, _core.jsx)(_Icon["default"], {
    name: icon,
    color: color,
    css: styles.icon,
    size: 40
  }), (0, _core.jsx)(TopLine, {
    title: title,
    url: link,
    actions: actions
  }), Array.isArray(items) && (0, _core.jsx)(Items, {
    items: items.slice(0, 6)
  }));
} // const CustomValue = styled(Text)(({ tooltip, theme }) => ({
//   position: 'relative',
//   display: 'block',
//   ...(tooltip
//     ? {
//         '&:before': {
//           content: '""',
//           position: 'absolute',
//           left: 0,
//           bottom: '100%',
//           background: 'white',
//           width: '10px',
//           height: '10px',
//           marginBottom: '5px',
//           boxShadow: '1px 1px 1px 0px rgba(0,0,0,0.12)',
//           transform: 'rotate(45deg) translate(0, -5px)',
//           border: `1px solid ${theme.colors.lightGray}`,
//           zIndex: '1',
//           borderTopWidth: '0',
//           borderLeftWidth: '0',
//           opacity: 0,
//           transition: 'opacity 0.2s, transform 0.2s'
//           // transform: 'translate(0, -5px)'
//         },
//         '&:after': {
//           content: `"${tooltip}"`,
//           background: 'white',
//           position: 'absolute',
//           padding: '10px',
//           left: '-10px',
//           bottom: '100%',
//           marginBottom: '10px',
//           minWidth: '90px',
//           border: `1px solid ${theme.colors.lightGray}`,
//           borderRadius: 4,
//           boxShadow: '0 1px 2px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24)',
//           opacity: 0,
//           transition: 'opacity 0.2s, transform 0.2s',
//           transform: 'translate(0, -5px)',
//           lineHeight: '1.2',
//           color: theme.colors.text
//         },
//         '&:hover': {
//           '&:before': {
//             transform: 'rotate(45deg) translate(0, 0)',
//             opacity: 1
//           },
//           '&:after': {
//             opacity: 1,
//             transform: 'translate(0, 0)'
//           }
//         }
//       }
//     : {})
// }))
// function CustomValueText({ tooltip, value, subValue, ...props }) {
//   return (
//     <CustomValue
//       tooltip={tooltip}
//       size="typo5"
//       data-cy-info={props['data-cy-info']}
//     >
//       {value}
//       {subValue && <SubText size="typo6">{subValue}</SubText>}
//     </CustomValue>
//   )


ContractItem.propTypes = {
  color: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  title: TopLine.propTypes.title,
  link: TopLine.propTypes.url,
  actions: TopLine.propTypes.actions,
  items: Items.propTypes.items
};