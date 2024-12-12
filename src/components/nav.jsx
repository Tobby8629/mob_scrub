import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Privacy from './Home_sub/Privacy'
import Getprice from './Home_sub/Get_price'
import svg from './asset/svgs'

function Nav() {
    const [menu, setmenu] = useState(false)
  return (
    <nav>
      <div className='logo'>
        {svg.logo}
      </div>
      <div className="menu">
        <div className='bars' onClick={()=> setmenu(!menu)}>
            {menu? svg.cancel : svg.bars}
        </div>
        <div className = {menu ? "show" : "hide"} onClick={()=> setmenu(false)}>
          <ul>
            <li><Link to = "/">Home </Link></li>
            <li><Link to = "/price">price</Link> </li>
            <li><Link to = "/about">about us</Link> </li>
            <li><Link to = "/contact">contact us</Link> </li>
            <li className='mobile flex'>
               {svg.phone}
              <p>Call 0123456789</p>
            </li>
          </ul>
          <div className='mobile'>
            <Getprice />
            <Privacy />  
          </div>
        </div>
      </div>
      <div className='lex'>
        {svg.phone}
        <p>Call 0123456789</p>
      </div>
    </nav>
  )
}

export default Nav
