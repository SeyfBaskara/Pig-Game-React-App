import React from 'react'

export default function PlayerOne(props) {
   return (
      <section className="player player--0 player--active">
         <h2 className="name" id="name--0">
            {props.data.players[0]}
         </h2>
         <p className="score" id="score--0">
            {props.data.scores[0]}
         </p>
         <div className="current">
            <p className="current-label">{props.data.label}</p>
            <p className="current-score" id="current--0">
               {props.data.currentScore}
            </p>
         </div>
      </section>
   )
}
