'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import EmperorsMenu from './EmperorsMenu';
import Fact from './Fact';
import emperors from '../data/emperors';

export default class EmperorPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const emperor = emperors.filter((emperor) => emperor.id === id)[0];
    if (!emperor) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${emperor.cover})` };
    return (
      <div className="emperor-full">
        <EmperorsMenu emperors={emperors}/>
        <div className="emperor">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${emperor.image}`}/>
            <h2 className="name">{emperor.name}</h2>
          </div>
          <section className="description">
             Император России,родившийся в {emperor.birth} году
             (Больше информации на <a href={emperor.link} target="_blank">Wikipedia</a>).
          </section>
          <section className="facts">
            <p>Известно <strong>{emperor.facts.length}</strong> факта:</p>
            <ul>{
              emperor.facts.map((fact, i) => <Fact key={i} {...fact}/>)
            }</ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
