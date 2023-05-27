import React, { useState } from 'react'

function Sum() {
  const [total, settotal] = useState(0)
  const [room, setroom] = useState(0)
  const [palour, setpalour] = useState(0)
  const [food, setfood] = useState(0)
  const [shower, setshower] = useState(0)
  const [cloth, setcloth] = useState(0)

  const update = () => {
    let bed = Discount(5,room, 30)  
    let living = Discount(3, palour, 40) 
    let bath = Discount(5,shower,20)  
    let kitchen = Discount(3,food,30 ) 
    let laundry = cloth * 1
    let tot =  kitchen + laundry + bath + living + bed  
    settotal(tot) 
  }

  const Discount = (discount, value, price) => {
    let ree = value * price 
   return value < discount ? ree : ree - (ree * 0.03)
  }
  
  return (
    <div className='sum'>
      <h3>Sum it up!</h3>
      <div className='sub housekeeping'> 
        <h4>Housekeeping</h4>
        <div>
          <label htmlFor = "bedroom">Bedroom</label>
          <label htmlFor="bedroom" className='input'>
            <input type='number' id='bedroom' value={room}  onChange={(e) => {e.target.style.width = `${e.target.value.length * 10}px`; setroom(e.target.value)}} onKeyUp={update} />Bedroom
          </label>
        </div>
        <div>
          <label htmlFor = "living room">Living Bedroom</label>
          <label htmlFor="living room" className='input'>
            <input type='number' id='living room' value={palour}  onChange={(e)=>{e.target.style.width = `${e.target.value.length * 10}px`;setpalour(e.target.value)}} onKeyUp={update} /> living room
          </label>
        </div>
         <div>
           <label htmlFor = "lkitchen">Kitchen</label>
            <label htmlFor="kitchen" className='input'>
              <input type='number' id='kitchen' value={cloth}  onChange={(e)=>{e.target.style.width = `${e.target.value.length * 10}px`;setcloth(e.target.value)}} onKeyUp={update} /> kitchen
            </label>
          </div>
         <div>
           <label htmlFor = "bathroom">bathroom</label>
            <label htmlFor="bathroom" className='input'>
              <input type='number' id='bathroom' value={food}  onChange={(e)=>{e.target.style.width = `${e.target.value.length * 10}px`;setfood(e.target.value)}} onKeyUp={update} /> bathroom 
            </label>
          </div>
      </div>

      <div className='sub laundry'>
        <h4>laundry</h4>
         <div>
          <label htmlFor = "laundry">laundry</label>
          <label htmlFor="laundry" className='input'>
            <input type='number' id='laundry' value={shower}  onChange={(e)=>{e.target.style.width = `${e.target.value.length * 10}px`;setshower(e.target.value)}} onKeyUp={update} />  set
          </label>
         </div>
      </div>

      <p>Estimated price:</p>

      <p>${total}</p>
    </div>
  )
}

export default Sum