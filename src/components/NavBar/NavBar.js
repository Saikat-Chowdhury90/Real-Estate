import React,{useEffect, useState} from 'react'
import HamBurger from '../HamBurger/HamBurger'
import './NavBar.css' 
import { Link } from 'react-router-dom'
const NavBar = () => {
 
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <header>
      
    <nav  className={navbar ? "navbar active" : "navbar"}>
       
        <div className="hamburger-menu">
          <HamBurger/>
        </div>
        
        <div className="logo">
          <h1><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Archon Estate</Link></h1>
        </div>
        
        <ul className='nav-ul'>
          <li><input className={navbar ? "search search-active" : "search"} type="search" name="search" id="search"  placeholder='Search'/></li>
          <li>Contact Us</li>
          <li>List With Us</li>
          <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}><li><input className={navbar ? "btn btn-active" : "btn btn-inactive"} type="button" value="Sign Up" /></li></Link>
        
        
        </ul>
     
    </nav>
    <div className={navbar ? "categoryList active" : "categoryList"}>
      <ul className="category-ul">
        <li><Link to="/real" style={{ color: 'inherit', textDecoration: 'inherit'}}>Real Estates</Link></li>
        <li><Link to="/product" style={{ color: 'inherit', textDecoration: 'inherit'}}>Cars</Link></li>
        <li>Watches</li>
        <li>Yatchs</li>
        <li>Jets</li>
        <li>Motorcycles</li>
        <li>Helicopters</li>
        <li>Jewelery</li>
        <li>Collectibles</li>
        <li>Rentals</li>
        <li>Journal</li>
      </ul>
    </div>
    </header>
  )
}

export default NavBar