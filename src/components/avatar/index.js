import './style.scss'
import React from 'react'

export default ({ ...props }) => {

  return (
    <img className="avatar" alt="" {...props} />
  )
}
