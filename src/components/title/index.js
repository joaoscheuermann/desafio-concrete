import './style.scss'
import React from 'react'

import Text from '../text'

export default ({ type, children, ...props }) => <Text type={`title ${type || ''}`} {...props}> { children } </Text>
