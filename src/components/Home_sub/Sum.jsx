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

  const updatedis = (e, value) => {
    let parent = e.target.parentNode.parentNode
    let child = parent.querySelector('#dis');
      if(e.target.value >= value) {
       child.style.display = "block"
       child.innerText = "3% discount off"
      }
      else {
         child.style.display = "none"
      }
  }

  const Discount = (discount, value, price) => {
    let ree = value * price 
   return value < discount ? ree : ree - (ree * 0.03)
  }
  
  return (
    <>
      <h3 className='sum_h3'>Sum it up!</h3>
      <div className='sum'>
      <div className='sub housekeeping'> 
        <h4>Housekeeping</h4>
        <div className='form_flex'>
          <div>
            <label className='tt' htmlFor = "bedroom">Bedroom</label>
            <label htmlFor="bedroom" className='input'>
              <input type='number' className='no-arrow-input' id='bedroom' value={room}  onChange={(e) => {e.target.style.width = `${e.target.value.length * 10}px`; setroom(e.target.value); updatedis(e,5)}} onKeyUp={update} />Bedroom
            </label>
            <span id='dis'></span>
          </div>
          <div>
          <label className='tt' htmlFor = "living room">Living Bedroom</label>
          <label htmlFor="living room" className='input'>
            <input type='number' className='no-arrow-input' id='living room' value={palour}  onChange={(e)=>{e.target.style.width = `${e.target.value.length * 10}px`;setpalour(e.target.value); updatedis(e,3)}} onKeyUp={update} /> living room
          </label>
          <span id='dis'></span>
        </div>
        </div>
        
        <div className='form_flex'>
          <div>
            <label className='tt' htmlFor = "kitchen">Kitchen</label>
              <label htmlFor="kitchen" className='input'>
                <input type='number' className='no-arrow-input' id='kitchen' value={cloth}  onChange={(e)=>{e.target.style.width = `${e.target.value.length * 10}px`;setcloth(e.target.value); updatedis(e,3)}} onKeyUp={update} /> kitchen
              </label>
              <span id='dis'></span>
            </div>
          <div>
            <label className='tt' htmlFor = "bathroom">bathroom</label>
              <label htmlFor="bathroom" className='input'>
                <input type='number' className='no-arrow-input' id='bathroom' value={food}  onChange={(e)=>{e.target.style.width = `${e.target.value.length * 10}px`;setfood(e.target.value); updatedis(e,5)}} onKeyUp={update} /> bathroom 
              </label>
              <span id='dis'></span>
            </div>
        </div>
        
      </div>

      <div className='sub laundry'>
        <h4>laundry</h4>
         <div>
          <label htmlFor="laundry" className='input'>
            <input type='number' className='no-arrow-input' id='laundry' value={shower}  onChange={(e)=>{e.target.style.width = `${e.target.value.length * 10}px`;setshower(e.target.value); updatedis()}} onKeyUp={update} />  set
          </label>
         </div>
      </div>

      <p>Estimated price:</p>

      <p>${total}</p>
    </div>
    </>
    
  )
}

export default Sum