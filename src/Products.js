import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Products() {
  let navigate = useNavigate()
  return (
    <div>
        <h1 style={{textAlign:'center'}}>This my Product page</h1>
        <div style={{textAlign:'center'}}><Link to='/'>back to homepage</Link>
        <button onClick={() => navigate('/')}>Redirect</button></div>
    </div>
  )

}
