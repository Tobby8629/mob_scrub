import React from 'react'
import '../css/pricelist.css'
import svg from '../asset/svgs'

function Pricelist() {
  return (
    <div className='pricelist'>
     <h3>Price list</h3>
    <div className="ici">
            <span className='icon'>
              {svg.broom}
            </span>
            <h4>housekeeping</h4>
    </div>
      <div className='price_table'>
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
              <td className='dollar'>price($)</td>
              <td className='solid'>30</td>
              <td className='solid'>40</td>
              <td className='solid'>30</td>
              <td className='solid'>20</td>   
            </tr>
            <tr>
              <td className='dollar'>3% Discount</td>
              <td className='dollar'>more than 3 living rooms</td>
              <td className='dollar'>more than 5 bedrooms</td>
              <td className='dollar'>more than 3 kitchens</td>
              <td className='dollar'>more than 5 bathrooms</td>   
            </tr>
          </tbody>            
         </table>
      </div>
      <div className="ici">
        <span className='icon'>
          {svg.top}
        </span>
        <h4>Laundry (wash and press)</h4>
      </div>
      <p className="ee">A set costs $1</p>
      <div className='lis'>
        <p>A set includes;</p>
        <p>A shirt & a trouser <span className='price_desktop'>/</span></p>
        <p>A skirt and a blouse <span className='price_desktop'>/</span></p>
        <p>A gown</p>
      </div>
    </div>
  )
}

export default Pricelist