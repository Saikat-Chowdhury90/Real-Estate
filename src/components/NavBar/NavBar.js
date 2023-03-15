import React from 'react'
import HamBurger from '../HamBurger/HamBurger'
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className='navbar'>
       
        <div className="hamburger-menu">
          <HamBurger/>
        </div>
        
        <div className="logo">
          <h1>Real Estate</h1>
        </div>
        <div className="search-bar">
          <SearchBar/>
        </div>
        <ul className='nav-ul'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Signup</li>
          <li>Categories</li>
        
        </ul>
     
    </nav>
  )
}

export default NavBar