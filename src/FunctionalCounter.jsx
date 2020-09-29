import React from "react";
import Counter from "./shared/Counter";

const FunctionalCounter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  return (
    <Counter
      title="Functional"
      details="Modern React API"
      value={count}
      handleClick={increment}
    />
  );
};

export default FunctionalCounter;
