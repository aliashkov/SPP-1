'use strict';

import React from 'react';

const typeMap = {
  'H': 'Red',
  'M': 'Yellow',
  'L': 'Green'
};

export default class Fact extends React.Component {
  render() {
    return (
      <li className="fact">
        <span className={`symbol symbol-${this.props.type}`} title={typeMap[this.props.type]}>{this.props.type}</span>
        <span className="year">{this.props.year}</span>
        <span className="city"> {this.props.city}</span>
        <span className="info"> {this.props.info}</span>
      </li>
    );
  }
}
