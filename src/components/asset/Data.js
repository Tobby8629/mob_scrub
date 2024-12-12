import { ImageComponent } from "./imageComponent/Index"
import svg from "./svgs"

export const contact = [
    {
     id: 1,
     contact: "Office address",
     logo: 'office.png',
     detail: "Lorem ipsum dolor sit amet consectetur. Felis maecenas libero ipsum egestas sagittis placerat ut."
    },
    {
     id: 2,
     contact: "Phone number",
     logo: svg.phone,
     detail: +1234567890
    },
 
    {
     id: 3,
     contact: "Email",
     logo: svg.mail,
     detail: "scrub&mob@gmail.com"
    },
    
    
    {
     id: 4,
     contact: "Instagram",
     logo: svg.insta,
     detail: "@scrub&mob",
    },
 
    {
     id: 5,
     contact: "Twitter",
     logo: svg.twitter,
     detail: "@scrub&mob"
    },
 
    {
     id: 6,
     contact: "LinkedIn",
     logo: svg.linkedin,
     detail: "@scrub&mob"
    },
 
]

export const service = [
    {id: 1,
   title:"Housekeeping",
   text: "Lorem ipsum dolor sit amet consectetur. Posuere ut justo odio sit. Amet lacus amet viverra sapien;",
   image: ImageComponent.housekeep,
   benefit: ["Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
       "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
       "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
       "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
       "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",],
  },

  {id: 2,
   title:"laundry",
   text: "Lorem ipsum dolor sit amet consectetur. Posuere ut justo odio sit. Amet lacus amet viverra sapien;",
   image: ImageComponent.laundry,
   benefit: ["Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
       "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
       "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
       "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",
       "Lorem ipsum dolor sit amet consectetur nisi libero egestas natoque",],
  },
]