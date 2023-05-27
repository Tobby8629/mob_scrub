import React from 'react'
import top from '../asset/top.png'
import broom from '../asset/broom.png'
import '../css/pricelist.css'

function Pricelist() {
  return (
    <div className='pricelist'>
      <div className='price_table'>
         <div className="ici">
            <span className='icon'>
              <img src={broom} alt='broom'/>
            </span>
            <h3>housekeeping</h3>
         </div>
         <table>
          <thead>
            <tr>
               <th>  </th>
               <th>living room</th>
               <th>Bedroom</th> 
               <th>kitchen</th> 
               <th>Bathroom</th> 
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>price</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>20</td>   
            </tr>
            <tr>
              <td>Discount</td>
              <td>more than 3 living rooms</td>
              <td>more than 5 bedrooms</td>
              <td>more than 3 kitchens</td>
              <td>more than 5 bathrooms</td>   
            </tr>
          </tbody>            
         </table>
         <div className="ici">
            <span className='icon'>
              <img src={top} alt='top'/>
            </span>
            <h4>Laundry (wash and press)</h4>
         </div>
         <p>A set costs $1</p>
         <div className='lis'>
          <p>A set includes;</p>
          <p>A shirt & a trouser</p>
          <p>A skirt and a blouse</p>
          <p>A gown</p>
         </div>
      </div>
    </div>
  )
}

export default Pricelist