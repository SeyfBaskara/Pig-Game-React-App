import React from 'react'

export default function Dice(props) {
   return (
      <>
         {props.data.dices
            .filter((dice) => (dice.id === props.data.key ? dice.id : null))
            .map((dice) => {
               return (
                  <img
                     src={dice.id === props.data.key ? dice.dice : null}
                     key={dice.id}
                     alt="playing dice"
                     className="dice"
                  />
               )
            })}
      </>
   )
}
