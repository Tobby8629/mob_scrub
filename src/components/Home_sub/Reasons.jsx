import React, { Suspense } from 'react'
import '../css/reasons.css'
import { ImageComponent } from '../asset/imageComponent/Index'
function Reasons() {
 const reasons = [
    {
      id:1,
      title: "transparent pricing",
      text: `We prioritize clear, straightforward pricing to build 
      trust and eliminate hidden fees. Our detailed cost breakdown ensures transparency, 
      empowering you to make informed decisions confidently while 
      staying within budget. Your trust is our commitment.`
  },
  {
    id:2,
    title: "Highly trained employees",
    text: `
    Our skilled professionals combine expertise, dedication, 
    and excellence in every task. With ongoing training, they meet industry standards, 
    delivering top-quality solutions and ensuring your success remains our priority through exceptional results.
    ` },
  {
    id:3,
    title: "we bring our own supplies",
    text: `
  We bring our own supplies to ensure readiness and self-reliance, 
  empowering us to handle any situation. 
  This proactive approach fosters adaptability, resilience, and confidence in achieving goals seamlessly and independently.
      `  
  },
  {
    id:4,
    title: "100% safe & secure",
    text: `
      Experience peace of mind with our reliable solutions. 
      Designed to protect and support you, we prioritize safety 
      and ensure a seamless, trustworthy experience every step of the way
    ` 
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