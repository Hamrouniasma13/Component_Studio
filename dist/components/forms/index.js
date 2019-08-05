"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _studioForm = require("studio-form");

var _InputText = _interopRequireDefault(require("./InputText"));

var _InputDate = _interopRequireDefault(require("./InputDate"));

var _InputBirthdate = _interopRequireDefault(require("./InputBirthdate"));

var _InputSelect = _interopRequireDefault(require("./InputSelect"));

var _Radios = _interopRequireDefault(require("./Radios"));

var _Field = _interopRequireDefault(require("./Field"));

var _Button = _interopRequireDefault(require("../Button"));

var _Text = _interopRequireDefault(require("../Text"));

var _slugify = _interopRequireDefault(require("slugify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledText = (0, _styled["default"])(_Text["default"].h2)({
  marginTop: 50,
  marginBottom: 30
});

var MyForm = function MyForm(_ref) {
  var _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      rest = _objectWithoutProperties(_ref, ["inline"]);

  return _react["default"].createElement(_studioForm.Form, _extends({
    submitButton: function submitButton() {
      return _react["default"].createElement(_Button["default"], {
        type: "submit"
      }, "Envoyer");
    },
    components: function components(props) {
      var uiProperty = props.uiProperty,
          property = props.property,
          name = props.name;
      var childrenProps = {};
      var currentProps = props;
      var Child = undefined;
      var beforeChild = undefined;

      if (property["default"]) {
        childrenProps.value = property["default"];
      } // assign default props to each component input


      if (uiProperty) {
        if (uiProperty.placeholder) {
          childrenProps.placeholder = uiProperty.placeholder;
        }

        if (uiProperty.before) {
          beforeChild = uiProperty.before;
        }

        if (uiProperty.Component) {
          Child = uiProperty.Component;
        }
      } // property: date


      if (property.type === 'date') {
        Child = uiProperty && uiProperty.widget === 'birthdate' ? _InputBirthdate["default"] : _InputDate["default"]; // format the default value before sending to the component

        if (property["default"]) {
          childrenProps.value = new Date(property["default"]);
        }
      } // property: enum


      if (property["enum"]) {
        if (uiProperty && uiProperty["enum"]) {
          childrenProps.options = uiProperty["enum"];
        } else {
          childrenProps.options = filterOptions(property["enum"]);
        }

        if (uiProperty && uiProperty.widget === 'select') {
          Child = _InputSelect["default"]; // override onChange because studio-form take { name, value } as a parameters

          childrenProps.onChange = function (e) {
            if (uiProperty["enum"]) {
              props.onChange({
                name: name,
                value: e,
                persist: function persist() {}
              });
            } else {
              props.onChange({
                name: name,
                value: e.value,
                persist: function persist() {}
              });
            }
          };

          childrenProps.onBlur = function (e) {
            if (uiProperty["enum"]) {
              props.onBlur({
                name: name,
                value: e,
                persist: function persist() {}
              });
            } else {
              props.onBlur({
                name: name,
                value: e.value,
                persist: function persist() {}
              });
            }
          };

          if (property["default"]) {
            childrenProps.defaultValue = childrenProps.options.find(function (enu) {
              return enu.value === property["default"];
            });
          }
        } else {
          childrenProps.big = true;
          Child = _Radios["default"];
        }
      }

      if (property.type === 'password') {
        childrenProps.type = 'password';
      } // if no child is assigned, use a <InputText />


      if (Child === undefined) {
        Child = _InputText["default"];

        if (uiProperty && uiProperty.widget === 'textarea') {
          childrenProps.vertical_align = 'top';
          childrenProps.textarea = true;
        }
      } // assign children props


      currentProps.childrenProps = childrenProps;
      return _react["default"].createElement(_react["default"].Fragment, {
        key: name
      }, beforeChild ? _react["default"].createElement(StyledText, null, beforeChild) : null, _react["default"].createElement(_Field["default"], _extends({}, currentProps, {
        inline: inline
      }), _react["default"].createElement(Child, null)));
    }
  }, rest));
};

var _default = MyForm;
exports["default"] = _default;

var filterOptions = function filterOptions(vals) {
  return vals.map(function (v) {
    return {
      value: (0, _slugify["default"])(v),
      label: v
    };
  });
};