import React, { useState } from 'react'
import '../css/faq.css' 

function Faq() {

 const faq = [
    {
     id: 1,
     open: false,
     question: "How do you train your cleaning staff ?",
     answer:"Lorem ipsum dolor sit amet. Aut deleniti ducimus qui possimus internos et officiis harum eos repellendus vero. Vel dolorum numquam et architecto aspernatur in maxime sequi ex.",
     },
     {
      id: 2,
      open: false,
      question: "How do you ensure quality control ?",
      answer:"Lorem ipsum dolor sit amet. Aut deleniti ducimus qui possimus internos et officiis harum eos repellendus vero. Vel dolorum numquam et architecto aspernatur in maxime sequi ex. ",
    },
    {
      id: 3,
      open: false,
      question: "How do you handle customer complaints ?",
      answer:"Lorem ipsum dolor sit amet. Aut deleniti ducimus qui possimus internos et officiis harum eos repellendus vero. Vel dolorum numquam et architecto aspernatur in maxime sequi ex. ",
    },
    {
      id: 4,
      open: false,
      question: "How do you handle customer complaints ?",
      answer:"Lorem ipsum dolor sit amet. Aut deleniti ducimus qui possimus internos et officiis harum eos repellendus vero. Vel dolorum numquam et architecto aspernatur in maxime sequi ex.",
    },

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