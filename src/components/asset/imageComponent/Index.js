import React from 'react'

export const ImageComponent = {
   housekeep: React.lazy(()=> import('./HouseKeeping')),
   laundry: React.lazy(()=> import('./Laundry')),
   Engr: React.lazy(()=> import('./Engr')),
   HeaderTwo: React.lazy(()=> import('./HeaderTwo')),
   AboutDesktop: React.lazy(()=> import('./AboutDesktop')),
   AboutMobile: React.lazy(()=> import('./AboutMobile')),

}