import './style.scss'
import React from 'react'

import Button from '../button'
import TextInput from '../text-input'

import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg'

export default ({ onInput, onClick, onKeyPress }) => {

  const textInputProps = {
    placeholder:"Hansolo ???",
    onInput,
  }

  const buttonProps = {
    onClick
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
