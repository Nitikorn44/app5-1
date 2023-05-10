import React from 'react'
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './Nav_Link.css'
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import Error from './error'
import { userContext } from './context'

export default function Route1() {
    let activeClassname = "active_menu"
    let inActiveClassname = "menu"
    let user = React.useContext(userContext)

  return (
    <BrowserRouter>
        <nav className='nav'>
                <NavLink to="/" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> HOME </NavLink> - &nbsp;
                <NavLink to="/About" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> About </NavLink> - &nbsp;
                <NavLink to="/products" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> Product </NavLink> - &nbsp;
                <NavLink to="/Contact" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> Contact </NavLink> - &nbsp;  
                <NavLink to="/Dashboard" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> Dashboard </NavLink> - &nbsp;
                
                
                [{user}]
        </nav>
        <div style={{margin: '20px'}}>
          <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/About' element ={<About/>}/>
            <Route path='/products' element ={<Products/>}/>
            <Route path='/Contact' element ={<Contact/>}/>
            <Route path='/Dashboard' element ={<Navigate to='/'/>}/>

            <Route path='*' element ={<Error/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  )
}
