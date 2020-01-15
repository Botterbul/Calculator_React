import React from 'react';
import PropTypes from "prop-types";
import "./Button.css";

class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    red: PropTypes.bool,
    clear: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

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
