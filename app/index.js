import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Menu from './menu/Menu.jsx'
import Game from './game/Game.jsx'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Menu}/>
    <Route path='/game' component={Game}/>
  </Router>,
  document.getElementById('app')
)
