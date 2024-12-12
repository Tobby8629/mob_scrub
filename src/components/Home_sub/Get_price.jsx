import React from 'react'
import {Link } from "react-router-dom"
import style from "../css/getprice.module.css"
import svg from '../asset/svgs'

function Getprice() {
  return (
    <div className={style.get_price}>
      <Link to= "/price"  className={style.price}> 
        <span>Get a price</span>
        <span className={style.arrow}>{svg.Arrow}</span>
      </Link>
      <Link to= "/contact"> Contact Us </Link>
    </div>
  )
}

export default Getprice
