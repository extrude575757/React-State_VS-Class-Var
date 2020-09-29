import React from "react";
import Button from "./shared/Button";
import Counter from "./shared/Counter";

class StateCounter extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <Counter
        title="State"
        details="The preferred solution"
        value={this.state.count}
        handleClick={this.increment}
      />
    );
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
}

export default StateCounter;
