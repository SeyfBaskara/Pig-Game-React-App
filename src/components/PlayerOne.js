import React from 'react'

export default function PlayerOne(props) {
   return (
      <section className="player player--active">
         <h2 className="name">{props.data.players.player_1}</h2>
         <p className="score">{props.data.scores[0]}</p>
         <div className="current">
            <p className="current-label">{props.data.label}</p>
            <p className="current-score">{props.data.activePlayer === 0 ? props.data.currentScore : 0}</p>
         </div>
      </section>
   )
}
