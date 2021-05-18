import React from 'react'

export default function HoldScore(props) {
   return (
      <button className="btn btn--hold" onClick={props.handleHoldScore}>
         📥 Hold
      </button>
   )
}
