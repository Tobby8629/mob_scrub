import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import style from "../css/comment.module.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import svg from '../asset/svgs';
import UseResize from './UseResize';

const Comment = () => {
  const cards = Array.from({ length: 6 })
  const { desktop,large } = UseResize()
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={style.comment}>
      <h5>Clients love Scrub and Mob💛</h5>
      <Swiper
        spaceBetween={30}
        slidesPerView={large ? 4 : desktop ? 3 : 1}
        pagination={true}
        onSwiper={(swiper) => swiperRef.current = swiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="wpsau_swiper"
      >
        {cards.map((e, index)=>(
          <SwiperSlide key={(e, index.toString())} className={style.card} >
            <span>{svg.quotes}</span> 
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consectetur provident dolore eos vel quam tenetur
                molestias, alias exercitationem voluptatibus 
                laboriosam quasi, velit dolores? Voluptates velit
                deserunt, iure tempore alias expedita?
            </p>
            <h4>John Doe</h4>
            <svg width="89" height="16" viewBox="0 0 89 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 0L10.2961 5.52786H16.1085L11.4062 8.94427L13.2023 14.4721L8.5 11.0557L3.79772 14.4721L5.59383 8.94427L0.891548 5.52786H6.70389L8.5 0Z" fill="#F8E31A"/>
              <path d="M26.5 0L28.2961 5.52786H34.1085L29.4062 8.94427L31.2023 14.4721L26.5 11.0557L21.7977 14.4721L23.5938 8.94427L18.8915 5.52786H24.7039L26.5 0Z" fill="#F8E31A"/>
              <path d="M44.5 0L46.2961 5.52786H52.1085L47.4062 8.94427L49.2023 14.4721L44.5 11.0557L39.7977 14.4721L41.5938 8.94427L36.8915 5.52786H42.7039L44.5 0Z" fill="#F8E31A"/>
              <path d="M62.5 0L64.2961 5.52786H70.1085L65.4062 8.94427L67.2023 14.4721L62.5 11.0557L57.7977 14.4721L59.5938 8.94427L54.8915 5.52786H60.7039L62.5 0Z" fill="#F8E31A"/>
              <path d="M80.5 0L82.2961 5.52786H88.1085L83.4062 8.94427L85.2023 14.4721L80.5 11.0557L75.7977 14.4721L77.5938 8.94427L72.8915 5.52786H78.7039L80.5 0Z" fill="#DFE3EA"/>
            </svg>
          </SwiperSlide>
      ))}   
      </Swiper>
      <div className={style.swiper_ctrl}>
        <button disabled={swiperRef.current?.isBeginning} onClick={()=>swiperRef?.current?.slidePrev()} >
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="52" height="52" rx="26" fill="#F6F6F6" fill-opacity={swiperRef.current?.isBeginning ? "0.4" : "1"}/>
              <path d="M33 26H19M19 26L26 33M19 26L26 19" stroke= {swiperRef.current?.isBeginning ? "#F5CCC3" : "#885A5A"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button disabled={swiperRef?.current?.isEnd} onClick={()=>swiperRef?.current?.slideNext()}>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="52" height="52" rx="26" fill="#F6F6F6" fill-opacity={swiperRef?.current?.isEnd ? "0.4" : "1"}/>
              <path d="M19 26H33M33 26L26 19M33 26L26 33" stroke={swiperRef.current?.isEnd ? "#F5CCC3" : "#885A5A"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
  </section>
  )
}

export default Comment