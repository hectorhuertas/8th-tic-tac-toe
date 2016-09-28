import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Menu from './menu/Menu.jsx'
import Game from './game/Game.jsx'
import App from './layout/App.jsx'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Menu}/>
      <Route path='/:type' component={Game}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
