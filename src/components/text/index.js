import './style.scss'
import React from 'react'

export default ({ tag, type, className, children, ...props }) => React.createElement(tag || "div", { className: [className || '', 'text', ...type.split(' ').map(i => '-' + i)].join(' '), ...props }, children)
