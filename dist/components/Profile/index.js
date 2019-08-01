"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _ = require("../../");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Profile = function Profile(_ref) {
  var lists = _ref.lists,
      modules = _ref.modules,
      contributorsList = _ref.contributorsList,
      wording = _ref.wording;
  var theme = (0, _react.useContext)(_core.ThemeContext);
  var styles = {
    sectionWrapper: _defineProperty({
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column'
    }, theme.media.laptop, {
      flexDirection: 'row'
    }),
    infoWrapper: _defineProperty({
      flex: 1,
      flexDirection: 'column'
    }, theme.media.laptop, {
      paddingRight: 10
    }),
    buttonWrapper: _defineProperty({
      flex: 1,
      display: !modules || modules.length === 0 ? 'none' : 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }, theme.media.laptop, {
      alignItems: 'flex-end'
    })
  };
  return (0, _core.jsx)(_react["default"].Fragment, null, (0, _core.jsx)(_.ActionBanner, {
    title: wording.title
  }), (0, _core.jsx)(_.Slice, null, (0, _core.jsx)("div", {
    css: styles.sectionWrapper
  }, (0, _core.jsx)("div", {
    css: styles.infoWrapper
  }, lists.map(function (itemInfo) {
    return (0, _core.jsx)(_.FormInfos, {
      key: itemInfo.title,
      title: itemInfo.title,
      infos: itemInfo.list,
      actions: itemInfo.editUrl && [{
        href: itemInfo.editUrl,
        icon: 'edit'
      }]
    });
  })), modules && modules.length > 0 && (0, _core.jsx)("div", {
    css: styles.buttonWrapper
  }, modules.map(function (ModuleComponent, index) {
    return (0, _core.jsx)(_react.Fragment, {
      key: index
    }, ModuleComponent);
  }))), contributorsList && contributorsList.length > 0 && (0, _core.jsx)(_.ProfilInfoList, {
    slice: false,
    infos: contributorsList,
    tableTitle: wording.contributors_title
  })));
};

var _default = Profile;
exports["default"] = _default;
Profile.propTypes = {
  wording: _propTypes["default"].shape({}).isRequired,
  contributorsList: _propTypes["default"].array,
  lists: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string,
    editUrl: _propTypes["default"].string,
    list: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      label: _propTypes["default"].string,
      value: _propTypes["default"].string
    }))
  })),
  modules: _propTypes["default"].arrayOf(_propTypes["default"].node)
};