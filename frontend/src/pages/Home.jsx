import React from 'react'
import Banner from '../components/home/Banner'
import Products from '../components/home/Products'
import BestSellers from '../components/home/BestSellers'
import Newsletter from '../components/home/Newsletter'


const Home = () => {
  return (
    <div>
        <Banner/>
        <Products/>
        <BestSellers/>
        <Newsletter/>
    </div>
  )
}

export default Home