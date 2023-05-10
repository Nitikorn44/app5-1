import React from 'react'
import { userContext } from './context'

export default function Contact() {
    let user = React.useContext(userContext)

  return (
    <div>
        <h1 style={{textAlign:'center'}}>
          My Contact : 095-8495196 </h1>
          <p style={{textAlign:'center'}}>Hello : {user}.</p>

    </div>
  )
}
