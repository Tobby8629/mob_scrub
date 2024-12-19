import React from 'react'
import style from '../css/Btn.module.css'

const Button = ({children}) => {
  return (
    <button className={style.button}>
      {children}
    </button>
  )
}

export default Button