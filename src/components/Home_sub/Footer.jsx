import React from 'react'
import style from '../css/footer.module.css'
import Privacy from '../Home_sub/Privacy'
import svg from '../asset/svgs'

function Footer() {
  return (
    <section className={style.Footer}>
      <div className={style.top}>
        <div className={style.one}>
            <div className={style.image}>
            {svg.logo}
            </div>
            <p>At Scrub and Mob, your hygiene and safety is our priority and we deliver with utmost care and security.</p>
            <div className={style.soc}>
              <span>{svg.linkedin}</span>
              <span>{svg.insta}</span>
              <span>{svg.twitter}</span>
            </div>
        </div>
        <div className={`${style.address} ${style.chi}`}>
            <h3>office address</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Felis maecenas libero ipsum egestas sagittis placerat ut.</p>
        </div>
        <div className={`${style.cont} ${style.chi}`}>
            <h3>contact us</h3>
            <div className={style.conts}>
              <p>
                {svg.mail}
                <span>example@gmail.com</span>
              </p>
              <p>
                 {svg.footer_phone}
                 <span>0123456789</span>
              </p>
            </div>
        </div>
        <div className={`${style.serv} ${style.chi}`}>
            <h3>our services</h3>
            <div className={style.ser}>
              <p>Housekeeping</p>
              <p>Laundry</p>
            </div>
        </div>
        <div className={`${style.work} ${style.chi}`}>
            <h3>working hours</h3>
            <div className={style.day}>
              <p>Mon - Fri: 8:00am - 5:00pm</p>
              <p>Sat - Sun: closed</p>
            </div>
        </div>
      </div>
     
     <div className={style.down}>
       <Privacy />
     </div>

    </section>
  )
}

export default Footer