import './style.scss'
import React from 'react'

export default ({ ...props }) => {

  return (
    <input className="text-input" type="text" placeholder="digite alguma coisa" {...props} />
  )
}
