import React from 'react';
import "./Button.css";

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };
  
  render() {  
    const className = [
      "btnNormal",
      this.props.operator ? "red" : "",
      this.props.clear ? "clear" : "",
    ];

    return (
      <div className={className.join(" ")}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;
