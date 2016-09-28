import React from 'react'
import { Link } from 'react-router'

export default function Game ({params}) {
  return (
    <div>
      <Link to='/' className='btn btn-info'>New Game</Link>
      <div>Game of '{params.type}' on!</div>
    </div>
  )
}
