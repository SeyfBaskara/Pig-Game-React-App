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
         players: {
            player_1: 'Player 1',
            player_2: 'Player 2',
         },
         label: 'Current',
         dices: data,
      }
   }
   handleNewGame = () => {
      this.setState({ key: 0, currentScore: 0, scores: [0, 0], playing: true })
   }
   handleRollDice = () => {
      if (this.state.playing) {
         this.setState((prevState) => {
            const dice = Math.trunc(Math.random() * 6 + 1)
            const toggle = dice === 1 ? 0 : 1
            return {
               key: dice,
               currentScore: dice === 1 ? 0 : prevState.currentScore + dice,
               activePlayer: prevState.activePlayer === toggle ? 1 : 0,
            }
         })
      }
   }
   handleHoldScore = () => {
      if (this.state.playing) {
         this.setState((prevState) => {
            if (prevState.activePlayer === 0) {
               return {
                  scores: [(prevState.scores[0] += prevState.currentScore), prevState.scores[1]],
                  currentScore: 0,
                  activePlayer: 1,
                  playing: prevState.scores[0] >= 20 ? false : prevState.playing,
               }
            }
            if (prevState.activePlayer === 1) {
               return {
                  scores: [prevState.scores[0], (prevState.scores[1] += prevState.currentScore)],
                  currentScore: 0,
                  activePlayer: 0,
                  playing: prevState.scores[1] >= 20 ? false : prevState.playing,
               }
            }
         })
      }
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
