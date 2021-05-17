import React, { Component } from 'react'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'
import NewGame from './NewGame'
import RollDice from './RollDice'
import HoldScore from './HoldScore'
import DiceImage from './DiceImage'

export class Players extends Component {
   render() {
      return (
         <main>
            <PlayerOne />
            <PlayerTwo />
            <DiceImage />
            <NewGame />
            <RollDice />
            <HoldScore />
         </main>
      )
   }
}

export default Players
