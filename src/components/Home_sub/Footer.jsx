import React from 'react'
import logo from '../asset/Logo.png'
import linkedin from '../asset/linkedin.png'
import insta from '../asset/insta.png'
import mail from '../asset/mail.png'
import phone from '../asset/phone.png'
import twitter from '../asset/twitter.png'
import '../css/footer.css'
import Privacy from '../Home_sub/Privacy'

function Footer() {
  return (
    <section className='Footer'>
      <div className='top'>
        <div className='one'>
            <div className='image'>
            <img src={logo} alt='logo'/> 
            </div>
            <p>At Scrub and Mob, your hygiene and safety is our priority and we deliver with utmost care and security.</p>
            <div className='soc'>
            <img src={linkedin} alt='linkedin'/>
            <img src={insta} alt='insta'/>
            <img src={twitter} alt='twitter'/>
            </div>
        </div>
        <div className='address'>
            <h3>office address</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Felis maecenas libero ipsum egestas sagittis placerat ut.</p>
        </div>
        <div className='cont'>
            <h3>contact us</h3>
            <div className='conts'>
              <p>
                <img src={mail} alt='mail'/> 
                <span>example@gmail.com</span>
              </p>
              <p>
                <img src={phone} alt='phone'/>
                 <span>0123456789</span>
              </p>
            </div>
        </div>
        <div className='serv'>
            <h3>our services</h3>
            <div className='ser'>
              <p>Housekeeping</p>
              <p>Laundry</p>
            </div>
        </div>
        <div className='work'>
            <h3>working hours</h3>
            <div className='day'>
              <p>Mon - Fri: 8:00am - 5:00pm</p>
              <p>Sat - Sun: closed</p>
            </div>
        </div>
      </div>
     
     <div className='down'>
       <Privacy />
     </div>

    </section>
  )
}

export default Footer