import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missions.map((m) => (
          <ul key={ m.name }>
            <MissionCard
              name={ m.name }
              year={ m.year }
              country={ m.country }
              destination={ m.destination }
            />
          </ul>))}
      </div>
    );
  }
}
