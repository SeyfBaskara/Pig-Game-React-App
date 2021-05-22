import React from 'react'

export default function PlayerTwo(props) {
   return (
      <section className="player player--1">
         <h2 className="name">{props.data.players.player_2}</h2>
         <p className="score">{props.data.scores[1]}</p>
         <div className="current">
            <p className="current-label">{props.data.label}</p>
            <p className="current-score">{props.data.activePlayer === 1 ? props.data.currentScore : 0}</p>
         </div>
      </section>
   )
}
