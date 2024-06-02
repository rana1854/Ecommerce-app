import React from 'react'
import Banner from '../components/Home/Banner'
import Category from '../components/Home/Category'
import Products from '../components/Home/Products'
import Collections from '../components/Home/Collections'
import BestSellers from '../components/Home/BestSellers'
import Newsletter from '../components/Home/Newsletter'


const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Collections />
      <BestSellers />
      <Newsletter />
    </div>
  )
}

export default Home