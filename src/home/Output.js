import React from 'react';
import PropTypes from "prop-types";
import './Output.css';

class Output extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="Output">
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default Output;