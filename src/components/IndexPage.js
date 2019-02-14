'use strict';

import React from 'react';
import EmperorPreview from './EmperorPreview';
import emperors from '../data/emperors';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="emperors-selector">
          {emperors.map(emperorData => <EmperorPreview key={emperorData.id} {...emperorData} />)}
        </div>
      </div>
    );
  }
}
