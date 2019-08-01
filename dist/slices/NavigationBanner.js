"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationBannerSkeleton = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _color = _interopRequireDefault(require("color"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _core = require("@emotion/core");

var _reactProgressiveImage = _interopRequireDefault(require("react-progressive-image"));

var _lodash = require("lodash");

var _media = require("../theme/media");

var _Icon = _interopRequireDefault(require("../components/Icon"));

var _Link = _interopRequireDefault(require("../components/Link"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _DashboardBanner = _interopRequireDefault(require("../slices/DashboardBanner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% { transform: translateX(0) }\n  50% { transform: translateX(-5px) }\n  100% { transform: translateX(0) }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% { transform: translateX(0) }\n  50% { transform: translateX(5px) }\n  100% { transform: translateX(0) }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CardWrapper = (0, _styled["default"])(_Link["default"])(function (_ref) {
  var theme = _ref.theme,
      cursor = _ref.cursor,
      loading = _ref.loading;
  return _defineProperty({
    opacity: loading ? 0 : 1,
    label: 'navigation-banner-card',
    backgroundColor: 'white',
    width: '240px',
    minHeight: '210px',
    marginTop: '1px',
    marginBottom: '1px',
    marginLeft: '1px',
    marginRight: 15,
    overflow: 'hidden',
    display: 'block',
    cursor: cursor,
    borderRadius: '2%',
    transition: 'box-shadow 0.3s ease, opacity 0.5s',
    '&:hover': !cursor ? {
      boxShadow: '0px 4px 6px rgba(0,0,0,0.4)'
    } : {}
  }, theme.media.tablet, {
    margin: '0 20px'
  });
});
var ImageComponent = (0, _styled["default"])('img')({
  width: '100%',
  height: '130px',
  display: 'block',
  userSelect: 'none',
  userDrag: 'none'
});
var InnerText = (0, _styled["default"])('div')({
  display: 'table-cell',
  verticalAlign: 'middle'
});
var TextComponent = (0, _styled["default"])(_Text["default"])(function (_ref3) {
  var theme = _ref3.theme;
  return {
    display: 'table',
    width: '100%',
    backgroundColor: '#fff',
    color: theme.colors.text,
    padding: '15px',
    minHeight: '120px',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  };
});

function ButtonCard(_ref4) {
  var title = _ref4.title,
      image = _ref4.image,
      target = _ref4.target;

  if (image.src) {
    return _react["default"].createElement(_reactProgressiveImage["default"], {
      src: image.src
    }, function (src, loading) {
      return _react["default"].createElement(CardWrapper, _extends({
        loading: loading,
        draggable: "false",
        href: target
      }, !target ? {
        cursor: 'default'
      } : {}), _react["default"].createElement(ImageComponent, {
        src: src,
        alt: image.alt
      }), _react["default"].createElement(TextComponent, {
        tag: "h2",
        size: "typo3"
      }, _react["default"].createElement(InnerText, null, title)));
    });
  } else {
    return _react["default"].createElement(CardWrapper, _extends({
      draggable: "false",
      href: target
    }, !target ? {
      cursor: 'default'
    } : {}), _react["default"].createElement(TextComponent, {
      tag: "h2",
      size: "typo5"
    }, _react["default"].createElement(InnerText, null, title)));
  }
}

ButtonCard.propTypes = {
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]).isRequired,
  image: _propTypes["default"].shape({
    src: _propTypes["default"].string,
    alt: _propTypes["default"].string
  }).isRequired,
  target: _propTypes["default"].string
};
var animRightArrow = (0, _core.keyframes)(_templateObject());
var animLeftArrow = (0, _core.keyframes)(_templateObject2());
var Wrapper = (0, _styled["default"])('div')(function (_ref5) {
  var prev = _ref5.prev,
      color = _ref5.color;
  return _objectSpread({
    label: 'NavigationBannerArrow',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px'
  }, color ? {
    color: color
  } : '', {
    borderTopLeftRadius: prev ? 3 : 0,
    borderBottomLeftRadius: prev ? 3 : 0,
    borderTopRightRadius: prev ? 0 : 3,
    borderBottomRightRadius: prev ? 0 : 3,
    position: 'absolute',
    top: '10px',
    bottom: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s'
  }, prev ? {
    left: '-30px'
  } : {
    right: '-30px'
  }, {
    div: {
      transition: 'transform 0.2s'
    },
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    ':active div, :focus div': {
      animation: "".concat(prev ? animLeftArrow : animRightArrow, " 0.2s")
    }
  });
});
var StyledIcon = (0, _styled["default"])(_Icon["default"])({
  display: 'block',
  width: '100%'
});

function SliderArrow(_ref6) {
  var onClick = _ref6.onClick,
      prev = _ref6.prev,
      color = _ref6.color;
  return _react["default"].createElement(Wrapper, {
    onClick: onClick,
    prev: prev,
    color: color
  }, _react["default"].createElement(StyledIcon, {
    size: 24,
    name: prev ? 'left' : 'right'
  }));
}

