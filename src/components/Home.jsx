import React from 'react'
import style from './css/home.module.css'
import Getprice from './Home_sub/Get_price'
import Service from './Home_sub/Service'
import Reasons from './Home_sub/Reasons'
import Discount from './Home_sub/Discount'
import Faq from './Home_sub/Faq'
import Footer from './Home_sub/Footer'
import HeaderImgMobile from './asset/imageComponent/HeaderIMG_mobile'
import { ImageComponent } from './asset/imageComponent/Index'
import Comment from './Reusables/Comments'

function Home() {
  return (
    <>
      <header className={style.home}>
        <div className={style.header_text}>
        <h3><span className={style.hex}>First class</span> cleaning service for your home</h3>
        <p>Scrub and Mob is your secret weapon in the fight against grime, dirt and clutter. Our team of expert is armed with top-notch cleaning tools and techniques to ensure your home is spotless and shinning.</p>
        <div className={style.btn}>
          <Getprice />
        </div>
        <ul className={`${style.achieve} desktop`}>
          <li><span className={style.solid}>100+</span> Total Client</li>
          <li><span className={style.solid}>50+</span> employees</li>
          <li><span className={style.solid}>5+</span> years experience</li>
        </ul>
        </div>
        <div className={`${style.image} mobile`}>
          <HeaderImgMobile />  
        </div>
        <div className={`${style.image} desktop`}>
          <ImageComponent.HeaderTwo width={"100%"} height={"100%"} />
        </div>
        <ul className='mobile'>
          <li> <span className={style.solid}>100+</span> Total Client</li>
          <li> <span className={style.solid}>50+</span> employees</li>
          <li> <span className={style.solid}>5+</span> years experience</li>
        </ul>
      </header>
      <Service />
      <Reasons />
      <Discount />
      <Comment />
      <Faq />
      <Footer />
    </>
  )
}

export default Home