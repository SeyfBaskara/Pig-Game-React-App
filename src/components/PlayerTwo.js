import React from 'react'

export default function PlayerTwo(props) {
   const { label, activePlayer, players, scores, currentScore, finalScore } = props.data
   return (
      <section
         className={`player 
         ${activePlayer === 1 && 'player--active'}
         ${scores[1] > finalScore && 'player--winner'}`}
      >
         <h2 className="name">{players.player_2}</h2>
         <p className="score">{scores[1]}</p>
         <div className="current">
            <p className="current-label">{label}</p>
            <p className="current-score">{activePlayer === 1 ? currentScore : 0}</p>
         </div>
      </section>
   )
}
