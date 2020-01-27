"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(props) {
  return _react.default.createElement("div", {
    className: "card"
  }, _react.default.createElement("div", null, "This is the custom card"), props.children);
};

var _default = Card;
exports.default = _default;