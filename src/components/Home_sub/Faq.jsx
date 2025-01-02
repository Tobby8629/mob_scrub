import React, { useState } from 'react'
import '../css/faq.css' 

function Faq() {

 const faq = [
    {
     id: 1,
     open: false,
     question: "How do you train your cleaning staff ?",
     answer:`
       We train our cleaning staff through a combination of hands-on experience and detailed instruction, 
       emphasizing attention to detail, safety protocols, and effective cleaning techniques. 
       Regular training updates ensure they stay informed about industry 
       standards and deliver consistent, high-quality service.
     `},
     {
      id: 2,
      open: false,
      question: "How do you ensure quality control ?",
      answer:`
        We ensure quality control through regular inspections, feedback from clients, and performance evaluations.
         Our supervisors conduct routine checks to maintain high standards, 
        while ongoing training and clear communication help address any issues promptly, ensuring consistent service excellence.
      `,
    },
    {
      id: 3,
      open: false,
      question: "How do you handle customer complaints ?",
      answer: `
        We handle customer complaints by listening attentively, empathizing with their concerns, 
        and taking prompt action to resolve the issue. Our team investigates the situation, 
        provides solutions, and ensures that necessary improvements are made to prevent future occurrences, prioritizing customer satisfaction.
      `,
    },
    {
      id: 4,
      open: false,
      question: "How do you handle customer complaints ?",
      answer: `
      We handle customer complaints by listening attentively, empathizing with their concerns, 
      and taking prompt action to resolve the issue. Our team investigates the situation, 
      provides solutions, and ensures that necessary improvements are made to prevent future occurrences, prioritizing customer satisfaction.
    `,
    }

 ]

 const [tray, settray] = useState(faq)

 const opentray = (id) => {
   settray ((prev)=> (
    prev.map((e)=> {
      if (e.id === id) {
        return {...e, open: !e.open};
      }
    return e;
    })
   ))
 }

  return (
   <section className='faq'>
    <h3>Frequently asked questions</h3>
    <div className='faq_wrapper'>
      {tray.map((e,index)=>(
        <label className='faq_wrap' key={e.id} >
          <input type='checkbox' checked={e.open} onChange={()=>opentray(e.id)}/>
          <div className='faq_top'>
            <h4>{e.question}</h4> 
            { e.open ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i> }
          </div>
          {e.open ? <p>{e.answer}</p> : null}
        </label>
      ))}
    </div>
   </section>
  )
}

export default Faq