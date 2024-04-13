/*const myNums=[1,2,3,4,5,6,7,8,9,10] // iska use kr rhe h qki forEach loop koi value return ni krta h
// const newNums =myNums.filter((num)=> num>3); // filter m jo true hoga whi pass hoga
  const newNums =myNums.filter((num)=>{
    return num>3
    // num>3
  })
 console.log(newNums) */
 /// map 
 /* const myNums=[1,2,3,4,5,6,7,8,9,10]
  // const newNums =myNums.map((num)=>{return num+20})
  // chaining 
   const newNums =myNums.map((num)=>num*10)
                        .map((num)=>num+1).filter((num)=>num>=30)

   console.log(newNums);*/

   //Use of Reducer
   const myNums =[1,2,4,5]
//    const myValue=myNums.reduce(function(acc,currVal){
//     console.log(`accumulator :${acc} and currValue${currVal}`)
//     return acc+currVal;
//    },0)

   const myValue=myNums.reduce((acc,currval)=> acc+currval,0)
   console.log(myValue)

   //
 const shoppingCart = [
    {
        itemName:"js course",
        price: 995
    },
    {
        itemName:"c course",
        price: 99
    },
    {
        itemName:"c++ course",
        price: 700
    },
    {
        itemName:"java course",
        price: 9999
    },
    {
        itemName:" py course",
        price: 990
    }
 ]

  const priceToPay=    shoppingCart.reduce((acc,item)=> acc + item.price,0);
  console.log(priceToPay)