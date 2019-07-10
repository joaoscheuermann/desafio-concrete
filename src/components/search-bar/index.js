import './style.scss'
import React, { useState } from 'react'

import Button from '../button'
import TextInput from '../text-input'

import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg'

export default function SearchBar ({ onInput, onSearch, onKeyPress }) {
  const [value, setValue] = useState('')

  const textInputProps = {
    placeholder:"Hansolo ???",
    onInput: (e) => {
      if (onInput) onInput(e)
      setValue(e.target.value)
    },

    onKeyPress: ({ key }) => {
      if (key === 'Enter') onSearch({ value })
    }
  }

  const buttonProps = {
    onClick: () => onSearch({ value })
  }

  return (
    <div className="search-bar">
      <TextInput {...textInputProps}/>
      <Button {...buttonProps}>
        <SearchIcon />
      </Button>
    </div>
  )
}
