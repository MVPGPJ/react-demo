import React from 'react'

import { Route } from 'react-router-dom'

function MyLink({ url, children: name }) {
  return (
    <Route children={({ location, history }) => {
      return (
        <h6 onClick={
          () => {
            history.push(url)
          }
        }>
          {location.pathname === url ? '>' : ''} {name}
        </h6>
      )
    }}></Route>
  )
}

export default MyLink