import React from 'react'
import Eachservice from './Eachservice'
import ServiceTwo from './ServiceTwo'
import style from '../css/services.module.css'

function Service() {
  return (
    <section className={style.service}>
      <h3>our services</h3>
      <p className={style.top}>At Scrub & Mob, we aim at maintaining cleanliness, organization, and tidiness in residential or spaces. The services offered by us is based on client preferences.</p>
      <Eachservice />
      <ServiceTwo />
    </section>
  )
}

export default Service