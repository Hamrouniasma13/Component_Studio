"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _ExpenseDetails = _interopRequireDefault(require("./ExpenseDetails"));

var _Currency = _interopRequireDefault(require("./Currency"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Wrapper = (0, _styled["default"])('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme,
      compareMode = _ref.compareMode;
  return _ref2 = {
    display: compareMode ? 'none' : 'block'
  }, _defineProperty(_ref2, theme.media.tablet, {
    display: 'block'
  }), _defineProperty(_ref2, "backgroundColor", theme.colors.white), _defineProperty(_ref2, "border", "solid 1px ".concat(theme.colors.lightGray)), _ref2;
});
var WrapperMobile = (0, _styled["default"])('div')(function (_ref3) {
  var _ref4;

  var theme = _ref3.theme;
  return _ref4 = {
    margin: '0 5px 20px'
  }, _defineProperty(_ref4, theme.media.tablet, {
    display: 'none'
  }), _defineProperty(_ref4, "backgroundColor", theme.colors.white), _defineProperty(_ref4, "border", "solid 1px ".concat(theme.colors.lightGray)), _ref4;
});
var MobileInnerBlock = (0, _styled["default"])('div')({
  outline: 'none!important'
});
var TitleWrapper = (0, _styled["default"])('div')(function (_ref5) {
  var theme = _ref5.theme;
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    background: theme.colors.smallLightGray,
    borderBottom: "solid 1px ".concat(theme.colors.lightGray)
  };
});
var MobileTitleWrapper = (0, _styled["default"])('div')(function (_ref6) {
  var theme = _ref6.theme;
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    background: theme.colors.smallLightGray,
    margin: '0 -15px 30px'
  };
});
var Amount = (0, _styled["default"])(_Text["default"])(function (_ref7) {
  var theme = _ref7.theme;
  return {
    color: theme.colors.primary,
    marginLeft: 10
  };
});
var SliderWrapper = (0, _styled["default"])('div')(function (_ref8) {
  var _ref9;

  var theme = _ref8.theme;
  return _ref9 = {}, _defineProperty(_ref9, theme.media.tablet, {
    display: 'none'
  }), _defineProperty(_ref9, '& .slick-slider .slick-dots li', {
    'button:before': {
      content: '""',
      background: theme.colors.secondary,
      borderRadius: '50%',
      width: 10,
      height: 10
    }
  }), _ref9;
});
var TextTitleValue = (0, _styled["default"])(_Text["default"])({
  lineHeight: '1.5em',
  display: 'inline-block',
  verticalAlign: 'middle'
});
var TitleImgCompare = (0, _styled["default"])('img')({
  height: 50,
  display: 'inline-block!important',
  verticalAlign: 'middle'
});
var sliderSettings = {
  dots: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  centerMode: true,
  centerPadding: '10px'
};

function Formula(_ref10) {
  var className = _ref10.className,
      title = _ref10.title,
      amount = _ref10.amount,
      valueTitle = _ref10.valueTitle,
      compareTitle = _ref10.compareTitle,
      details = _ref10.details,
      compareValues = _ref10.compareValues,
      compareImage = _ref10.compareImage,
      currency = _ref10.currency,
      locale = _ref10.locale;
  var mobileCompareValue = compareValues && details.map(function (obj, i) {
    return _objectSpread({}, obj, {}, compareValues[i]);
  });
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Wrapper, {
    compareMode: compareValues,
    className: className
  }, _react["default"].createElement(TitleWrapper, null, _react["default"].createElement(_Text["default"], {
    tag: "span",
    size: "typo3"
  }, title), amount ? _react["default"].createElement(Amount, {
    size: "typo2"
  }, _react["default"].createElement(_Currency["default"], {
    value: amount,
    currency: "EUR",
    locale: "fr-FR"
  })) : null), _react["default"].createElement(_ExpenseDetails["default"], {
    details: details,
    compareValues: compareValues,
    currency: currency,
    locale: locale,
    valueTitle: valueTitle,
    compareTitle: compareTitle,
    compareImage: compareImage
  })), compareValues ? _react["default"].createElement(SliderWrapper, {
    className: className
  }, _react["default"].createElement(MobileTitleWrapper, null, _react["default"].createElement(_Text["default"], {
    tag: "span",
    size: "typo3"
  }, title), amount ? _react["default"].createElement(Amount, {
    size: "typo2"
  }, _react["default"].createElement(_Currency["default"], {
    value: amount,
    currency: "EUR",
    locale: "fr-FR"
  })) : null), _react["default"].createElement(_reactSlick["default"], sliderSettings, _react["default"].createElement(MobileInnerBlock, null, _react["default"].createElement(WrapperMobile, null, _react["default"].createElement(TitleWrapper, null, _react["default"].createElement(_Text["default"], {
    tag: "span",
    size: "typo3"
  }, valueTitle)), _react["default"].createElement(_ExpenseDetails["default"], {
    details: details,
    currency: currency,
    locale: locale
  }))), _react["default"].createElement(MobileInnerBlock, null, _react["default"].createElement(WrapperMobile, null, _react["default"].createElement(TitleWrapper, null, compareTitle && _react["default"].createElement(TextTitleValue, {
    compareImage: compareImage,
    tag: "div",
    size: "typo3"
  }, compareTitle, compareImage && _react["default"].createElement(TitleImgCompare, {
    src: compareImage
  }))), _react["default"].createElement(_ExpenseDetails["default"], {
    details: mobileCompareValue,
    currency: currency,
    locale: locale
  }))))) : null);
}

Formula.propTypes = {
  /**
   * Formula name
   */
  title: _propTypes["default"].string.isRequired,

  /**
   * Amount in the title
   */
  amount: _propTypes["default"].number,

  /**
   * Details of the formula
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
Formula.defaultProps = {
  details: []
};
var _default = Formula;
exports["default"] = _default;