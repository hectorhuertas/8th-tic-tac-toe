import React from 'react'
import Child from './Child.jsx'

const children = [
  {
    id: 1,
    name: 'one'
  },
  {
    id: 2,
    name: 'two'
  }
]

export default () => (
  <div>
    <div>Tic Tac Toe</div>
    <ul>{children.map(Child)}</ul>
  </div>
)
