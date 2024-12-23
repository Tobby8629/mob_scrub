import { ImageComponent } from "./imageComponent/Index"
import svg from "./svgs"

export const contact = [
    {
     id: 1,
     contact: "Office address",
     logoC: svg.officeC,
    //  logoC: svg.officeC,?\
     detail: "Lorem ipsum dolor sit amet consectetur. Felis maecenas libero ipsum egestas sagittis placerat ut."
    },
    {
     id: 2,
     contact: "Phone number",
     logo: svg.footer_phone,
     logoC: svg.phoneC,
     detail: +1234567890
    },
 
    {
     id: 3,
     contact: "Email",
     logo: svg.mail,
     logoC: svg.emailC,
     detail: "scrub&mob@gmail.com"
    },
    
    
    {
     id: 4,
     contact: "Instagram",
     logo: svg.insta,
     logoC: svg.instaC,
     detail: "@scrub&mob",
    },
 
    {
     id: 5,
     contact: "Twitter",
     logo: svg.twitter,
     logoC: svg.twitterC,
     detail: "@scrub&mob"
    },
 
    {
     id: 6,
     contact: "LinkedIn",
     logo: svg.linkedin,
     logoC: svg.linkeInC,
     detail: "@scrub&mob"
    },
 
]

export const service = [
    {id: 1,
   title:"Housekeeping",
   text: "Lorem ipsum dolor sit amet consectetur. Posuere ut justo odio sit. Amet lacus amet viverra sapien;",
   image: ImageComponent.housekeep,
   benefit: [
      {title: "General Cleaning", text:"This includes dusting surfaces, vacuuming or mopping floors, cleaning windows and mirrors, wiping down furniture, and maintaining overall cleanliness of the living spaces."},
      {title: "Bathroom Cleaning", text:"Thoroughly cleaning and disinfecting toilets, sinks, showers, bathtubs, and other bathroom fixtures. This also involves cleaning mirrors, countertops, and floors."},
      {title:"Kitchen Cleaning", text:"Cleaning kitchen countertops, appliances (such as stovetops, ovens, and refrigerators), sinks, and cabinets. It may also involve wiping down kitchen surfaces, cleaning the microwave, and sanitizing kitchen tools."},
      {title: "Bedroom Cleaning", text: "Dusting furniture, making beds, changing bed linens, and tidying up the room. Vacuuming or mopping floors and cleaning windowsills are also common tasks."}
    ],
  },

  {id: 2,
   title:"laundry",
   text: "Lorem ipsum dolor sit amet consectetur. Posuere ut justo odio sit. Amet lacus amet viverra sapien;",
   image: ImageComponent.laundry,
   benefit: [ 
    {title:"Washing", text: "We follow specific care instructions, including sorting garments by color, fabric type, and washing temperature to prevent color bleeding or damage. We ensure that clothes are thoroughly cleaned, removing dirt, stains, and odors."},
    {title: "Dry Cleaning", text: "Dry cleaning involves using non-water-based solvents to clean delicate fabrics or items with specific cleaning instructions. It is particularly suitable for garments like suits, dresses, or formal wear that may be damaged or distorted by traditional washing methods."},
    {title: "Ironing and Pressing", text: "Our professionals use steam irons and pressing techniques to remove wrinkles, creases, and folds from clothes, leaving them crisp and wrinkle-free."},
    {title:"Folding and Packaging", text: "After clothes are washed, dried, and pressed, we typically fold them neatly and package them for easy handling and storage. We also offer garment storage solutions, such as hangers or garment bags, to keep clothes protected and organized."}
    ],
  },
]

export const services = [
  {
    name: "bedroom",
    discount:3,
    price: 30,
    placeholder: "bedroom"
  },
  {
    name: "livingroom",
    discount:3,
    price: 40,
    placeholder: "living room"
  },
  {
    name: "kitchen",
    discount:3,
    price: 30,
    placeholder: "kitchen"
  },

  {
    name: "bathroom",
    discount:5,
    price: 20,
    placeholder: "bathroom"
  },
]

export const homeHeaderText = `
 Scrub and Mob is your secret weapon in the fight 
 against grime, dirt and clutter. Our team of expert 
 is armed with top-notch cleaning tools and 
 techniques to ensure your home is spotless and shinning.
`
export const aboutHeaderText = `
Lorem ipsum dolor sit amet consectetur. 
Egestas risus ut convallis risus quis. 
In sem ut sem molestie eu blandit. In metus ac ut 
aliquet. Odio dis felis donec ullamcorper faucibus rhoncus.
 Nulla lacus risus in consequat. Faucibus at sed gravida 
 varius. Placerat posuere consectetur tellus sit etiam 
 proin mattis enim cursus. Leo fusce nunc nibh posuere 
 nullam turpis donec faucibus. Faucibus 
tellus ac parturient massa nisi scelerisque cursus.
`
export const team = [
  {
    id: 1,
    name: "john doe",
    position: "Founder/Ceo",
    image: "abt (4).png"
  },
  {
    id: 2,
    name: "Ken ojo",
    position: "Operation manager",
    image: "abt3.png"
  },
  {
    id: 1,
    name: "Zainab Abdul",
    position: "marketing manager",
    image: "abt (2).png"
  }

]
