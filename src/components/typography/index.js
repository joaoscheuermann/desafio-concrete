import './style.scss'
import React from 'react'

export default ({ tag, children, className, ...props }) => {

  return React.createElement(tag || 'div', { className: `typography ${className}`, ...props }, children)
}
