"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ContractList;

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSpring = require("react-spring");

var _Slice = _interopRequireDefault(require("./Slice"));

var _ContractItem = _interopRequireDefault(require("../components/ContractItem"));

var _InputSelect = _interopRequireDefault(require("../components/forms/InputSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var AnimatedList = function AnimatedList(_ref) {
  var items = _ref.items;
  return (0, _core.jsx)(_reactSpring.Transition, {
    "native": true,
    items: items,
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
      opacity: 0,
      y: 0
    },
    config: {
      duration: 200
    }
  }, function (item) {
    return function (_ref2) {
      var opacity = _ref2.opacity,
          y = _ref2.y;
      return (0, _core.jsx)(_ContractItem["default"], _extends({}, item, {
        style: {
          opacity: opacity,
          transform: y.interpolate(function (y) {
            return "translate3d(0,".concat(y, "px,0)");
          })
        }
      }));
    };
  });
};

function ContractList(_ref3) {
  var label = _ref3.label,
      contracts = _ref3.contracts,
      filters = _ref3.filters,
      onFilter = _ref3.onFilter;
  var styles = {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 15,
      maxWidth: 320
    },
    filter: {
      marginLeft: 15,
      flex: 1
    }
  };
  return (0, _core.jsx)(_Slice["default"], null, filters && filters.length > 0 ? (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("span", null, label, " :"), (0, _core.jsx)("div", {
    css: styles.filter
  }, (0, _core.jsx)(_InputSelect["default"], {
    options: filters,
    onChange: onFilter
  }))) : null, contracts && contracts.length > 0 ? (0, _core.jsx)(AnimatedList, {
    items: contracts
  }) : null);
}

ContractList.propTypes = {
  contracts: _propTypes["default"].arrayOf(_propTypes["default"].shape(_ContractItem["default"].propTypes))
};