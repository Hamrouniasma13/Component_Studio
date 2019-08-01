"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _Container = _interopRequireDefault(require("../../components/Container"));

var _Pension = _interopRequireDefault(require("./Pension"));

var _Distribution = _interopRequireDefault(require("./Distribution"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Wrapper = (0, _styled["default"])('div')({
  paddingTop: 50,
  paddingBottom: 50
});
var Title = (0, _styled["default"])('div')({
  fontSize: 36,
  fontWeight: 600,
  marginBottom: 50
});
var Row = (0, _styled["default"])('div')({
  display: 'flex'
});

function PensionDashboard(_ref) {
  var title = _ref.title,
      pensionTitle = _ref.pensionTitle,
      inProgress = _ref.inProgress,
      incomes = _ref.incomes,
      link = _ref.link,
      distributionTitle = _ref.distributionTitle,
      distributionItems = _ref.distributionItems;
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(_Container["default"], null, title ? _react["default"].createElement(Title, null, title) : null, _react["default"].createElement(Row, null, _react["default"].createElement(_Pension["default"], {
    title: pensionTitle,
    label: inProgress.label,
    value: inProgress.value,
    link: link,
    details: incomes
  }), _react["default"].createElement(_Distribution["default"], {
    title: distributionTitle,
    items: distributionItems
  }))));
}

PensionDashboard.propTypes = {
  /**
   * Slice title
   */
  title: _propTypes["default"].string,

  /**
   * Title of the left part
   */
  pensionTitle: _Pension["default"].propTypes.title,

  /**
   * Main value of the slice
   */
  inProgress: _propTypes["default"].shape({
    value: _Pension["default"].propTypes.value,
    label: _Pension["default"].propTypes.label
  }),

  /**
   * Array of properties for each table row
   */
  incomes: _Pension["default"].propTypes.details,

  /**
   * Properties of the label, below the table
   */
  link: _Pension["default"].propTypes.link,

  /**
   * Title of the right part
   */
  distributionTitle: _Distribution["default"].propTypes.title,

  /**
   * Array of label and value, display in the right part
   */
  distributionItems: _Distribution["default"].propTypes.items
};
PensionDashboard.defaultProps = {
  inProgress: {}
};
var _default = PensionDashboard;
exports["default"] = _default;