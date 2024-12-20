import React from 'react'
import style from  "./css/contact.module.css"
import Freedom from './Home_sub/Freedom'
import Footer from './Home_sub/Footer'
import Faq from './Home_sub/Faq'
import { contact } from './asset/Data'
import svg from './asset/svgs'

function Contact() {
  return (
    <section className={style.contact}>
      <header>
        <h4>contact us</h4>
        <h3>We are always happy to help!</h3>
        <p>If you have any questions or would like to get in touch with us, just reach out and we'll get back to you as soon as possible.</p>
        <div className={style.circle}>
          {svg.circle}
        </div>
      </header>
      <div className={style.inverse}>
        <form>
        <div className={style.name}>
        <label htmlFor='name'>Name</label>
            <div className={style.form_input}>
              <input id='name' type='text' placeholder='First name' />
              <input id='Last' type='text' placeholder='Last name' />
            </div>
        </div>
          <div className={`${style.form_input } mobile`}>
            <label htmlFor='first'>First name</label>
            <input id='first' type='text' />
          </div>
          <div className={`${style.form_input} mobile`}>
            <label htmlFor='Last'>Last name</label>
            <input id='Last' type='text' />
          </div>
          <div className={style.form_input}>
            <label htmlFor='email'>Email address</label>
            <input id='email' type='email' />
          </div>
          <div className={style.form_input}>
            <label htmlFor='phone'>Phone number</label>
            <input id='phone' type='number' />
          </div>
          <div className={style.form_input}>
            <label htmlFor='Service'>Service</label>
            <input id='Service' type='text' />
          </div>
          <div className={style.form_input}>
            <label htmlFor='message'>Message</label>
            <textarea id='message' type='text' />
          </div>
          <div className={style.contact_submit}>
            <input type='submit' value="Send message" />
          </div>
        </form>
        <div className={style.contact_detail}>
          {contact.map((e)=>(
            <div className={style.c_det} key={e.id}>
              <div className={style.top}>
                {e.logo}
                <h4>{e.contact}</h4>
              </div>
              <p>{e.detail}</p>
            </div>
          ))}
          <div className={style.bg}>
            {svg.leftcirclehole}
          </div>
        </div>
      </div>
      <Freedom />
      <Faq />
      <Footer />
    </section>
  )
}

export default Contact