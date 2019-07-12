import './style.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Logo from '../../components/logo'
import Title from '../../components/title'
import SearchBar from '../../components/search-bar'
import UserData from './components/user-data'
import UserRepositories from './components/user-repositories'

import { fetchGithubUserData } from '../../store/git/actions';

export default function SearchRoute ({ match, history }) {
  const status = useSelector(state => state.status)
  const dispatch = useDispatch()

  const search = () => dispatch(fetchGithubUserData(match.params.username))
  const statusRenderer = ({sucess, message}) => sucess ?
                                                  (<><UserData/> <UserRepositories/></>) :
                                                  (<Title className="message" type="purple">{ message }</Title>)

  useEffect(() => {
    search()
  }, [])

  const handleOnSearch = ({value}) => {
    if (value.length === 0) return
    history.push(`/${value}`)
    search()
  }

  const searchBarProps = {
    onSearch: handleOnSearch,
    placeholder: match.params.username
  }

  return (
    <div className="search-route">
      <Logo small/>
      <SearchBar { ...searchBarProps }/>
      { statusRenderer(status) }
    </div>
  )
}
