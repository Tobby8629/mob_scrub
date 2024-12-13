import React, { Suspense } from 'react';
import svg from '../asset/svgs';
import pointer from '../asset/pointer.png';
import { service } from '../asset/Data';
import style from '../css/services.module.css';

function Eachservice() {
  return (
    <div className={`${style.service_wrapper} mobile`}>
      {service.map((each) => (
        <div className={style.each_service} key={each.id}>
          <div className={style.each_image}>
            <Suspense fallback={<div>Loading...</div>}>
              {React.createElement(each.image, { width: "100%" })}
            </Suspense>
          </div>
          <div className={`${style.bene} ${style.top}`}>
            <h4>{each.title}</h4>
          </div>
          {each.benefit.map((benefit, index) => (
            <div className={style.bene} key={index}>
              <div className={style.imge}>
                {svg.serviceIcon}
              </div>
              <p>
                <span className={style.bold}>{benefit.title}: </span>
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Eachservice;
