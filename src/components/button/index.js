import './style.scss'
import React from 'react'

export default ({ children, ...props }) => {

  return (
    <button className="button" {...props}>
      { children }
    </button>
  )
}
