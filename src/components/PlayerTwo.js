import React from 'react'

export default function PlayerTwo(props) {
   return (
      <section className="player player--1">
         <h2 className="name" id="name--1">
            {props.data.players[1]}
         </h2>
         <p className="score" id="score--1">
            {props.data.scores[1]}
         </p>
         <div className="current">
            <p className="current-label">{props.data.label}</p>
            <p className="current-score" id="current--1">
               {props.data.currentScore}
            </p>
         </div>
      </section>
   )
}
