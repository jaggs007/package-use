"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(props) {
  var placeholder = props.placeholder,
      onInputChange = props.onInputChange,
      value = props.value;
  return _react.default.createElement("div", null, _react.default.createElement("input", {
    placeholder: placeholder,
    onChange: onInputChange,
    value: value
  }));
};

var _default = Input;
exports.default = _default;