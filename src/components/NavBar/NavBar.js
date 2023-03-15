import React,{useEffect, useState} from 'react'
import HamBurger from '../HamBurger/HamBurger'
import Button from '@mui/material/Button';
import './NavBar.css'
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
          <h1>Real Estate</h1>
        </div>
        
        <ul className='nav-ul'>
          <li>Contact Us</li>
          <li>List With Us</li>
          <li><input className={navbar ? "btn btn-active" : "btn btn-inactive"} type="button" value="Sign Up" /></li>
          {/* <li>Categories</li> */}
        
        </ul>
     
    </nav>
    <div className={navbar ? "categoryList active" : "categoryList"}>
      <ul className="category-ul">
        <li>Real Estates</li>
        <li>Cars</li>
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