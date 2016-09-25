import React from 'react'

export default () => (
  <div>
    <h1>Tic Tac Toe</h1>
    <div id='game-selector'>
      <button>Human vs Human</button>
      <button>Human vs Computer</button>
      <button>Computer vs Computer</button>
    </div>
    <div id='first-move'>
      <button>Human Starts</button>
      <button>Computer Starts</button>
    </div>
  </div>
)
