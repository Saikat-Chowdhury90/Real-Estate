import React from 'react'
import Carousels from '../Carousel/Carousels'
import NavBar from '../NavBar/NavBar'
import './RealEstate.css'
const RealEstate = () => {
  return (
    <div className='real-estate-container'> 
        <NavBar/>
        <Carousels/>
    </div>
  )
}

export default RealEstate