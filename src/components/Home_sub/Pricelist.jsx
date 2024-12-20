import React from 'react'
import style from '../css/pricelist.module.css'
import svg from '../asset/svgs'

function Pricelist() {
  return (
    <div className={style.pricelist}>
     <h3>Price list</h3>
    <div className={style.ici}>
        <span className={style.icon}>
          {svg.broom}
        </span>
        <h4>housekeeping</h4>
    </div>
      <div className={style.price_table}>
         <table>
          <thead>
            <tr>
               <th>  </th>
               <th>Living room</th>
               <th>Bedroom</th> 
               <th>kitchen</th> 
               <th>Bathroom</th> 
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={style.dollar}>price($)</td>
              <td className={style.solid}>30</td>
              <td className={style.solid}>40</td>
              <td className={style.solid}>30</td>
              <td className={style.solid}>20</td>   
            </tr>
            <tr>
              <td className={style.dollar}>3% Discount</td>
              <td className={style.dollar}>more than 3 living rooms</td>
              <td className={style.dollar}>more than 5 bedrooms</td>
              <td className={style.dollar}>more than 3 kitchens</td>
              <td className={style.dollar}>more than 5 bathrooms</td>   
            </tr>
          </tbody>            
         </table>
      </div>
      <div className={style.ici}>
        <span className={style.icon}>
          {svg.top}
        </span>
        <h4>Laundry <span className={style.small}>(wash and press)</span></h4>
      </div>
      <p className={style.ee}>A set costs <span className={style.solid}>$1</span></p>
      <div className={style.lis}>
        <p>A set includes;</p>
        <p>A shirt & a trouser <span className={style.price_desktop}>/</span></p>
        <p>A skirt and a blouse <span className={style.price_desktop}>/</span></p>
        <p>A gown</p>
      </div>
    </div>
  )
}

export default Pricelist