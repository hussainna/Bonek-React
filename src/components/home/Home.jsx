import React from 'react'
import Header from '../common/header/Header'
import Category from './category/Category'
import Deals from './deals/Deals'
import Discount from './discount/Discount'
import Hero from './hero/Hero'
import './home.css'
import Shops from './shops/Shops'
import Top from './top/Top'
import '../../sass/main.scss'
import Baner from './baner/Baner'
import Services from './services/Services'
import Footer from '../common/footer/Footer'
function Home() {
  return (
    <div className='home'>
        <Top/>
        <Header/>
        <Hero/>
        <Deals/>
        <Category/>
        <Discount/>
        <Shops/>
        <Baner/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default Home