import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Products/>
        <Footer/>
    </>
  )
}

export default Home