import './style.scss'
import React from 'react'
import { useSelector } from 'react-redux'

import Title from '../../../../components/title'
import Text from '../../../../components/text'
import Property from '../../../../components/property'

const Repositorie = ({name, html_url, description, stargazers_count}) => (
  <div className="repositorie">
    <Title tag="a" href={html_url} target="_blank" type="purple"> { name } </Title>
    <Text> { description } </Text>
    <Property icon="star"> { stargazers_count } </Property>
  </div>
)

export default () => {
  const repositories = useSelector(state => state.repositories)

  return (
    <div className="user-repositories">
      { repositories.map(repositorie => <Repositorie { ...repositorie } key={ repositorie.id }/>) }
    </div>
  )
}
