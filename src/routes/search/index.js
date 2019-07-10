import './style.scss'
import React, { useEffect } from 'react'

import Logo from '../../components/logo'
import SearchBar from '../../components/search-bar'
import { useDispatch } from 'react-redux'
import { fetchGithubUserData } from '../../store/git/actions';

export default function SearchRoute ({ match, history }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGithubUserData(match.params.username))
  })

  const handleOnSearch = ({value}) => {
    if (value.length > 0) history.push(`/${value}`)
  }

  const searchBarProps = {
    onSearch: handleOnSearch,
    placeholder: match.params.username
  }

  return (
    <div className="search-route">
      <Logo small/>
      <SearchBar { ...searchBarProps }/>

      <div className="user-data">
      </div>

      <div className="user-repos">
        asdasd
      </div>
    </div>
  )
}