import React from 'react'
import { userContext } from './context'


export default function About() {
    let user = React.useContext(userContext)

  return (
    <div>
        <h1 style={{textAlign:'center'}}>
          My About </h1>
          <p style={{textAlign:'center'}}>Hello : {user}.</p>
    </div>
  )
}
