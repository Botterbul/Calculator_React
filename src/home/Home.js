import React from 'react';
import Panel from './Panel';
import Output from './Output';
import Calculate from "./Calculate";

class Home extends React.Component {
  state = {
    newValue: null,
    totalValue: null,
    operator: null,
  };

  btnClicked = btnClickedName => {
    this.setState(calculate(this.state, btnClickedName));
  };

  render() {
    return (
      <div className="Home">
          <Output value={"0" || this.state.newValue || this.state.totalValue}/>
          <Panel onClick={this.btnClicked}/>
      </div>
    );
  }
}

export default Home;