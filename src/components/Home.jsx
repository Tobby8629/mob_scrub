import React from 'react'
import './css/home.css'
import Getprice from './Home_sub/Get_price'
import woman from './asset/bucket_woman.png'
import Service from './Home_sub/Service'
import Reasons from './Home_sub/Reasons'
import Discount from './Home_sub/Discount'
import Faq from './Home_sub/Faq'
import Footer from './Home_sub/Footer'

function Home() {
  return (
    <>
      <header className='home'>
        <h3><span className='hex'>First class</span> cleaning service for your home</h3>
        <p>Scrub and Mob is your secret weapon in the fight against grime, dirt and clutter. Our team of expert is armed with top-notch cleaning tools and techniques to ensure your home is spotless and shinning.</p>
        <Getprice />
        <div className='image'>
          <img src={woman} alt = "woman" />  
        </div>
        <ul>
          <li> <span className='solid'>100+</span> Total Client</li>
          <li> <span className='solid'>50+</span> employees</li>
          <li> <span className='solid'>5+</span> years experience</li>
        </ul>
      </header>
      <Service />
      <Reasons />
      <Discount />
      <Faq />
      <Footer />
    </>
  )
}

export default Home