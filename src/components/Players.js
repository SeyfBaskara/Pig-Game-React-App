import React, { Component } from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'
import NewGame from './NewGame'
import RollDice from './RollDice'
import HoldScore from './HoldScore'
import Dice from './Dice'
import { data } from '../data'

export class Players extends Component {
   constructor(props) {
      super(props)

      this.state = {
         scores: [0, 0],
         currentScore: 0,
         activePlayer: 0,
         key: 0,
         playing: true,
         players: ['Player 1', 'Player 2'],
         label: 'Current',
         dices: data,
      }
   }

   handleNewGame = () => {
      console.log('New Game')
   }
   handleRollDice = () => {
      this.setState(() => {
         const dice = Math.trunc(Math.random() * 6 + 1)
         return {
            key: dice,
         }
      })
   }
   handleHoldScore = () => {
      console.log('Hold score')
   }

   render() {
      return (
         <main>
            <PlayerOne data={this.state} />
            <PlayerTwo data={this.state} />
            <Dice data={this.state} />
            <NewGame handleNewGame={this.handleNewGame} />
            <RollDice handleRollDice={this.handleRollDice} />
            <HoldScore handleHoldScore={this.handleHoldScore} />
         </main>
      )
   }
}

export default Players
