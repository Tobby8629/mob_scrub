import React from 'react'
import Getprice from './Get_price'
import style from '../css/discount.module.css'

function Discount() {
const plans = [
  {id:1,
  discount: "20%",
  plan:"daily service"},

  {id:2,
   discount: "15%",
   plan:"Bi-weekly service"},

   {id:3,
    discount: "10%",
    plan:"weekly service"},

    {id:4,
    discount: "5%",
    plan:"Monthly service"},
]
  return (
    <section className={style.discount}>
      <h3>Housekeeping Discounted plans</h3>
      <p>We offer subscription plans to cater to our clients' regular housekeeping needs. Each plan comes with a corresponding discount.</p>
      <div className={style.discount_wrapper}>
        {plans.map((e)=>(
        <div className={style.plans} key={e.id}>
          <h4>{e.discount}</h4>
          <p>{e.plan}</p>
        </div>
        ))}
      </div>
      <div className={style.get_price}>
        <Getprice />
      </div>
    </section>
  )
}

export default Discount