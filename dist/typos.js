"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _media = _interopRequireDefault(require("./theme/media"));

var _h, _h2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var h1 = (_h = {
  fontSize: '26px',
  lineHeight: '1.2em',
  fontWeight: 600
}, _defineProperty(_h, _media["default"].tablet, {
  fontSize: '30px',
  letterSpacing: '0.02em',
  lineHeight: '1.15em'
}), _defineProperty(_h, _media["default"].laptop, {
  fontSize: '36px'
}), _h);
var h2 = (_h2 = {
  fontSize: '20px',
  letterSpacing: '1',
  lineHeight: '1.2em',
  fontWeight: 600
}, _defineProperty(_h2, _media["default"].tablet, {
  fontSize: '22px',
  letterSpacing: '0.8px'
}), _defineProperty(_h2, _media["default"].laptop, {
  fontSize: '24px'
}), _h2);

var h3 = _defineProperty({
  fontSize: '18px',
  letterSpacing: '0.2px',
  lineHeight: '1.2em',
  fontWeight: 600
}, _media["default"].laptop, {
  fontSize: '20px'
}); // equivalent for PH (Pragraph Highlight)


var h4 = {
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '1.5em' // equivalent for (P)

};
var paragraph = {
  fontSize: '16px',
  fontWeight: 400,
  letterSpacing: '0.3px',
  lineHeight: '1.4em' // equivalent for small text (ST)

};
var smallText = {
  color: '#8F8F90',
  fontSize: 14 // equivalent for LINK

};
var link = {
  fontSize: 14 // equivalent of BIG NUMBER

};
var bigNumber = {
  fontSize: 40,
  lineHeight: '40px',
  fontWeight: 'bold'
};
var legend = {
  fontSize: 12,
  fontWeight: 'bold'
};
var _default = {
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  paragraph: paragraph,
  smallText: smallText,
  link: link,
  legend: legend,
  bigNumber: bigNumber,
  h5: paragraph,
  h6: paragraph,
  div: paragraph,
  p: paragraph,
  span: paragraph,
  typo1: h1,
  typo2: h2,
  typo3: h3,
  typo4: h4,
  typo5: paragraph,
  typo6: smallText,
  typo7: link,
  typo8: bigNumber
};
exports["default"] = _default;