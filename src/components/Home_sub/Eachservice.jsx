import React, { Suspense } from 'react'
import svg from '../asset/svgs'
import pointer from '../asset/pointer.png'
import { service } from '../asset/Data'


function Eachservice() {
  return (
    <div className='service_wrapper mobile'>
      {service.map((each)=>(
        <div className='each_service' key={each.id}>
          <div className='bene top'>
            <div className= 'iamge'>
              <img src={pointer} alt='pointer' />
            </div>
            <h4>{each.title}</h4>
          </div>
          <p>{each.text}</p>
          <div className='each_image'>
            <Suspense fallback={<div>loading.....</div>}>
              <each.image width={"100%"} />
            </Suspense>
          </div>
          {each.benefit.map((e)=>(
              <div className='bene' key={Math.round(Math.random()*100)}> 
                <div className='imge'>
                  {svg.serviceIcon}
                </div>
                <p>{e}</p>
              </div> 
            ))}

        </div>
      ))}  
    </div>
  )
}

export default Eachservice