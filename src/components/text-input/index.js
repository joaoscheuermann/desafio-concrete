import './style.scss'
import React from 'react'

export default function TextInput ({ref, ...props }) {
  return (
    <input className="text-input" type="text" {...props} />
  )
}
