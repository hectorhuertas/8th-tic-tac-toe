import React from 'react'

export default () => (
  <div className='container text-xs-center'>
    <h1 className='display-3'>Tic Tac Toe</h1>
    <div id='game-selector' className='row'>
      <div className='col-md-4'>
        <div className='row'>
          <div className='col-xs-8 offset-xs-2 col-md-12'>
            <button type="button" className="btn-block btn btn-primary" >Human vs Human</button>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='row'>
          <div className='col-xs-8 offset-xs-2 col-md-12'>
            <button type="button" className="btn-block btn btn-primary" >Human vs Computer</button>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='row'>
          <div className='col-xs-8 offset-xs-2 col-md-12'>
            <button type="button" className="btn-block btn btn-primary" >Computer vs Computer</button>
          </div>
        </div>
      </div>
    </div>
    <div id='first-move' className='row'>
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
