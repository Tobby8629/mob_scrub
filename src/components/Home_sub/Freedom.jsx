import React from 'react'
import style from "../css/freedom.module.css"
import Getprice from './Get_price'

function Freedom() {
  return (
    <section className={style.freedom}>
      <div className={style.freedom_content}>
      <h3>Give yourself the gift of freedom from doing chores at home</h3>
      <p>We have hundreds of professional house cleaning customers in neighborhoods across the state. Our customers love us because we provide a top-notch service and all at an affordable price.</p>
      <div className={style.btn}>
        <Getprice />
      </div>
      </div>
    </section>
  )
}

export default Freedom