import React, { Component } from 'react'
import '../css/rollDice.css'
import Dice from './Dice'

export class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  constructor(props){
    super(props);
    this.state = {dice1: 'one', dice2: 'one', rolling: false};
  }

  roll = () => {
    const newDice1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDice2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    
      this.setState({ dice1: newDice1, dice2: newDice2, rolling: true})

      // wait one sec and setrooling to false

      setTimeout( () => {
        this.setState({ rolling: false })
      }, 1000)

  }

  render() {
    return (
      <div className='roll-dice'>
        <div className='rolldice-container'>
          <Dice face={this.state.dice1} rolling={this.state.rolling} />
          <Dice face={this.state.dice2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling} >
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    )
  }
}

export default RollDice