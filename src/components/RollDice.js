import React from 'react'

export default function RollDice(props) {
   return (
      <button className="btn btn--roll" onClick={props.handleRollDice}>
         🎲 Roll dice
      </button>
   )
}
