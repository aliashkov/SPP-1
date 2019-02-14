'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class EmperorsMenu extends React.Component {
  render() {
    return (
      <nav className="emperors-menu">
        {this.props.emperors.map(menuEmperor => {
          return <Link key={menuEmperor.id} to={`/emperor/${menuEmperor.id}`} activeClassName="active">
            {menuEmperor.name}
          </Link>;
        })}
      </nav>
    );
  }
}
