import React from 'react'
import Banner from '../components/home/Banner'
import Products from '../components/home/Products'
import BestSellers from '../components/home/BestSellers'
import Newsletter from '../components/home/Newsletter'
import Category from '../components/home/Category'
import Collection from "../components/home/Collection"
import Singleproduct from "../components/home/Singleproduct"



const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <BestSellers />
      <Newsletter />
      <Category />
      <Collection />
      <Singleproduct />

    </div>
  )
}

export default Home