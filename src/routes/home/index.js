import './style.scss'
import React from 'react';

import Logo from '../../components/logo'
import SearchBar from '../../components/search-bar'

export default ({ history }) => {

  const handleSearch = ({ value }) => {
    if (value.length > 0) history.push(`/${value}`)
  }

  return (
    <div className="home-route">
      <Logo/>
      <SearchBar onSearch={handleSearch}/>
    </div>
  )
};
