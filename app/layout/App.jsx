import React from 'react'

export default React.createClass({
  getInitialState () {
    return (
      {
        gameType: '',
        firstMove: ''
      }
    )
  },
  setGameType (type) {
    this.setState({gameType: type})
  },
  startGame (a) {
    console.log(a)
    console.log('bob')
    // <Link to='/' className='btn btn-info'>New Game</Link>
  },
  render () {
    return (
      <div className='container text-xs-center'>
        <p>{JSON.stringify(this.state)}</p>

        <p className='display-0'>Tic Tac Toe</p>
        {/* TODO: Implement ES7 object spread {...this.props} */}
        {React.cloneElement(this.props.children, { startGame: this.startGame, setGameType: this.setGameType, gameType: this.state.gameType })}
      </div>
    )
  }
})
