import React from 'react'
import FirstMoveMenu from './FirstMoveMenu.jsx'

// const GameButton = ({type, text, setGameType, hidden}) => (
//   <div className='col-md-4'>
//     <div className='row'>
//       <div className='col-xs-8 offset-xs-2 col-md-12'>
//         <button onClick={setGameType.bind(null, type)} type="button" className="btn-block btn btn-primary" hidden={hidden}>{text}</button>
//       </div>
//     </div>
//   </div>
// )

function GameButton ({text, onClick}) {
  return (
    <div className='col-md-4'>
      <div className='row'>
        <div className='col-xs-8 offset-xs-2 col-md-12'>
          <button onClick={onClick} className='btn btn-block btn-primary'>{text}</button>
        </div>
      </div>
    </div>
  )
}

export default React.createClass({
  getInitialState: () => ({subMenu: false}),
  render () {
    const subMenu = this.state.subMenu === 'HvsC' ? <FirstMoveMenu startGame={this.props.startGame}/> : ''

    return (
      <div id='menu'>
        <div id='game-selector' className='row'>
          <GameButton text='Human vs Human' onClick={this.props.startGame.bind(null, 'HvsH')}/>
          <GameButton text='Human vs Computer' onClick={this.setState.bind(null, {subMenus: true})}/>
          <GameButton text='Computer vs Computer' onClick={this.props.startGame.bind(null, 'CvsC')}/>
        </div>
        {subMenu}
      </div>
    )
  }
})
// export default React.createClass({
//   getInitialState: () => ({subMenu: false}),
//   render () {
//     const subMenu = this.state.subMenu === 'HvsC' ? <FirstMoveMenu startGame={this.props.startGame}/> : ''
//
//     return (
//       <div id='menu'>
//         <div id='game-selector' className='row'>
//           <GameButton text='Human vs Human' onClick={this.props.startGame.bind(null, 'HvsH')}/>
//           <GameButton text='Human vs Computer' onClick={this.setState.bind(null, {subMenus: true})}/>
//           <GameButton text='Computer vs Computer' onClick={this.props.startGame.bind(null, 'CvsC')}/>
//         </div>
//         {subMenu}
//       </div>
//     )
//   }
// })

// export default function Menu ({gameType, startGame, setGameType}) {
//   const subMenu = gameType === 'HvsC' ? <FirstMoveMenu startGame={startGame}/> : ''
//
//   return (
//     <div id='menu'>
//       <div id='game-selector' className='row'>
//         <GameButton text='Human vs Human' onClick={startGame.bind(null, 'HvsH')}/>
//         <GameButton text='Human vs Computer' onClick={setGameType.bind(null, 'HvsC')}/>
//         <GameButton text='Computer vs Computer' onClick={startGame.bind(null, 'CvsC')}/>
//       </div>
//       {subMenu}
//     </div>
//   )
// }
