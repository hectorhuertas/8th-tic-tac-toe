import React from 'react'

export default function FirstMoveMenu ({startGame}) {
  return (
    <div id='first-move' className='row'>
      <div className='col-md-4 offset-md-2'>
        <FirstMoveButton player='Human' onClick={startGame.bind(null, {gameType: 'HvsC', firstMove: 'human'})}/>
      </div>
      <div className='col-md-4'>
        <FirstMoveButton player='Computer' onClick={startGame.bind(null, {gameType: 'HvsC', firstMove: 'computer'})}/>
      </div>
    </div>
  )
}

function FirstMoveButton ({player, onClick}) {
  return (
    <div className='row'>
      <div className='col-xs-6 offset-xs-3 col-md-12'>
        <button onClick={onClick} className='btn btn-block btn-success'>{player} Starts</button>
      </div>
    </div>
  )
}
