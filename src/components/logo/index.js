import './style.scss'
import React from 'react'

export default ({ small }) => {
  const className = ['logo', small ? ' -small': ''].join('')

  const props = {
    className,
  }

  return (
    <div {...props}>
      GitHub
      <span className="search"> Search</span>
    </div>
  )
}
