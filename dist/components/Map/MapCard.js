"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("../Text"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @jsx jsx */
var MapCard = function MapCard(_ref) {
  var id = _ref.id,
      title = _ref.title,
      subTitle = _ref.subTitle,
      description = _ref.description,
      phoneNumber = _ref.phoneNumber,
      isSelected = _ref.isSelected,
      onClick = _ref.onClick;

  var _React$useContext = _react["default"].useContext(_core.ThemeContext),
      colors = _React$useContext.colors;

  var styles = {
    mapCardWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: '600px',
      padding: '20px 20px',
      borderBottom: "1px solid ".concat(colors.lightGray),
      backgroundColor: isSelected ? '#eef0ff' : colors.white,
      '&:first-of-type': {
        borderTop: "1px solid ".concat(colors.lightGray)
      },
      '&:hover': {
        cursor: 'pointer'
      }
    },
    lineWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    },
    iconWrapper: {
      height: '20px'
    },
    textWrapper: {
      flex: '1',
      flexWrap: 'wrap'
    },
    icon: {
      width: '20px',
      height: '20px',
      marginRight: '5px'
    },
    phoneNumber: {
      fontSize: '16px',
      fontWeight: '400',
      letterSpacing: '0.3px',
      lineHeight: '1.4em',
      textDecoration: 'underline'
    }
  };

  var selectItemCallback = _react["default"].useCallback(function () {
    onClick(id);
  }, [id, onClick]);

  return (0, _core.jsx)("div", {
    css: styles.mapCardWrapper,
    onClick: selectItemCallback
  }, (0, _core.jsx)("div", {
    css: styles.lineWrapper
  }, (0, _core.jsx)(_Text["default"], {
    tag: "h3",
    css: {
      marginRight: 22
    }
  }, title), (0, _core.jsx)(_Text["default"], {
    tag: "h5",
    css: {
      color: colors.label
    }
  }, subTitle)), (0, _core.jsx)("div", {
    css: styles.lineWrapper
  }, (0, _core.jsx)("div", {
    css: styles.iconWrapper
  }, (0, _core.jsx)(_Icon["default"], {
    css: styles.icon,
    name: "position"
  })), (0, _core.jsx)("div", {
    css: styles.textWrapper
  }, (0, _core.jsx)(_Text["default"], {
    tag: "h5"
  }, description))), (0, _core.jsx)("div", {
    css: styles.lineWrapper
  }, (0, _core.jsx)("div", {
    css: styles.iconWrapper
  }, (0, _core.jsx)(_Icon["default"], {
    css: styles.icon,
    name: "call"
  })), (0, _core.jsx)("div", {
    css: styles.textWrapper
  }, (0, _core.jsx)("a", {
    css: styles.phoneNumber,
    href: "tel:".concat(phoneNumber)
  }, phoneNumber))));
};

MapCard.defaultProps = {
  subTitle: '',
  description: '',
  phoneNumber: '',
  isSelected: false,
  onClick: function onClick() {}
};
MapCard.propTypes = {
  id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  title: _propTypes["default"].string.isRequired,
  subTitle: _propTypes["default"].string,
  description: _propTypes["default"].string,
  phoneNumber: _propTypes["default"].string,
  isSelected: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};
var _default = MapCard;
exports["default"] = _default;