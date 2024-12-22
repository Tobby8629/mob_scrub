import React, { useRef, useState } from 'react'
import style from "../css/pricelist.module.css"
import { updateDiscount, updateTotal } from '../Reusables/funcs'
import { services } from '../asset/Data'


function Sum() {

  const [service, setservice] = useState(
    {
      bedroom: null, 
      livingroom: null,
      kitchen: null, 
      bathroom: null,
      laundry: null,

    }
  )

  const [total, settotal] = useState(0)
  
  const discount = useRef([])

  const handleChange = (e) => {
    const {name, value, style, dataset} = e.target
    let valLength = e.target.value.length
    style.width= valLength > 0 ? `${valLength * 10}px `: 10
    setservice({...service, [name]: value})
    updateDiscount(value, dataset, name, discount)
  }

  return (
    <>
      <h3 className={style.sum_h3}>Sum it up!</h3>
      <div className={style.sum}>
      <div className={`${style.sub} ${style.housekeeping}`}> 
        <h4>Housekeeping</h4>
        <div className={style.form_flex}>
          {services.map((each,index)=>(
            <div className={style.each} key={each.name}>
              <label className={style.tt} htmlFor = {each.name}>{each.placeholder}</label>
              <label htmlFor={each.name} className={style.input}>
                <input type='number' 
                className={style.no_arrow_input} 
                id={each.name} 
                name={each.name}
                value={service[each.name]} 
                onChange={handleChange}
                onKeyUp={()=>updateTotal(service, settotal)}
                data-index={index}
                />
                <span>{each.placeholder}</span>
              </label>
              <span 
                id='dis'
                ref={(el) => (discount.current[index] = el)}
              >
              </span>
           </div>
          ))}
        </div>
      </div>

      <div className={`${style.sub} ${style.laundry}`}>
        <h4>laundry</h4>
         <div>
          <label htmlFor="laundry" className={style.input}>
            <input type='number' 
            name='laundry'
            className={style.no_arrow_input} 
            id='laundry' value={service.laundry}  
            onChange={handleChange} 
            onKeyUp={()=>updateTotal(service, settotal)} 
            />  
            set
          </label>
         </div>
      </div>

      <p>Estimated price:</p>

      <p className={style.total}>${total}</p>
    </div>
    </>
    
  )
}

export default Sum

