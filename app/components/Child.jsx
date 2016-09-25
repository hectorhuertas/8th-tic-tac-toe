import React from 'react'

export default (child) => (
  <li key={child.id}>{child.name}</li>
)
