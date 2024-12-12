import React from 'react'
import all from '../asset/combine.png'
import '../css/services.css'
import svg from '../asset/svgs'

function ServiceTwo() {
  const service = [
    {id: 1,
   title:"Housekeeping",
   topic: "General Cleaning",
   text: " This includes dusting surfaces, vacuuming or mopping floors, cleaning windows and mirrors, wiping down furniture, and maintaining overall cleanliness of the living spaces.",
  },

  {id: 2,
   title:"Housekeeping",
   topic: "Bathroom Cleaning",
   text: " Thoroughly cleaning and disinfecting toilets, sinks, showers, bathtubs, and other bathroom fixtures. This also involves cleaning mirrors, countertops, and floors.",
  },

  {id: 3,
    title:"Housekeeping",
    topic: "Bedroom Cleaning",
    text: "Dusting furniture, making beds, changing bed linens, and tidying up the room. Vacuuming or mopping floors and cleaning windowsills are also common tasks.",
   },

   {id: 4,
    title:"Housekeeping",
    topic: "Kitchen Cleaning",
    text: " Cleaning kitchen countertops, appliances (such as stovetops, ovens, and refrigerators), sinks, and cabinets. It may also involve wiping down kitchen surfaces, cleaning the microwave, and sanitizing kitchen tools.",
   },

   {id: 5,
    title:"Laundry",
    topic: "Washing",
    text: "We follow specific care instructions, including sorting garments by color, fabric type, and washing temperature to prevent color bleeding or damage. We ensure that clothes are thoroughly cleaned, removing dirt, stains, and odors.",
   },

   {id: 6,
    title:"Laundry",
    topic: "Dry Cleaning:",
    text: " Dry cleaning involves using non-water-based solvents to clean delicate fabrics or items with specific cleaning instructions. It is particularly suitable for garments like suits, dresses, or formal wear that may be damaged or distorted by traditional washing methods.",
   },

   {id: 7,
    title:"Laundry",
    topic: "Ironing and Pressing",
    text: "Our professionals use steam irons and pressing techniques to remove wrinkles, creases, and folds from clothes, leaving them crisp and wrinkle-free.",
   },

   {id: 8,
    title:"Laundry",
    topic: "Folding and Packaging",
    text: " After clothes are washed, dried, and pressed, we typically fold them neatly and package them for easy handling and storage. We also offer garment storage solutions, such as hangers or garment bags, to keep clothes protected and organized.",
   },


]
  return (
    <div className='desktop servicetwo'>
      <div className='two_content'>
        <div className='img'>
            <img src={all} alt="service to choose us" />
        </div>
        <div className='text'>
          <div className='laundry'>
            <h4>Housekeeping</h4>
            {service.filter(e =>e.title === 'Housekeeping').map((e)=>(
              <div className="flex" key={e.id}> 
                <div className= 'imge'>
                 {svg.serviceIcon}
                </div>
                <p><span className='main'>{e.topic}</span>:{e.text}</p>
              </div>
            ))}
          </div>
          <div className='laundry'>
            <h4>laundry</h4>
            {service.filter(e =>e.title === 'Laundry').map((e)=>(
              <div className="flex" key={e.id}> 
                <div className= 'imge'>
                 {svg.serviceIcon}
                </div>
                <p><span className='main'>{e.topic}</span>:{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceTwo