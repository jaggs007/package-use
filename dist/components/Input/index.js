import React from 'react';

const Input = props => {
  const {
    placeholder,
    onInputChange,
    value
  } = props;
  return React.createElement("div", null, React.createElement("input", {
    placeholder: placeholder,
    onChange: onInputChange,
    value: value
  }));
};

export default Input;