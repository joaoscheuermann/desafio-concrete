import React from 'react'

export default ({ match }) => {

  return (
    <div> { match.params.username } </div>
  )
}