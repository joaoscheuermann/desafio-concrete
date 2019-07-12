import './style.scss'
import React from 'react'
import { useSelector } from 'react-redux'

import Avatar from '../../../../components/avatar'
import Title from '../../../../components/title'
import Text from '../../../../components/text'
import Property from '../../../../components/property'


export default () => {
  const { avatar_url, name, login, company, location, followers } = useSelector(state => state.user)
  const userTotalStarCount = useSelector(state => state.repositories.reduce((last, current) => last + current.stargazers_count, 0))
  const userTotalRespositoriesCount = useSelector(state => state.repositories.length)

  return (
    <div className="user-data">
      <Avatar src={ avatar_url }/>
      <Title className="user-name" type="thin"> { name } </Title>
      <Text className="user-login" type="thin"> { login } </Text>
      <Property className="user-info" icon='organization'> { company } </Property>
      <Property className="user-info" icon='location'> { location } </Property>
      <Property className="user-info" icon='star'> { userTotalStarCount } </Property>
      <Property className="user-info" icon='repositorie'> { userTotalRespositoriesCount } </Property>
      <Property className="user-info" icon='followers'> { followers } </Property>
    </div>
  )
}
