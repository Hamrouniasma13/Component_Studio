"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ServiceSelector;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSpring = require("react-spring");

var _Slice = _interopRequireDefault(require("./Slice"));

var _Text = _interopRequireDefault(require("../components/Text"));

var _ServiceCard = _interopRequireDefault(require("../components/ServiceCard"));

var _Checkboxes = _interopRequireDefault(require("../components/forms/Checkboxes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Can't use react springs hooks right now because they're not stable.
 * It causes issues with cards display : some cards that should be hidden are still visible.
 */
// function AnimatedCards({ cards }) {
//   const transitions = useTransition({
//     items: cards,
//     keys: item => item.title + item.category,
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     config: { duration: 200 }
//   })
//   return transitions.map(({ item, key, props }) => (
//     <ServiceCard {...item} key={key} style={props} />
//   ))
// }
function AnimatedCards(_ref) {
  var cards = _ref.cards;
  return (0, _core.jsx)(_reactSpring.Transition, {
    "native": true,
    items: cards,
    keys: function keys(item) {
      return item.key;
    },
    from: {
      opacity: 0,
      y: 10
    },
    enter: {
      opacity: 1,
      y: 0
    },
    leave: {
      opacity: 0
    },
    config: {
      duration: 200
    }
  }, function (item) {
    return function (_ref2) {
      var opacity = _ref2.opacity,
          y = _ref2.y;
      return (0, _core.jsx)(_ServiceCard["default"], _extends({}, item, {
        style: {
          opacity: opacity,
          transform: y.interpolate(function (y) {
            return "translate3d(0px,".concat(y, "px,0)");
          })
        }
      }));
    };
  });
}

function Filters(_ref3) {
  var categories = _ref3.categories,
      _onChange = _ref3.onChange,
      filterLabel = _ref3.filterLabel;
  var styles = {
    wrapper: {
      marginBottom: '15px'
    },
    label: {
      display: 'inline',
      marginRight: '15px'
    }
  };
  return (0, _core.jsx)("div", {
    css: styles.wrapper
  }, filterLabel ? (0, _core.jsx)(_Text["default"], {
    size: "typo5",
    css: styles.label
  }, filterLabel) : null, (0, _core.jsx)("span", null, (0, _core.jsx)(_Checkboxes["default"], {
    color: "secondary",
    onChange: function onChange(_ref4) {
      var value = _ref4.value;
      return _onChange(value);
    },
    name: "categories",
    options: categories
  })));
}
/**
 * Get cards that have their category listed in categories.
 * @param {Array} cards
 * @param {Array} categories
 * If categories is empty, return cards
 */


function filterCards() {
  var cards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var categories = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (categories.length < 1) return cards;
  return cards.filter(function (card) {
    return categories.includes(card.category);
  });
}

function ServiceSelector(_ref5) {
  var _cards;

  var title = _ref5.title,
      categories = _ref5.categories,
      cards = _ref5.cards,
      filters = _ref5.filters,
      filterLabel = _ref5.filterLabel,
      initialActiveCategories = _ref5.activeCategories;

  var _React$useState = _react["default"].useState(initialActiveCategories),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeCategories = _React$useState2[0],
      setActiveCategories = _React$useState2[1];

  var activeCards = filterCards(cards, activeCategories);

  var theme = _react["default"].useContext(_core.ThemeContext);

  var styles = {
    cards: (_cards = {
      marginLeft: '-15px',
      marginRight: '-15px'
    }, _defineProperty(_cards, theme.media.laptop, {
      marginLeft: 0,
      marginRight: 0,
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    }), _defineProperty(_cards, theme.media.desktop, {
      '&:after': {
        content: activeCards.length % 3 === 2 ? '""' : null,
        width: '350px'
      }
    }), _cards)
  };
  return (0, _core.jsx)(_Slice["default"], {
    title: title
  }, filters ? (0, _core.jsx)(Filters, {
    filterLabel: filterLabel,
    categories: categories.map(function (category) {
      return {
        value: category,
        label: category,
        checked: activeCategories.includes(category)
      };
    }),
    onChange: setActiveCategories
  }) : null, (0, _core.jsx)("div", {
    css: styles.cards
  }, (0, _core.jsx)(AnimatedCards, {
    cards: activeCards
  })));
}

ServiceSelector.propTypes = {
  categories: _propTypes["default"].arrayOf(_propTypes["default"].string),
  activeCategories: _propTypes["default"].arrayOf(_propTypes["default"].string),
  cards: _propTypes["default"].arrayOf(_propTypes["default"].shape(_ServiceCard["default"].propTypes)).isRequired,
  filters: _propTypes["default"].bool
};
ServiceSelector.defaultProps = {
  categories: [],
  cards: [],
  filters: true,
  activeCategories: []
};