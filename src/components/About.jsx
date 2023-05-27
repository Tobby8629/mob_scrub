import React from 'react'
import header from './asset/abt (1).png'
import './css/about.css'
import Footer from './Home_sub/Footer'
import Freedom from './Home_sub/Freedom'

export default function About() {

  const team = [
    {
      id: 1,
      name: "john doe",
      position: "Founder/Ceo",
      image: "abt (4).png"
    },
    {
      id: 2,
      name: "Ken ojo",
      position: "Operation manager",
      image: "abt3.png"
    },
    {
      id: 1,
      name: "Zainab Abdul",
      position: "marketing manager",
      image: "abt (2).png"
    }

  ]

  return (
    <section className='about'>
      <header>
        <h4>OUR STORY</h4>
        <h3>About Scrub & Mob</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Egestas risus ut convallis risus quis. In sem ut sem molestie eu blandit. In metus ac ut aliquet. Odio dis felis donec ullamcorper faucibus rhoncus. Nulla lacus risus in consequat. Faucibus at sed gravida varius. Placerat posuere consectetur tellus sit etiam proin mattis enim cursus. Leo fusce nunc nibh posuere nullam turpis donec faucibus. Faucibus tellus ac parturient massa nisi scelerisque cursus.</p>
        <div className='image'>
          <img src={header} alt = "banner" />
        </div>
      </header>

      <div className='team'>
          <h3>Meet the team</h3>
          {team.map((e)=>(
             <div className='each_team' key={e.id}>
                <div className="image">
                  <img src ={e.image} alt={e.position} />
                </div>
                <h3>{e.name}</h3>
                <p>{e.position}</p>
             </div>
          ))}
      </div>

      <Freedom />

      <Footer />
      
    </section>
  )
}
