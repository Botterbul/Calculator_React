import React from 'react';
import Button from './Button';
import './Panel.css';

class Panel extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };
  
  render() {
    return (
      <div className="Panel">
        <div>
            <Button name="clear" clickHandler={this.handleClick} clear/>
            <Button name="÷" clickHandler={this.handleClick} operator/>
        </div>
        <div>
            <Button name="7" clickHandler={this.handleClick} />
            <Button name="8" clickHandler={this.handleClick} />
            <Button name="9" clickHandler={this.handleClick} />
            <Button name="-" clickHandler={this.handleClick} operator/>
        </div>
        <div>
            <Button name="4" clickHandler={this.handleClick} />
            <Button name="5" clickHandler={this.handleClick} />
            <Button name="6" clickHandler={this.handleClick} />
            <Button name="+" clickHandler={this.handleClick} operator/>
        </div>
        <div>
            <Button name="1" clickHandler={this.handleClick} />
            <Button name="2" clickHandler={this.handleClick} />
            <Button name="3" clickHandler={this.handleClick} />
            <Button name="=" clickHandler={this.handleClick} operator/>
        </div>
      </div>
    );
  }
}

export default Panel;
