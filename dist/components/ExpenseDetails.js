"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Currency = _interopRequireDefault(require("./Currency"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Wrapper = (0, _styled["default"])('div')({});
var BarWrapper = (0, _styled["default"])('div')({
  display: 'flex',
  margin: 15
});
var Detail = (0, _styled["default"])('div')(function (_ref) {
  var size = _ref.size,
      theme = _ref.theme,
      colorKey = _ref.colorKey;
  return {
    flex: size || 1,
    backgroundColor: theme.colors[colorKey] || colorKey,
    height: '15px'
  };
});
var DataWrapper = (0, _styled["default"])('div')(function (_ref2) {
  var theme = _ref2.theme;
  return _defineProperty({
    display: 'flex',
    flexDirection: 'column'
  }, theme.media.tablet, {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  });
});
var TextWrapper = (0, _styled["default"])('div')(function (_ref4) {
  var theme = _ref4.theme,
      compareColumn = _ref4.compareColumn,
      twoColumn = _ref4.twoColumn;
  return _defineProperty({
    width: '100%'
  }, theme.media.tablet, {
    flex: '1 1 auto',
    width: '33%',
    background: !twoColumn || compareColumn ? theme.colors.white : theme.colors.smallLightGray,
    borderLeft: compareColumn ? "1px solid ".concat(theme.colors.lightGray) : 'none'
  });
});
var TextTitleValueWrapper = (0, _styled["default"])('div')(function (_ref6) {
  var theme = _ref6.theme,
      compareColumn = _ref6.compareColumn;
  return {
    textAlign: 'center',
    lineHeight: '50px',
    borderTop: compareColumn ? 'none' : "1px solid ".concat(theme.colors.lightGray),
    marginBottom: 5
  };
});
var TextTitleValue = (0, _styled["default"])(_Text["default"])({
  lineHeight: '1.5em',
  display: 'inline-block',
  verticalAlign: 'middle'
});
var TitleImgCompare = (0, _styled["default"])('img')({
  height: 50,
  display: 'inline-block',
  verticalAlign: 'middle'
});
var TextBlock = (0, _styled["default"])('div')(function (_ref7) {
  var theme = _ref7.theme;
  return _defineProperty({
    padding: '15px 15px 0px 25px'
  }, theme.media.tablet, {
    padding: '10px 0 25px 20px'
  });
});
var RoundColor = (0, _styled["default"])('div')(function (_ref9) {
  var theme = _ref9.theme,
      color = _ref9.color;
  return {
    display: 'inline-block',
    verticalAlign: 'middle',
    background: theme.colors[color] || color,
    width: 20,
    height: 20,
    borderRadius: '50%',
    marginRight: 15,
    flexShrink: 0
  };
});
var ValueBlock = (0, _styled["default"])('div')(function (_ref10) {
  var theme = _ref10.theme,
      twoColumn = _ref10.twoColumn;
  return _defineProperty({
    padding: '10px 15px 20px 60px',
    textAlign: 'left'
  }, theme.media.tablet, {
    padding: twoColumn ? '10px 15px 25px' : '10px 20px 25px',
    textAlign: twoColumn ? 'center' : 'right'
  });
});
var TextValue = (0, _styled["default"])(_Text["default"])({});
var TextValueCompare = (0, _styled["default"])(_Text["default"])(function (_ref12) {
  var theme = _ref12.theme,
      lastValue = _ref12.lastValue;
  return {
    color: lastValue ? theme.colors.primary : theme.colors.text
  };
});

function ExpenseDetails(_ref13) {
  var details = _ref13.details,
      compareValues = _ref13.compareValues,
      currency = _ref13.currency,
      locale = _ref13.locale,
      valueTitle = _ref13.valueTitle,
      compareTitle = _ref13.compareTitle,
      compareImage = _ref13.compareImage;
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(BarWrapper, null, details && details.map(function (detail) {
    return _react["default"].createElement(Detail, {
      key: detail.colorKey,
      size: detail.amount,
      colorKey: detail.colorKey
    });
  })), _react["default"].createElement(DataWrapper, null, valueTitle && _react["default"].createElement(TextWrapper, {
    twoColumn: compareValues
  }, _react["default"].createElement(TextTitleValueWrapper, null)), _react["default"].createElement(TextWrapper, {
    twoColumn: compareValues
  }, valueTitle && _react["default"].createElement(TextTitleValueWrapper, null, _react["default"].createElement(TextTitleValue, {
    tag: "div",
    size: "typo4"
  }, valueTitle))), compareValues && _react["default"].createElement(TextWrapper, {
    compareColumn: true
  }, compareTitle && _react["default"].createElement(TextTitleValueWrapper, {
    compareColumn: true
  }, _react["default"].createElement(TextTitleValue, {
    compareImage: compareImage,
    tag: "div",
    size: "typo4"
  }, compareTitle, compareImage && _react["default"].createElement(TitleImgCompare, {
    src: compareImage
  }))))), details && details.map(function (detail, i) {
    return _react["default"].createElement(DataWrapper, {
      key: detail.label
    }, _react["default"].createElement(TextWrapper, {
      twoColumn: compareValues
    }, _react["default"].createElement(TextBlock, {
      key: detail.label
    }, _react["default"].createElement(RoundColor, {
      color: detail.colorKey
    }), _react["default"].createElement(_Text["default"], {
      tag: "span",
      size: "typo5"
    }, detail.label))), _react["default"].createElement(TextWrapper, {
      twoColumn: compareValues
    }, _react["default"].createElement(ValueBlock, {
      twoColumn: compareValues,
      key: detail.label
    }, _react["default"].createElement(TextValue, {
      tag: "span",
      size: compareValues ? 'typo4' : 'typo3'
    }, _react["default"].createElement(_Currency["default"], {
      value: detail.amount,
      currency: currency,
      locale: locale
    })))), compareValues ? _react["default"].createElement(TextWrapper, {
      compareColumn: true
    }, _react["default"].createElement(ValueBlock, {
      twoColumn: true,
      key: i
    }, _react["default"].createElement(TextValueCompare, {
      lastValue: i + 1 === compareValues.length,
      tag: "span",
      size: "typo3"
    }, _react["default"].createElement(_Currency["default"], {
      value: compareValues[i].amount,
      currency: currency,
      locale: locale
    })))) : null);
  }));
}

ExpenseDetails.propTypes = {
  /**
   * Details of the expense
   */
  details: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    colorKey: _propTypes["default"].string.isRequired,
    label: _propTypes["default"].string.isRequired,
    amount: _propTypes["default"].number.isRequired
  })),

  /**
   * comparaison values of the expense
   */
  compareValues: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    amount: _propTypes["default"].number.isRequired
  })),

  /**
   * title above the values
   */
  valueTitle: _propTypes["default"].string,

  /**
   * title above the comparaison values
   */
  compareTitle: _propTypes["default"].string,

  /**
   * Image url above the comparaison values
   */
  compareImage: _propTypes["default"].string,

  /**
   * Currency for price format
   */
  currency: _propTypes["default"].string.isRequired,

  /**
   * locale for price format
   */
  locale: _propTypes["default"].string.isRequired
};
ExpenseDetails.defaultProps = {
  details: []
};
var _default = ExpenseDetails;
exports["default"] = _default;