var SliderWrapper = (0, _styled["default"])('div')(function (_ref7) {
  var theme = _ref7.theme,
      colorIndex = _ref7.colorIndex;
  return _defineProperty({
    paddingBottom: '50px',
    '.slick-list': {
      paddingTop: '10px',
      paddingBottom: '10px'
    },
    '& .slick-slider .slick-dots li': {
      margin: 0,
      'button:before': {
        color: theme.colors[colorIndex] || colorIndex
      }
    }
  }, theme.media.tablet, {
    marginLeft: 0,
    marginRight: 0
  });
});
var StyledDashboardBanner = (0, _styled["default"])(_DashboardBanner["default"])({
  textAlign: 'center',
  paddingBottom: '30px'
});
/**
 * NavigationBanner
 */

var NavigationBanner =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavigationBanner, _React$Component);

  function NavigationBanner() {
    _classCallCheck(this, NavigationBanner);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavigationBanner).apply(this, arguments));
  }

  _createClass(NavigationBanner, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cards = _this$props.cards,
          backgroundColor = _this$props.backgroundColor,
          title = _this$props.title,
          arrowDotsColor = _this$props.arrowDotsColor,
          action = _this$props.action,
          colorIndex = _this$props.colorIndex; // backgroundColor = backgroundColor || '#205272';

      var sliderSettings = {
        dots: true,
        speed: 300,
        slidesToShow: Math.min(4, cards.length),
        nextArrow: _react["default"].createElement(SliderArrow, {
          color: arrowDotsColor,
          next: true
        }),
        prevArrow: _react["default"].createElement(SliderArrow, {
          color: arrowDotsColor,
          prev: true
        }),
        variableWidth: cards.length < 4,
        responsive: [{
          breakpoint: _media.breakpoints.desktop - 1,
          settings: {
            slidesToShow: Math.min(3, cards.length),
            arrows: false,
            variableWidth: true
          }
        }, {
          breakpoint: _media.breakpoints.laptop - 1,
          settings: {
            slidesToShow: Math.min(2, cards.length),
            arrows: false,
            variableWidth: true
          }
        }, {
          breakpoint: _media.breakpoints.tablet - 1,
          settings: {
            slidesToShow: Math.min(2, cards.length),
            arrows: false,
            variableWidth: true
          }
        }, {
          breakpoint: _media.breakpoints.mobile - 1,
          settings: {
            slidesToShow: Math.min(1, cards.length),
            arrows: false,
            variableWidth: true
          }
        }]
      };
      colorIndex = colorIndex ? colorIndex : (0, _color["default"])(backgroundColor).isDark() ? 'white' : 'text';
      return _react["default"].createElement(StyledDashboardBanner, {
        backgroundColor: backgroundColor,
        title: title,
        colorIndex: colorIndex
      }, _react["default"].createElement(SliderWrapper, {
        colorIndex: colorIndex
      }, _react["default"].createElement(_reactSlick["default"], sliderSettings, cards.map(function (card, i) {
        return _react["default"].createElement(ButtonCard, _extends({}, card, {
          key: i
        }));
      }))), action ? action : null);
    }
  }]);

  return NavigationBanner;
}(_react["default"].Component);

NavigationBanner.propTypes = {
  /**
   * Title, can be a string or a React Element.
   */
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),

  /**
   * Array of objects which will be passed to ButtonCard as props.
   */
  cards: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,

  /**
   * Call to action as a React Element.
   */
  action: _propTypes["default"].element,

  /**
   * Set a color for the Background color. By default, the color is light gray.
   */
  backgroundColor: _propTypes["default"].string
};
NavigationBanner.defaultProps = {
  cards: []
};
var _default = NavigationBanner;
exports["default"] = _default;
var CardSkeleton = (0, _styled["default"])('div')(function (_ref9) {
  var theme = _ref9.theme;
  return _objectSpread({}, theme.skeletonWave, {
    width: '240px',
    minHeight: '210px',
    marginTop: '1px',
    marginBottom: '1px',
    marginLeft: '1px',
    marginRight: '10px'
  });
});
var WrapperSkeleton = (0, _styled["default"])('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 50
});
var TextSkeleton = (0, _styled["default"])('div')(function (_ref10) {
  var theme = _ref10.theme;
  return _objectSpread({}, theme.skeletonWave, {
    height: 40,
    width: 300,
    margin: '0 auto'
  });
});

var NavigationBannerSkeleton = function NavigationBannerSkeleton() {
  return _react["default"].createElement(StyledDashboardBanner, {
    backgroundColor: '#fafafa',
    title: _react["default"].createElement(TextSkeleton, null)
  }, _react["default"].createElement(WrapperSkeleton, null, (0, _lodash.times)(4, function (c) {
    return _react["default"].createElement(CardSkeleton, {
      key: c
    });
  })));
};

exports.NavigationBannerSkeleton = NavigationBannerSkeleton;