import './style.scss'
import React from 'react'
import Avatar from '../../../../components/avatar'

import Title from '../../../../components/title'
import Text from '../../../../components/text'
import Property from '../../../../components/property'

export default ({ ...props }) => {

  return (
    <div className="user-data">
      <Avatar />
      <Title className="user-name" type="thin"> João Vitor Scheuermann </Title>
      <Text className="user-login" type="thin"> joaoscheuermann </Text>
      <Property className="user-info" icon='organization'> joaoscheuermann </Property>
      <Property className="user-info" icon='location'> joaoscheuermann </Property>
      <Property className="user-info" icon='star'> joaoscheuermann </Property>
      <Property className="user-info" icon='repositorie'> joaoscheuermann </Property>
      <Property className="user-info" icon='followers'> joaoscheuermann </Property>
    </div>
  )
}
