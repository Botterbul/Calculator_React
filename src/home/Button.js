import React from 'react';
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
        <div className="smallButton">
          <button onClick={this.handleClick}>{this.props.name}</button>
        </div>
      );
  }
}

export default Button;
