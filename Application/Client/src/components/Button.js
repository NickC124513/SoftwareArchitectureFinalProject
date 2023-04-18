import React from "react";

const Button = ({ type, onClick, children, disabled }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
