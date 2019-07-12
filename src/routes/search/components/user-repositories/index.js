import './style.scss'
import React from 'react'

import Title from '../../../../components/title'
import Text from '../../../../components/text'
import Property from '../../../../components/property'

const Repositorie = ({ repositorie }) => (
  <div className="repositorie">
    <Title tag="a" href="repositorie.url" target="_blank" type="purple"> Repositorie.title </Title>
    <Text> asdasdassda </Text>
    <Property icon="star">4000</Property>
  </div>
)

export default ({ ...props }) => {

  return (
    <div className="user-repositories">
      <Repositorie />
    </div>
  )
}
