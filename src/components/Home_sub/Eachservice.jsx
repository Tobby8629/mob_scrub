import React from 'react'
import icon from '../asset/service-icon.png'
import pointer from '../asset/pointer.png'

function Eachservice() {
    const service = [
        {id: 1,
       title:"Housekeeping",
       text: "Lorem ipsum dolor sit amet consectetur. Posuere ut justo odio sit. Amet lacus amet viverra sapien;",
       image: "housekeeping.png",
       benefit: ["Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
           "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
           "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
           "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
           "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",],
      },
   
      {id: 2,
       title:"laundry",
       text: "Lorem ipsum dolor sit amet consectetur. Posuere ut justo odio sit. Amet lacus amet viverra sapien;",
       image: "laundry.png",
       benefit: ["Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
           "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
           "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
           "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
           "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",],
      },
   ]
  return (
    <div className='service_wrapper'>
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
            <img src={each.image} alt='service-offer' />
          </div>
          {each.benefit.map((e)=>(
              <div className='bene'> 
                <div className='image'>
                  <img src={icon} alt='each'/>
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