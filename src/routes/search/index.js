import './style.scss'
import React from 'react'

import Logo from '../../components/logo'
import SearchBar from '../../components/search-bar'

export default function SearchRoute ({ match }) {

  console.log(match)

  return (
    <div className="search-route">
      <Logo small/>
      <SearchBar placeholder={match.params.username}/>

      <div className="user-data">
        asdasd
      </div>

      <div className="user-repos">
        asdasd
      </div>
    </div>
  )
}