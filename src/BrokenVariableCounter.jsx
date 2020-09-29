import React from "react";

import Counter from "./shared/Counter";

class BrokenVariableCounter extends React.Component {
  count = 0;

  render() {
    return (
      <Counter
        title="Broken variable"
        details="Before using forceUpdate()"
        value={this.count}
        handleClick={this.increment}
        status="error"
      />
    );
  }

  increment = () => {
    this.count = this.count + 1;
    // this.forceUpdate();
  };
}

export default BrokenVariableCounter;
