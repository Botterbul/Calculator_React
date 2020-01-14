import React from 'react';
import Panel from './Panel';
import Output from './Output';
import calculate from "./calculate";

class Home extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="Home">
          <Output value={"0" || this.state.newValue || this.state.totalValue}/>
          <Panel clickHandler={this.handleClick}/>
      </div>
    );
  }
}

export default Home;