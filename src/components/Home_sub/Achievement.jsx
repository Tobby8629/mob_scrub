import React from "react";
import style from "../Reusables/Header/Header.module.css";

export const DesktopAchievement = () => {
  return (
    <ul className={`${style.achieve} desktop`}>
      <li>
        <span className={style.solid}>100+</span> Total Clients
      </li>
      <li>
        <span className={style.solid}>50+</span> Employees
      </li>
      <li>
        <span className={style.solid}>5+</span> Years Experience
      </li>
    </ul>
  );
};

export const MobileAchievement = () => {
  return (
    <ul className='mobile'>
      <li> <span className={style.solid}>100+</span> Total Client</li>
      <li> <span className={style.solid}>50+</span> employees</li>
      <li> <span className={style.solid}>5+</span> years experience</li>
    </ul>
  )
}

export const HomeHeaderTitleSpan = () => {
  return(
    <>
      <span className={style.hex}>First Class </span> 
      cleaning service for your home
    </>
    
  )
}

export const HeaderT = () => {
  return(
      <>
        Get our service at an <br/> 
        <span className={style.hex}>affordable price</span>
      </>
      
  )}
