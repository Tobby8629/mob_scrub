import React from 'react'
import style from './css/about.module.css'
import Footer from './Home_sub/Footer'
import Freedom from './Home_sub/Freedom'
import Header from './Reusables/Header/Header'
import { aboutHeaderText } from './asset/Data'
import { ImageComponent } from './asset/imageComponent/Index'
import svg from './asset/svgs'
import UseResize from './Reusables/UseResize'

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

  const {desktop,large} = UseResize()

  return (
    <section className={style.about}>
      <Header 
       page={"OUR STORY"}
       headerTitle={"About Scrub & Mob"}
       headerText={aboutHeaderText}
       customizeDesk={style.image}
       style={{position: "relative",}}
       mobileImage={<ImageComponent.AboutMobile  width={"100%"} height={"100%"}/>}
       desktopImage={<ImageComponent.AboutDesktop width={"100%"} height={"100%"}/>}
      >
        <div className={style.eclipse}>
          {desktop || large ? svg.eclipseDesktop : svg.eclipseMobile}
        </div>
      </Header>
      <div className={style.teamWrapper}>
        <h3 className={style.sum_h3}>Meet the team</h3>
        <div className={style.team}>
          {team.map((e)=>(
             <div className={style.each_team} key={e.id}>
                <div className={style.image}>
                  <img src ={e.image} alt={e.position} />
                </div>
                <h3>{e.name}</h3>
                <p>{e.position}</p>
             </div>
          ))}
        </div>
      </div>
      <Freedom />
      <Footer />
    </section>
  )
}
