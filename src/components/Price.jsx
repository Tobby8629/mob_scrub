import React from 'react'
import { Link } from 'react-router-dom'
import './css/price.css'
import price from './asset/price.png'
import Discount from './Home_sub/Discount'
import Footer from './Home_sub/Footer'
import Pricelist from './Home_sub/Pricelist'
import Sum from './Home_sub/Sum'

function Price() {
  return (
    <section className='price'>
      <header>
        <h4>pricing</h4>
        <h3>Get our services at an <span className='hex'>affordable price</span> </h3>
        <p>Scrub and Mob is your secret weapon in the fight against grime, dirt and clutter. Our team of expert is armed with top-notch cleaning tools and techniques to ensure your home is spotless and shinning.</p>
        <button><Link to="/contact">Contact us</Link></button>
        <div className='image'>
          <img src={price} alt='priceimage' />
        </div>
      </header>
      <Pricelist />
      <Sum />
      <Discount />
      <Footer />
    </section>
  )
}

export default Price