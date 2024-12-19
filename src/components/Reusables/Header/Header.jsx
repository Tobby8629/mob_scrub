import React, { Children } from 'react'
import header from './Header.module.css'

const Header = ({children, page, headerTitle, headerText, style, mobileImage, btn, desktopImage, mobileAchievement, desktopAchievement,customizeDesk }) => {
  return (
    <div className={header.headerWrapper} style={style}>
      <h4 className={header.pageTitle}>{page}</h4>
      <header className={header.header}>
        <div className={header.header_text}>
          <h3>{headerTitle}</h3>
          <p>{headerText}</p>
          <div className={header.btn}>
              {btn}
          </div>
          {desktopAchievement}
        </div>

        <div className={`${header.image} mobile`}>
          {mobileImage}
        </div>

        <div className={`${customizeDesk} desktop`}>
          {desktopImage}
        </div>

        {mobileAchievement}
      </header>
      {children}
    </div>
  )
}

export default Header