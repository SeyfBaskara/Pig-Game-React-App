import React from 'react'

export default function NewGame(props) {
   return (
      <button className="btn btn--new" onClick={props.handleNewGame}>
         🔄 New game
      </button>
   )
}
