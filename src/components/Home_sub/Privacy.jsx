import React from 'react'
import style from '../css/footer.module.css'

function Privacy() {
  return (
    <div className={`${style.privacy}`}>
      <div className={style.pri}>
        <p>privacy policy</p>
        <p>Terms and condition</p>
      </div>
        <p>© 2023 Scrub and Mob - All rights reserved</p>
    </div>
  )
}

export default Privacy