import React from 'react';
import Button from './Button';
import Output from './Output';
import './Panel.css';

class Panel extends React.Component {
  render() {
    return (
      <div className="Panel">
        <div>
          <Output value="0"/>
        </div>
        <div>
            <Button name="clear" onClick={this.handleClick} clear/>
            <Button name="÷" onClick={this.handleClick} operator/>
        </div>
        <div>
            <Button name="7" onClick={this.handleClick} />
            <Button name="8" onClick={this.handleClick} />
            <Button name="9" onClick={this.handleClick} />
            <Button name="-" onClick={this.handleClick} operator/>
        </div>
        <div>
            <Button name="4" onClick={this.handleClick} />
            <Button name="5" onClick={this.handleClick} />
            <Button name="6" onClick={this.handleClick} />
            <Button name="+" onClick={this.handleClick} operator/>
        </div>
        <div>
            <Button name="1" onClick={this.handleClick} />
            <Button name="2" onClick={this.handleClick} />
            <Button name="3" onClick={this.handleClick} />
            <Button name="=" onClick={this.handleClick} operator/>
        </div>
      </div>
    );
  }
}

export default Panel;
