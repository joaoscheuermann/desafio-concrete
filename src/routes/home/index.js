import React from 'react';

import Logo from '../../components/logo'
import Button from '../../components/button'
import TextInput from '../../components/text-input'

import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg'

export default () => {
  return (
    <div>
      <Logo/>
      <TextInput/>
      <Button>
        <SearchIcon />
      </Button>
    </div>
  )
};
