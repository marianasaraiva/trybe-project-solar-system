import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planets.map((planeta) => (
          <p key={ planeta.name }>
            <PlanetCard planetName={ planeta.name } planetImage={ planeta.image } />
          </p>))}
      </div>
    );
  }
}
