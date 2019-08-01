"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useMedia = _interopRequireDefault(require("react-use/lib/useMedia"));

var _Button = _interopRequireDefault(require("./Button"));

var _media = require("../theme/media");

var _utils = require("../theme/utils");

var _dist = require("../../dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var LEFT_PAGE = 'LEFT';
var RIGHT_PAGE = 'RIGHT';

var range = function range(from, to) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var i = from;
  var range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};
/**
 * Let's say we have 10 pages and we set pageNeighbours to 2
 * Given that the current page is 6
 * The pagination control will look like the following:
 *
 * (1) < {4 5} [6] {7 8} > (10)
 *
 * (x) => terminal pages: first and last page(always visible)
 * [x] => represents current page
 * {...x} => represents page neighbours
 */


var fetchPageNumbers = function fetchPageNumbers(currentPage, totalPages, pageNeighbours) {
  /**
   * totalNumbers: the total page numbers to show on the control
   * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
   */
  var totalNumbers = pageNeighbours * 2 + 3;
  var totalBlocks = totalNumbers + 2; // if the the total pages is superior than the blocks count, then do a specific pagination
  // otherise, just return numbers has they are (without the LEFT and RIGHT button)

  if (totalPages > totalBlocks) {
    var startPage = Math.max(2, currentPage - pageNeighbours);
    var endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
    var pages = range(startPage, endPage);
    /**
     * hasLeftSpill: has hidden pages to the left
     * hasRightSpill: has hidden pages to the right
     * spillOffset: number of hidden pages either to the left or to the right
     */

    var hasLeftSpill = startPage > 2;
    var hasRightSpill = totalPages - endPage > 1;
    var spillOffset = totalNumbers - (pages.length + 1);

    switch (true) {
      // handle: (1) < {5 6} [7] {8 9} (10)
      case hasLeftSpill && !hasRightSpill:
        {
          var extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE].concat(_toConsumableArray(extraPages), _toConsumableArray(pages));
          break;
        }
      // handle: (1) {2 3} [4] {5 6} > (10)

      case !hasLeftSpill && hasRightSpill:
        {
          var _extraPages = range(endPage + 1, endPage + spillOffset);

          pages = [].concat(_toConsumableArray(pages), _toConsumableArray(_extraPages), [RIGHT_PAGE]);
          break;
        }
      // handle: (1) < {4 5} [6] {7 8} > (10)

      case hasLeftSpill && hasRightSpill:
      default:
        {
          pages = [LEFT_PAGE].concat(_toConsumableArray(pages), [RIGHT_PAGE]);
          break;
        }
    }

    return [1].concat(_toConsumableArray(pages), [totalPages]);
  }

  return range(1, totalPages);
};

var gotoPage = function gotoPage(page, totalPages, setCurrentPage, onPageChanged) {
  var newCurrentPage = Math.max(1, Math.min(page, totalPages));
  setCurrentPage(newCurrentPage);
  onPageChanged({
    currentPage: newCurrentPage
  });
};
/**
 * Source for the approch: https://scotch.io/tutorials/build-custom-pagination-with-react
 */


var Pagination = function Pagination(_ref) {
  var _ref$totalRecords = _ref.totalRecords,
      totalRecords = _ref$totalRecords === void 0 ? 0 : _ref$totalRecords,
      _ref$pageLimit = _ref.pageLimit,
      pageLimit = _ref$pageLimit === void 0 ? 30 : _ref$pageLimit,
      _ref$pageNeighbours = _ref.pageNeighbours,
      pageNeighbours = _ref$pageNeighbours === void 0 ? 1 : _ref$pageNeighbours,
      onPageChanged = _ref.onPageChanged,
      page = _ref.page,
      className = _ref.className;
  var initialPage = page || 1;

  var _useState = (0, _react.useState)(initialPage),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var isAboveMobile = (0, _useMedia["default"])("(min-width: ".concat(_media.breakpoints.tablet, "px)"));
  pageNeighbours = Math.max(0, Math.min(!isAboveMobile ? 0 : pageNeighbours, 2)); // numbers of possible pages based on the total pages count

  var totalPages = Math.ceil(totalRecords / pageLimit);
  (0, _react.useEffect)(function () {
    return gotoPage(initialPage, totalPages, setCurrentPage, onPageChanged);
  }, [initialPage, totalRecords]);
  if (!totalRecords) return null; // if there is only one page display nothing

  if (totalPages === 1) return null;
  var pages = fetchPageNumbers(currentPage, totalPages, pageNeighbours);
  var styles = {
    paginationList: {
      textAlign: 'center'
    }
  };
  return (0, _core.jsx)("nav", {
    className: className,
    css: styles.paginationList
  }, pages.map(function (page, index) {
    // return the icon left
    if (page === LEFT_PAGE) return (0, _core.jsx)(StyledButton, {
      ghost: true,
      key: index,
      onClick: function onClick() {
        return gotoPage(currentPage - pageNeighbours * 2 - 1, totalPages, setCurrentPage, onPageChanged);
      },
      icon: "left"
    }); // return the icon right

    if (page === RIGHT_PAGE) return (0, _core.jsx)(StyledButton, {
      ghost: true,
      key: index,
      onClick: function onClick() {
        return gotoPage(currentPage + pageNeighbours * 2 + 1, totalPages, setCurrentPage, onPageChanged);
      },
      icon: "right"
    }); // return numbers

    return (0, _core.jsx)(StyledButton, {
      ghost: true,
      key: index,
      isActive: currentPage === page,
      onClick: function onClick() {
        return gotoPage(page, totalPages, setCurrentPage, onPageChanged);
      }
    }, '' + page);
  }));
};

var StyledButton = function StyledButton(_ref2) {
  var isActive = _ref2.isActive,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["isActive", "children"]);

  var _React$useContext = _react["default"].useContext(_dist.ThemeContext),
      colors = _React$useContext.colors;

  var styles = _objectSpread({
    label: 'StyledButton',
    width: 'auto',
    margin: '5px',
    ':hover': {
      color: 'white',
      backgroundColor: (0, _utils.darken)(colors.primary, 10),
      borderColor: (0, _utils.darken)(colors.primary, 10)
    }
  }, isActive ? {
    color: 'white',
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    ':hover': {
      color: 'white',
      backgroundColor: (0, _utils.darken)(colors.primary, 10),
      borderColor: (0, _utils.darken)(colors.primary, 10)
    }
  } : {});

  return (0, _core.jsx)(_Button["default"], _extends({
    css: styles
  }, rest), children);
}; // const StyledButton = styled(Button)(({ theme, isActive }) => {
//   const _theme = { ...defaultTheme, ...theme }
//   return {
//     label: 'StyledButton',
//     width: 'auto',
//     margin: '5px',
//     ':hover': {
//       color: 'white',
//       backgroundColor: darken(_theme.colors.primary, 10),
//       borderColor: darken(_theme.colors.primary, 10)
//     },
//     ...(isActive
//       ? {
//           color: 'white',
//           backgroundColor: _theme.colors.primary,
//           borderColor: _theme.colors.primary,
//           ':hover': {
//             color: 'white',
//             backgroundColor: darken(_theme.colors.primary, 10),
//             borderColor: darken(_theme.colors.primary, 10)
//           }
//         }
//       : {})
//   }
// })


Pagination.propTypes = {
  totalRecords: _propTypes["default"].number,
  pageLimit: _propTypes["default"].number,
  pageNeighbours: _propTypes["default"].number,
  onPageChanged: _propTypes["default"].func
};
var _default = Pagination;
exports["default"] = _default;