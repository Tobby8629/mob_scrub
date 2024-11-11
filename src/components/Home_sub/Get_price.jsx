import React from 'react'
import {Link } from "react-router-dom"
import "../css/getprice.css"

function Getprice() {
  return (
    <div className='get_price'>
      <Link to= "/price"> Get a price </Link>
      <Link to= "/contact"> Contact Us </Link>
    </div>
  )
}

export default Getprice
