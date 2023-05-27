import React from 'react'
import "./css/contact.css"
import Freedom from './Home_sub/Freedom'
import Footer from './Home_sub/Footer'
import Faq from './Home_sub/Faq'

function Contact() {
  const contact = [
   {
    id: 1,
    contact: "Office address",
    logo: 'office.png',
    detail: "Lorem ipsum dolor sit amet consectetur. Felis maecenas libero ipsum egestas sagittis placerat ut."
   },
   {
    id: 2,
    contact: "Phone number",
    logo: 'phone.png',
    detail: +1234567890
   },

   {
    id: 3,
    contact: "Email",
    logo: "mail.png",
    detail: "scrub&mob@gmail.com"
   },
   
   
   {
    id: 4,
    contact: "Instagram",
    logo: 'insta.png',
    detail: "@scrub&mob",
   },

   {
    id: 5,
    contact: "Twitter",
    logo: "twitter.png",
    detail: "@scrub&mob"
   },

   {
    id: 6,
    contact: "LinkedIn",
    logo: "linkedin.png",
    detail: "@scrub&mob"
   },

  ]
  return (
    <section className='contact'>
      <header>
        <h4>contact us</h4>
        <h3>We are always happy to help!</h3>
        <p>If you have any questions or would like to get in touch with us, just reach out and we'll get back to you as soon as possible.</p>
      </header>
      <form>
        <div className='form_input'>
          <label htmlFor='first'>First name</label>
          <input id='first' type='text' />
        </div>
        <div className='form_input'>
          <label htmlFor='Last'>Last name</label>
          <input id='Last' type='text' />
        </div>
        <div className='form_input'>
          <label htmlFor='email'>Email address</label>
          <input id='email' type='email' />
        </div>
        <div className='form_input'>
          <label htmlFor='phone'>Phone number</label>
          <input id='phone' type='number' />
        </div>
        <div className='form_input'>
          <label htmlFor='Service'>Service</label>
          <input id='Service' type='text' />
        </div>
        <div className='form_input'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' type='text' />
        </div>
        <div className='contact_submit'>
          <input type='submit' value="Send message" />
        </div>
      </form>
      <div className='contact_detail'>
        {contact.map((e)=>(
          <div className='c_det' key={e.id}>
            <div className='top'>
              <img src={e.logo} alt={e.contact} />
              <h4>{e.contact}</h4>
            </div>
            <p>{e.detail}</p>
          </div>
        ))}
      </div>
      <Freedom />
      <Faq />
      <Footer />
    </section>
  )
}

export default Contact