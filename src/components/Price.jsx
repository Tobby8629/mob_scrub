import React from 'react'
import { Link } from 'react-router-dom'
import style from './css/price.module.css'
import Discount from './Home_sub/Discount'
import Footer from './Home_sub/Footer'
import Pricelist from './Home_sub/Pricelist'
import Sum from './Home_sub/Sum'
import Header from './Reusables/Header/Header'
import { homeHeaderText } from './asset/Data'
import Button from './Reusables/Button'
import { PNG } from './asset/pngs'
import { HeaderT } from './Home_sub/Achievement'

function Price() {
  return (
    <section className={style.price}>
      <Header 
        page={"PRICING"}
        headerTitle={<HeaderT />}
        headerText={homeHeaderText}
        btn={
        <Button>
          <Link to="/contact">Contact us</Link>
        </Button>
        }
        desktopImage={
          <img src={PNG.price} alt='Our prices' width={"100%"} height={"100%"} />
        }
        customizeDesk={style.image}
      />
      <Pricelist />
      <Sum />
      <Discount />
      <Footer />
    </section>
  )
}

export default Price