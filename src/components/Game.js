import React, { Component } from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'
import NewGame from './NewGame'
import RollDice from './RollDice'
import HoldScore from './HoldScore'
import Dice from './Dice'
import { data } from '../data'

export class Game extends Component {
   constructor(props) {
      super(props)

      this.state = {
         scores: [0, 0],
         currentScore: 0,
         finalScore: 50,
         activePlayer: 0,
         key: 0,
         playing: true,
         players: ['Player 1', 'Player 2'],
         label: 'current',
         dices: data,
      }
   }
   handleNewGame = () => {
      this.setState({
         key: 0,
         currentScore: 0,
         scores: [0, 0],
         playing: true,
         activePlayer: 0,
      })
   }
   handleRollDice = () => {
      if (this.state.playing) {
         this.setState((prevState) => {
            const dice = Math.trunc(Math.random() * 6 + 1)
            const player_1 = prevState.players.indexOf('Player 1') // 0
            const player_2 = prevState.players.indexOf('Player 2') // 1
            const toggle = dice === 1 ? player_1 : player_2
            return {
               key: dice,
               currentScore: dice === 1 ? 0 : prevState.currentScore + dice,
               activePlayer: prevState.activePlayer === toggle ? player_2 : player_1,
            }
         })
      }
   }
   handleHoldScore = () => {
      if (this.state.playing) {
         this.setState((prevState) => {
            const score = prevState.finalScore
            const player_1 = prevState.players.indexOf('Player 1') // 0
            const player_2 = prevState.players.indexOf('Player 2') // 1
            if (prevState.activePlayer === player_1) {
               return {
                  scores: [(prevState.scores[0] += prevState.currentScore), prevState.scores[1]],
                  currentScore: 0,
                  activePlayer: player_2,
                  playing: prevState.scores[0] >= score ? false : prevState.playing,
               }
            }
            if (prevState.activePlayer === player_2) {
               return {
                  scores: [prevState.scores[0], (prevState.scores[1] += prevState.currentScore)],
                  currentScore: 0,
                  activePlayer: player_1,
                  playing: prevState.scores[1] >= score ? false : prevState.playing,
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

export default Game
