 const descriptor =Object.getOwnPropertyDescriptor(Math,"PI")
  console.log(descriptor)

  console.log(Math.PI)
  Math.PI =5;
  console.log(Math.PI)

  const chai ={

    name :'ginger chai',
    price :250,
    isAvailable :true,
    orderChai : function(){
        console.log("chai nhi ban payi ji")
    }
  }
  console.log(Object.getOwnPropertyDescriptor(chai,"name"))

   Object.defineProperty(chai,'name',{//Writable :false,
     enumerable : true}) // agr enumrable false hoga tb uspr loop ni laga skte h
    
  
  console.log(Object.getOwnPropertyDescriptor(chai,"name"))

  for(let [key,value]of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
   
  }

   