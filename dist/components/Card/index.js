"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(props) {
  var title = props.title,
      description = props.description,
      footer = props.footer;
  return _react.default.createElement("div", {
    className: "Card"
  }, _react.default.createElement("h1", {
    className: "Card-title"
  }, title), _react.default.createElement("div", {
    className: "Card-description"
  }, description), _react.default.createElement("div", {
    className: "Card-footer"
  }, footer));
};

var _default = Card;
exports.default = _default;