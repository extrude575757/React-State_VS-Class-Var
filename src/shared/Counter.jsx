import React from "react";

import Button from "./Button";

const Counter = ({ details, handleClick, status = "good", title, value }) => {
  return (
    <div className={`Counter Counter--${status}`}>
      <h2 className="Counter__title">{title}</h2>
      <p className="Counter__details">{details}</p>
      <code className="Counter__value">{value}</code>
      <Button onClick={handleClick} />
    </div>
  );
};

export default Counter;
