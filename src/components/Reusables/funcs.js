import { services } from "../asset/Data"

export const Discount = (discount, value, price) => {
    let ree = value * price 
    return value < discount ? ree : ree - (ree * 0.03)
  }

  export const updateTotal = (service, settotal) => {
    let bed = Discount(5, service.bedroom, 30)  
    let living = Discount(3, service.livingroom, 40) 
    let bath = Discount(5, service.bathroom,20)  
    let kitchen = Discount(3,service.kitchen,30 ) 
    let laundry = service.laundry * 1
    let tot =  kitchen + laundry + bath + living + bed  
    settotal(tot)
  }

  export const updateDiscount = (value,dataset,name,discount) => {
    const getService = services.find((e)=> e.name === name)
    if(value >= getService?.discount){
      discount?.current.forEach((dis, i) => {
        if(i === parseInt(dataset.index, 10)){
          dis.innerText =  "3% discount off"
        }
      })
    }
    else {
      discount?.current.forEach((dis, i) => {
        if(i === parseInt(dataset.index, 10)){
          dis.innerText =  ""
        }
      })
    }
  }