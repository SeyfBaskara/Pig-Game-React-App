import React from 'react'

export default function PlayerOne(props) {
   const { label, activePlayer, players, scores, currentScore, finalScore } = props.data
   return (
      <section
         className={`player 
         ${activePlayer === 0 && 'player--active'} 
         ${scores[0] > finalScore && 'player--winner'}`}
      >
         <h2 className="name">{players.player_1}</h2>
         <p className="score">{scores[0]}</p>
         <div className="current">
            <p className="current-label">{label}</p>
            <p className="current-score">{activePlayer === 0 ? currentScore : 0}</p>
         </div>
      </section>
   )
}
