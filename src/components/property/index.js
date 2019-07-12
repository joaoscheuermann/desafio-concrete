import './style.scss'
import React from 'react'

import Text from '../text'

export default ({ type, icon, children, ...props }) => <Text type={`property thin ${type || ''}${icon + '-icon' || ''}`} {...props}> { children } </Text>
