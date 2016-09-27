import React from 'react'
const GameButton = ({type, text, setGameType, hidden}) => (
  <div className='col-md-4'>
    <div className='row'>
      <div className='col-xs-8 offset-xs-2 col-md-12'>
        <button onClick={setGameType.bind(null, type)} type="button" className="btn-block btn btn-primary" hidden={hidden}>{text}</button>
      </div>
    </div>
  </div>
)

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
    console.log('game type set')
    this.setState({gameType: type})
  },
  render () {
    return (
      <div className='container text-xs-center'>
        <p className='display-3'>Tic Tac Toe</p>
        <div id='game-selector' className='row'>
          <GameButton text='Human vs Human' type='hvh' setGameType={this.setGameType} hidden={this.state.gameType === 'hvc'}/>
          <GameButton text='Human vs Computer' type='hvc' setGameType={this.setGameType}/>
          <GameButton text='Computer vs Computer' type='cvc' setGameType={this.setGameType} hidden={this.state.gameType === 'hvc'}/>
        </div>
        <div id='first-move' className='row' hidden={this.state.gameType !== 'hvc'}>
          <div className='col-md-4 offset-md-2'>
            <div className='row'>
              <div className='col-xs-6 offset-xs-3 col-md-12'>
                <button type="button" className="btn-block btn btn-success">Human Starts</button>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-xs-6 offset-xs-3 col-md-12'>
                <button type="button" className="btn-block btn btn-success">Computer Starts</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
