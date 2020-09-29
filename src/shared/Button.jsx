import React from "react";

function Button({ alt, ...props }) {
  return <button className={`Button ${alt ? "Button--alt" : ""}`} {...props} />;
}

Button.defaultProps = {
  children: "+1"
};

export default Button;
