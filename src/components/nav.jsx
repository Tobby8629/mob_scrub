import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cancel from "./asset/bars.png"
import bars from "./asset/cancel.png"
import logo from "./asset/Logo.png"
import Privacy from './Home_sub/Privacy'
import Getprice from './Home_sub/Get_price'
import call from './asset/phone.png'

function Nav() {
    const [menu, setmenu] = useState(false)
  return (
    <nav>
      <div className='logo'>
        <img src={logo}  alt="logo"/>
      </div>
      <div className="menu">
        <div className='bars' onClick={()=> setmenu(!menu)}>
            {menu? <img src = {cancel} alt="menubar" /> : <img src = {bars} alt="menubar" />}
        </div>
        <div className = {menu ? "show" : "hide"} onClick={()=> setmenu(false)}>
          <ul>
            <li><Link to = "/">Home </Link></li>
            <li><Link to = "/price">price</Link> </li>
            <li><Link to = "/about">about us</Link> </li>
            <li><Link to = "/contact">contact us</Link> </li>
            <li className='mobile flex'>
              <img src={call} alt='call'/>
              <p>Call 0123456789</p>
            </li>
          </ul>
          <Getprice />
          <Privacy />
        </div>
      </div>
      <div className='lex'>
        <img src={call} alt='call'/>
        <p>Call 0123456789</p>
      </div>
    </nav>
  )
}

export default Nav
