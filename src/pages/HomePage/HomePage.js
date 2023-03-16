import React from 'react'
import Carousels from '../../components/Carousel/Carousels'
import FeaturedCategoriesComponent from '../../components/FeaturedCategories/FeaturedCategories'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import NewTrending from '../../components/NewTrending/NewTrending'

const HomePage = () => {
  return (
    <div className='HomePage'>
      
        <NavBar/>
        <Carousels/>
        <FeaturedCategoriesComponent/>
        <NewTrending/>
        <Footer/>
    </div>
  )
}

export default HomePage