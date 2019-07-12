import './style.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGithubUserData } from '../../store/git/actions';

import Logo from '../../components/logo'
import SearchBar from '../../components/search-bar'
import UserData from './components/user-data'
import UserRepositories from './components/user-repositories'

export default function SearchRoute ({ match, history }) {
  const status = useSelector(state => state.status)
  const dispatch = useDispatch()

  console.log(status)

  useEffect(() => {
    dispatch(fetchGithubUserData(match.params.username))
  }, [])

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
      <UserData />
      <UserRepositories />
    </div>
  )
}