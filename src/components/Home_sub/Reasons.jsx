import React, { Suspense } from 'react'
import '../css/reasons.css'
import { ImageComponent } from '../asset/imageComponent/Index'
function Reasons() {
 const reasons = [
    {
      id:1,
      title: "transparent pricing",
      text: "Lorem ipsum dolor sit amet consectetur. Nisl tellus nullam lacus nec aliquam cras in. Proin viverra fermentum urna urna quis tincidunt. Ut odio quam vel vel tincidunt." 
  },
  {
    id:2,
    title: "Highly trained employees",
    text: "Lorem ipsum dolor sit amet consectetur. Nisl tellus nullam lacus nec aliquam cras in. Proin viverra fermentum urna urna quis tincidunt. Ut odio quam vel vel tincidunt." 
  },
  {
    id:3,
    title: "we bring our own supplies",
    text: "Lorem ipsum dolor sit amet consectetur. Nisl tellus nullam lacus nec aliquam cras in. Proin viverra fermentum urna urna quis tincidunt. Ut odio quam vel vel tincidunt." 
  },
  {
    id:4,
    title: "100% safe & secure",
    text: "Lorem ipsum dolor sit amet consectetur. Nisl tellus nullam lacus nec aliquam cras in. Proin viverra fermentum urna urna quis tincidunt. Ut odio quam vel vel tincidunt." 
  }
 ]    
  return (
    <section className='reason'>
      <h3>4 reasons to choose us, today</h3>
      <p className='top'>Here are some reasons you should choose Scrub and Mob for getting your space cleaned:</p>
      <div className='reason_wrapper'>
        <div className='eeach'>
          {reasons.map((e)=>(
            <div className='each_reason' key={e.id}>
                <h4>{e.title}</h4>
                <p>{e.text}</p>
            </div>
          ))}
        </div>
       
        <div className='reason_image'>
          <Suspense fallback={<div>loading...</div>}>
            <ImageComponent.Engr width={"100%"} height={"100%"}/>
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default Reasons