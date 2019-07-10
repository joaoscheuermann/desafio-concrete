import './style.scss'
import React, { useEffect } from 'react'

import Logo from '../../components/logo'
import SearchBar from '../../components/search-bar'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGithubUserData } from '../../store/git/actions';

export default function SearchRoute ({ match, history }) {
  const dispatch = useDispatch()
  const git = useSelector(state => state.git)

  useEffect(() => {
    dispatch(fetchGithubUserData(match.params.username))
  }, [])

  const handleOnSearch = ({value}) => {
    if (value.length > 0) {
      history.push(`/${value}`)
      dispatch(fetchGithubUserData(match.params.username))
    }
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
        { git.message }
      </div>

      <div className="user-repos">
        asdasd
      </div>
    </div>
  )
}