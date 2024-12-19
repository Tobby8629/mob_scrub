import React from 'react'
import style from './css/home.module.css'
import Service from './Home_sub/Service'
import Reasons from './Home_sub/Reasons'
import Discount from './Home_sub/Discount'
import Faq from './Home_sub/Faq'
import Footer from './Home_sub/Footer'
import Comment from './Reusables/Comments'
import Header from './Reusables/Header/Header'
import Getprice from './Home_sub/Get_price'
import { homeHeaderText } from './asset/Data'
import { DesktopAchievement, HomeHeaderTitleSpan, MobileAchievement } from './Home_sub/Achievement'
import HeaderImgMobile from './asset/imageComponent/HeaderIMG_mobile'
import { ImageComponent } from './asset/imageComponent/Index'

function Home() {
  return (
    <div className={style.home}>
      <Header 
        btn={<Getprice />}
        headerText={homeHeaderText}
        desktopAchievement={<DesktopAchievement />}
        mobileAchievement={<MobileAchievement />}
        headerTitle={<HomeHeaderTitleSpan />}
        mobileImage={ <HeaderImgMobile />  }
        customizeDesk={style.image}
        desktopImage={<ImageComponent.HeaderTwo width={"100%"} height={"100%"} /> }
        style={{
          background: "linear-gradient(180deg, rgba(235, 218, 209, 0) 49.93%, rgba(235, 218, 209, 0.3) 100%)",
        }}
      />
      <Service />
      <Reasons />
      <Discount />
      <Comment />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home

2814782734