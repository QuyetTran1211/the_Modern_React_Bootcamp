import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './pokedex.css';

export default class Pokedex extends Component {
  render() {
    let title;

    if(this.props.isWinner) {
      title = <h1 className='Pokedex-winner'>Winning Hand</h1>
    }else {
      title = <h1 className='Pokedex-loser'>Losing Hand</h1>
    }

    return (
      <div className='Pokedex' >
        <h1>Pokedex!</h1>
        <h4>ToTal: Experience: {this.props.exp}</h4>
        {title}
        <div className='Pokedex-cards'>
        {this.props.pokemon.map((p) => (
          <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} key={p.id} />
        ))}
        </div>
      </div>
    )
  }
}
