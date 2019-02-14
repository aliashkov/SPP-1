'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class EmperorPreview extends React.Component {
  render() {
    return (
      <Link to={`/emperor/${this.props.id}`}>
        <div className="emperor-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="facts-count"><img src="/img/star.png"/> {this.props.facts.length}</span>
        </div>
      </Link>
    );
  }
}
