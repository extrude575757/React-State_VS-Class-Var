import React from "react";

import Counter from "./shared/Counter";

class VariableCounter extends React.Component {
  count = 0;

  render() {
    return (
      <Counter
        title="Variable"
        details="Works, but not ideal"
        handleClick={this.increment}
        status="warning"
        value={this.count}
      />
    );
  }

  increment = () => {
    this.count = this.count + 1;
    this.forceUpdate();
  };
}

export default VariableCounter;
